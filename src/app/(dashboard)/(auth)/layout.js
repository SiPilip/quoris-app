import Image from 'next/image';
import forwardinLogo from '@/../public/logo-forwardin.svg';

export default function AuthLayout({ children }) {
  return (
    <main className="h-screen w-screen max-md:bg-white">
      <nav className="left-0 top-0 mx-auto w-full max-w-7xl px-10 py-10 max-md:fixed">
        <Image src={forwardinLogo} className="scale-125 max-md:mx-auto" />
      </nav>
      <div className="mx-auto my-auto grid max-w-7xl grid-cols-2 place-items-center gap-10 rounded-lg py-10 max-md:h-screen max-md:grid-cols-1 md:px-10">
        {children}
      </div>
    </main>
  );
}
