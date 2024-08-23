'use client';

import { HiCheck } from 'react-icons/hi';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { phoneCode } from '@/data/phoneCode';
import { regexEmail, regexNumber, regexText } from '@/lib/formatRegex';
import { cn } from '@/lib/utils';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [emailExists, setEmailExists] = useState(false);
  const [showPasswordReq, setShowPasswordReq] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  async function onSubmit(data) {
    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setEmailExists(true);
        reset();
        return;
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        router.push('/dashboard');
      }
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
      onClick={() => setEmailExists(false)}
    >
      <input
        type="email"
        id="email"
        className="w-full rounded-md border-2 px-5 py-4"
        placeholder="Email"
        {...register('email', {
          required: 'Email diperlukan dalam proses Signup!',
          pattern: {
            value: regexEmail(),
            message: 'Mohon gunakan format email yang benar!',
          },
        })}
      />
      <input
        type="text"
        id="username"
        className="w-full rounded-md border-2 px-5 py-4"
        placeholder="Username"
        {...register('username', {
          required: 'Username diperlukan dalam proses Signup!',
          pattern: {
            value: regexText(),
            message: 'Mohon gunakan format username yang benar!',
          },
        })}
      />
      <div className="flex flex-row gap-3">
        <select
          type="text"
          className="w-full basis-1/4 rounded-md border-2 px-5 py-4"
        >
          {phoneCode.map((item, index) => (
            <option
              className="text-base"
              value={item.dial_code}
              key={`item-${index}`}
              selected={item.dial_code === '+62'}
            >
              {item.emoji} {item.dial_code} {item.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="w-full basis-3/4 rounded-md border-2 px-5 py-4"
          id="phone"
          placeholder="Whatsapp Phone Number"
          {...register('phone', {
            required: 'Nomor whatsapp diperlukan dalam proses Signup!',
            pattern: {
              value: regexNumber(),
              message: 'Mohon gunakan format nomor whatsapp yang benar!',
            },
          })}
        />
      </div>
      <input
        type="password"
        className="w-full basis-3/4 rounded-md border-2 px-5 py-4"
        placeholder="Password"
        onClick={() => setShowPasswordReq(true)}
        // onChange={(e) => console.log(e.target.value)}
        id="password"
        {...register('password', {
          required: 'Password diperlukan dalam proses Signup!',
          onChange: (e) => {
            setPassword(e.target.value);
          },
        })}
      />
      <input
        type="password"
        className="w-full basis-3/4 rounded-md border-2 px-5 py-4"
        placeholder="Ulangi password"
        id="passwordrepeat"
        {...register('passwordrepeat', {
          required: 'Kata Sandi wajib diisi!',
          validate: (value) =>
            value === getValues().password || 'Password anda tidak sama!',
        })}
      />
      {(errors?.email ||
        errors?.username ||
        errors?.phone ||
        errors?.passwordrepeat) && (
        <div className="bg-gray-100 p-5 text-red-600">
          <p>
            {errors?.email?.message ||
              errors?.username?.message ||
              errors?.phone?.message ||
              errors?.passwordrepeat?.message}
          </p>
        </div>
      )}
      {showPasswordReq && (
        <div className="bg-gray-50 p-5">
          <p>Password harus terdiri dari</p>
          <ul>
            <li
              className={cn('flex items-center gap-1 text-red-600', {
                'text-green-600': password?.length >= 8,
              })}
            >
              <HiCheck /> Lebih dari 8 karakter
            </li>
            <p className="mt-1">Setidaknya harus terdiri dari 3 syarat</p>
            <li
              className={cn('flex items-center gap-1 text-red-600', {
                'text-green-600': /[a-z]/.test(password),
              })}
            >
              <HiCheck /> Huruf kecil (a-z)
            </li>
            <li
              className={cn('flex items-center gap-1 text-red-600', {
                'text-green-600': /[A-Z]/.test(password),
              })}
            >
              <HiCheck /> Huruf besar (A-Z)
            </li>
            <li
              className={cn('flex items-center gap-1 text-red-600', {
                'text-green-600': /\d/.test(password),
              })}
            >
              <HiCheck /> Angka
            </li>
            <li
              className={cn('flex items-center gap-1 text-red-600', {
                'text-green-600': /[!@#$%^&*]/.test(password),
              })}
            >
              <HiCheck /> Karakter Spesial (!@#$%^&*)
            </li>
          </ul>
        </div>
      )}
      <button
        type="submit"
        className="transisi w-full rounded-lg bg-primary py-4 text-white hover:bg-third"
      >
        Sign up
      </button>
      {emailExists ? (
        <p className="animate-pulse py-2 text-center font-medium text-red-500">
          Email yang anda gunakan sudah terdaftar!{' '}
          <Link href="/signin" className="text-red-600">
            Masuk disini!
          </Link>
        </p>
      ) : (
        <p className="py-2 text-center font-medium">
          Sudah punya akun?{' '}
          <Link href="/signin" className="text-primary">
            Masuk disini!
          </Link>
        </p>
      )}
    </form>
  );
}
