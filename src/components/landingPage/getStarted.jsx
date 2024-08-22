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
      className="w-full h-full flex justify-center bg-no-repeat max-xl:px-10"
      style={{ backgroundImage: `url(${bgHero.src})` }}
      ref={ref}
    >
      <div className="grid-cols-2 grid max-w-6xl gap-28 max-lg:gap-5 h-screen place-content-center max-lg:grid-cols-1 max-lg:mt-10 ">
        <Image src={imgHero1} />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-10">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="font-medium">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </p>
          <button
            type="button"
            className="bg-neutral-950 transisi hover:translate-x-1 text-white px-5 rounded w-fit flex flex-row gap-5 items-center"
          >
            <span className="py-3 border-r pr-5">Daftar Sekarang</span>
            <HiArrowSmallRight className="text-2xl -mx-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
