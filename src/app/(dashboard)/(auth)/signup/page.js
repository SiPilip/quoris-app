import Link from 'next/link';

export default function page() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="rounded-xl bg-white p-10">
        <h1 className="text-center text-xl font-bold">Welcome Backs!</h1>
        <p className="text-center font-medium">
          We’re so excited to see you again!
        </p>
        <form action="" className="mt-5 flex flex-col gap-3 text-sm">
          <input
            type="text"
            className="w-full rounded-md border-2 px-5 py-4"
            placeholder="Username / email"
          />
          <input
            type="text"
            className="w-full rounded-md border-2 px-5 py-4"
            placeholder="Password"
          />
          <Link className="font-medium text-primary" href="/">
            Lupa password?
          </Link>
          <button
            type="submit"
            className="transisi w-full rounded-lg bg-primary py-4 text-white hover:bg-third"
          >
            Sign in
          </button>
          <p className="py-2 text-center font-medium">
            Butuh buat akun?{' '}
            <Link href="/signup" className="text-primary">
              Buat disini!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
