import Image from 'next/image';
import campaignImg from '@/../public/campaign-img.png';

export default function Campaign() {
  return (
    <section id="broadcast" className="w-full flex justify-center bg-white">
      <div className="grid-cols-3 grid max-w-6xl gap-10 h-screen place-content-center justify-items-center  ">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">Right Time, Effective Messages</h1>
          <p className="font-medium">
            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
            tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
            pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
            Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
          </p>
        </div>
        <Image src={campaignImg} className="col-span-2 " />
      </div>
    </section>
  );
}
