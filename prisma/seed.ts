// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@chalet.com' // TON email d'admin
  const password = 'password123'   // TON mot de passe

  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(password, 10)
    
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: 'Super Admin',
        role: 'ADMIN',
        setupToken: null,
      },
    })
    console.log(`✅ Admin créé : ${email}`)
  } else {
    console.log('ℹ️ L\'admin existe déjà.')
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })