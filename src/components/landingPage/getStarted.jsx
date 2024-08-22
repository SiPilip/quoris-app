'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { useInView } from 'react-intersection-observer';

import imgHero1 from '@/../public/hero-img-1.png';
import imgHero2 from '@/../public/hero-img-2.png';
import bgHero from '@/../public/main-hero-bg.png';

export default function GetStarted() {
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        router.push('#get-started');
      }
    },
  });

  return (
    <section
      id="get-started"
      className="w-full flex justify-center bg-no-repeat"
      style={{ backgroundImage: bgHero }}
      ref={ref}
    >
      <div className="grid-cols-2 grid max-w-6xl gap-28 h-screen place-content-center">
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
        <div className="relative">
          <div className="w-full h-full absolute rounded-md overflow-hidden">
            <Image src={imgHero1} fill className="object-cover" />
          </div>
          <div className="w-full h-full absolute rounded-md overflow-hidden top-20 left-20">
            <Image src={imgHero2} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
