import Image from 'next/image';
import broadcastImg from '@/../public/broadcast-img.png';

export default function Broadcast() {
  return (
    <section id="broadcast" className="w-full flex justify-center">
      <div className="grid-cols-3 grid max-w-6xl gap-10 h-screen place-content-center">
        <Image src={broadcastImg} className="col-span-2" />
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">Reach Further with Ease</h1>
          <p className="font-medium">
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
