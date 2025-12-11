// app/login/page.tsx
'use client'; // Composant client car formulaire

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions'; // On va créer ça juste après

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
             <h1 className="text-2xl font-bold">Chalet Manager</h1>
          </div>
        </div>
        
        <form action={dispatch} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className="mb-3 text-2xl font-bold">Connexion</h1>
            <div className="w-full">
              <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>
            <LoginButton />
            <div className="flex h-8 items-end space-x-1">
              {errorMessage && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-400" aria-disabled={pending}>
      {pending ? 'Connexion...' : 'Se connecter'}
    </button>
  );
}