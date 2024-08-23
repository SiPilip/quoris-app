'use client';

import { signOut } from 'next-auth/react';

export default function Signout() {
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className="bg-red-400 px-5 py-10"
    >
      Signout
    </button>
  );
}
