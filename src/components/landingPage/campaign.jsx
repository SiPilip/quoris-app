'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';

import campaignImg from '@/../public/campaign-img.png';

export default function Campaign() {
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#campaign');
      }
    },
  });

  return (
    <section
      id="campaign"
      className="flex w-full justify-center bg-[#FEFEFF] px-10"
      ref={ref}
    >
      <div className="grid h-screen max-w-6xl grid-cols-3 place-content-center justify-items-center gap-10 max-lg:grid-cols-1">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">Right Time, Effective Messages</h1>
          <p className="font-medium">
            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
            tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
            pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
            Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
          </p>
        </div>
        <Image src={campaignImg} className="col-span-2 mx-auto max-lg:w-4/5" />
      </div>
    </section>
  );
}
