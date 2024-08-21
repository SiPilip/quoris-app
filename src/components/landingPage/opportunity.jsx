import Image from 'next/image';
import opportunityImg from '@/../public/opportunity-img-1.png';

export default function Opportunity() {
  return (
    <section
      id="broadcast"
      className="w-full flex h-screen justify-center bg-white"
    >
      <div className=" max-w-6xl ">
        <h1 className="text-primary text-center font-bold text-4xl">
          One Step Closer to More Effective and Connected Communication!
        </h1>
        <div className="place-content-center justify-items-center grid grid-cols-3">
          <Image src={opportunityImg} />
          <div className="flex flex-col justify-center gap-5 col-span-2">
            <h1 className="text-4xl font-bold">
              Right Time, Effective Messages
            </h1>
            <p className="font-medium">
              Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan
              yang tepat sasaran. Manfaatkan fitur Campaign kami untuk
              mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan
              sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang
              lebih besar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
