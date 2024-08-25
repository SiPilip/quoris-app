'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { useInView } from 'react-intersection-observer';

import imgHero1 from '@/../public/hero-img-1.png';
import bgHero from '@/../public/main-hero-bg.png';

export default function GetStarted() {
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#get-started');
      }
    },
  });

  return (
    <section
      id="get-started"
      className="flex h-full w-full justify-center bg-no-repeat max-xl:px-10 max-sm:pt-20"
      style={{ backgroundImage: `url(${bgHero.src})` }}
      ref={ref}
    >
      <div className="grid h-screen w-full max-w-6xl grid-cols-2 place-content-center place-items-center gap-28 max-lg:mt-10 max-lg:grid-cols-1 max-lg:gap-5">
        <Image src={imgHero1} className="mx-auto" />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-10 max-md:text-3xl">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="font-medium max-md:text-sm">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </p>
          <button
            type="button"
            className="transisi flex w-fit flex-row items-center gap-5 rounded bg-neutral-950 px-5 text-white hover:translate-x-1"
          >
            <span className="border-r py-3 pr-5">Daftar Sekarang</span>
            <HiArrowSmallRight className="-mx-2 text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
