'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import broadcastImg from '@/../public/broadcast-img.png';

export default function Broadcast() {
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#broadcast', { scroll: false });
      }
    },
  });

  return (
    <section
      id="broadcast"
      className="flex w-full justify-center px-10"
      ref={ref}
    >
      <div className="grid h-screen max-w-6xl grid-cols-3 place-content-center gap-10 max-lg:grid-cols-1">
        <Image src={broadcastImg} className="col-span-2 mx-auto max-lg:w-4/5" />
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold max-md:text-3xl">
            Reach Further with Ease
          </h1>
          <p className="font-medium max-md:text-sm">
            Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
            komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
            pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens
            Anda tidak pernah semudah ini.
          </p>
        </div>
      </div>
    </section>
  );
}
