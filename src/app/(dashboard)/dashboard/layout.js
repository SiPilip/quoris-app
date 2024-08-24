import Image from 'next/image';

import logo from '@/../public/dashboard/logo.png';
import Navside from '@/components/dashboard/navside';
import Header from '@/components/dashboard/header';

export default function Layout({ children }) {
  return (
    <main className="bg-white">
      <div className="bg-white lg:grid lg:h-screen lg:grid-cols-[19rem_1fr] lg:grid-rows-[auto_1fr]">
        <aside className="custom-scroll overflow-y-scroll bg-white md:row-[1/-1] lg:flex lg:flex-col lg:gap-[3.2rem] lg:px-[2.4rem] lg:py-[2rem] lg:pl-[1.6rem]">
          <Image src={logo} className="mx-auto" />
          <Navside />
        </aside>
        <main className="custom-scroll mr-8 mt-10 flex flex-col justify-start overflow-y-scroll rounded-lg bg-lightsecondary px-5 pb-10">
          <Header />
          {children}
        </main>
        <p className="my-4">Forwardin - Copyright</p>
      </div>
    </main>
  );
}
