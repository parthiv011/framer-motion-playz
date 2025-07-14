'use client';

import { cn } from '@/lib/utils';
import { IconX } from '@tabler/icons-react';
import Image from 'next/image';

export const Card = () => {
  return (
    <div
      className={cn(
        'h-[26rem] min-h-[26rem] w-72 rounded-xl',
        'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
        'flex flex-col p-6 text-neutral-500',
      )}
    >
      <h2 className="text-[10px] font-bold">Astitva AI</h2>
      <p className="mt-2 text-[10px] text-neutral-400">
        A collection of beautiful UI components, let's get on with it.
      </p>
      <div className="item-center flex justify-center">
        <button className="mt-4 flex items-center gap-1 rounded-md px-2 py-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
          <Image
            width={50}
            height={50}
            alt="logo"
            className="h-4 w-4"
            src="/globe.svg"
          />
          Astitva
          <IconX className="h-4 w-4 text-neutral-400" />
        </button>
      </div>
      <div className="relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-100">
        <div className="absolute inset-0 h-full w-full rounded-lg bg-white">
          <div></div>
        </div>
      </div>
    </div>
  );
};
