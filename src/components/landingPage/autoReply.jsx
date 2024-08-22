'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

import autoreplyImg from '@/../public/autoreply-img.png';

export default function AutoReply() {
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0.8,
    delay: 800,
    onChange: (inView) => {
      if (inView) {
        router.push('#auto-reply');
      }
    },
  });

  return (
    <section id="auto-reply" className="w-full flex justify-center" ref={ref}>
      <div className="grid-cols-3 grid max-w-6xl gap-10 h-screen place-content-center justify-items-center  ">
        <Image src={autoreplyImg} className="col-span-2 " />
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">
            Respond Faster with the Convenience of Auto Reply
          </h1>
          <p className="font-medium">
            Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan
            dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami,
            Anda dapat menjawab pertanyaan atau memberikan respon otomatis,
            menghemat waktu dan energi Anda. Tanggap lebih cepat dengan
            Fowardin.
          </p>
        </div>
      </div>
    </section>
  );
}
