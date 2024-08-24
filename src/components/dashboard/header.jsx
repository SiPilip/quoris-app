import { HiBell, HiCog6Tooth, HiMiniUser } from 'react-icons/hi2';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex w-full justify-end">
      <div className="mt-5 flex flex-row gap-3">
        <Link
          href="/"
          className="flex items-center justify-center rounded-full bg-white"
        >
          <HiBell className="m-3 w-full text-2xl" />
        </Link>
        <div className="flex items-center rounded-full bg-white p-1 font-medium">
          <p className="mx-10">username</p>
          <div className="flex items-center justify-center rounded-full bg-primary">
            <HiMiniUser className="m-2 text-2xl text-white" />
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center rounded-full bg-white"
        >
          <HiCog6Tooth className="m-3 w-full text-2xl" />
        </Link>
      </div>
    </div>
  );
}
