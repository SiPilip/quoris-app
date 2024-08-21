import Image from 'next/image';
import autoreplyImg from '@/../public/autoreply-img.png';

export default function AutoReply() {
  return (
    <section id="broadcast" className="w-full flex justify-center ">
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
