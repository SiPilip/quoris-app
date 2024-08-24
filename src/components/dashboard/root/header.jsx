'use client';

import { useSession } from 'next-auth/react';
import { HiCalendar } from 'react-icons/hi';

export default function DashboardHeader() {
  const { data: session } = useSession();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return 'pagi';
    if (hour < 15) return 'siang';
    if (hour < 19) return 'sore';
    return 'malam';
  };

  return (
    <div className="mt-10 flex flex-row justify-between">
      <h1 className="text-2xl font-bold">
        Selamat {getGreeting()},{' '}
        {session?.user?.username || session?.user?.email}
      </h1>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col items-end">
          <p className="font-medium text-gray-400">Tanggal hari ini</p>
          <p className="-mt-1 font-medium text-gray-500">
            {new Date().toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <HiCalendar className="text-2xl" />
      </div>
    </div>
  );
}
