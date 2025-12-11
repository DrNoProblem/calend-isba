// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth"; // Le @ fait référence à la racine
export const { GET, POST } = handlers;