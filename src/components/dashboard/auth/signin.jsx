'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Signin() {
  const { register, handleSubmit } = useForm();

  const [invalidCredential, setInvalidCredential] = useState(false);

  const router = useRouter();

  async function onSubmit(data) {
    const { id, password } = data;

    try {
      const res = await signIn('credentials', {
        id,
        password,
        redirect: false,
      });

      if (res.error) {
        setInvalidCredential(true);
        return;
      }

      router.replace('/dashboard');
    } catch (error) {
      console.error(error);
    }
  }

  function onError(e) {
    console.error(e);
  }

  return (
    <form
      className="mt-5 flex flex-col gap-3 text-sm"
      onSubmit={handleSubmit(onSubmit, onError)}
      onClick={() => setInvalidCredential(false)}
    >
      <input
        type="text"
        id="id"
        className="w-full rounded-md border-2 px-5 py-4"
        placeholder="Email / Username"
        {...register('id', {
          required: 'Email diperlukan dalam proses Signin!',
        })}
      />
      <input
        type="password"
        className="w-full basis-3/4 rounded-md border-2 px-5 py-4"
        placeholder="Password"
        // onChange={(e) => console.log(e.target.value)}
        id="password"
        {...register('password', {
          required: 'Password diperlukan dalam proses Signin!',
        })}
      />
      <Link className="mb-3 font-medium text-primary" href="/">
        Lupa password?
      </Link>
      <button
        type="submit"
        className="transisi w-full rounded-lg bg-primary py-4 text-white hover:bg-third"
      >
        Sign in
      </button>
      {invalidCredential && (
        <p className="-mt-3 py-2 text-center font-medium text-red-500">
          Periksa kembali email, username, atau password anda!
        </p>
      )}
      <p className="py-2 text-center font-medium">
        Butuh buat akun?{' '}
        <Link href="/signup" className="text-primary">
          Buat disini!
        </Link>
      </p>
    </form>
  );
}
