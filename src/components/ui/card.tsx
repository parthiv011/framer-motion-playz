'use client';

import { cn } from '@/lib/utils';
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconX,
} from '@tabler/icons-react';
import Image from 'next/image';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: 'blur(10px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: 'blur(10px)',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={cn(
            'h-[28rem] min-h-[26rem] w-72 rounded-xl bg-white',
            'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
            'flex flex-col p-6 text-neutral-500',
          )}
        >
          <h2 className="text-[10px] font-bold">Astitva AI</h2>
          <p className="mt-2 text-[10px] text-neutral-400">
            A collection of beautiful UI components, let's get on with it.
          </p>
          <div className="item-center flex justify-center">
            <button
              onClick={() => setOpen(false)}
              className="mt-4 flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            >
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
            <motion.div
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              whileHover={{ opacity: 1, scale: 1.05, filter: 'blur(0px)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white"
            >
              {/* Motion divs */}
              <div className="flex gap-2 p-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <IconMessage className="h-4 w-4 text-neutral-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    Astitva UI Components
                  </p>
                  <p className="mt-1 text-[8px] text-neutral-400">
                    A collection of UI components
                  </p>
                </div>
              </div>

              <div className="flex gap-2 p-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <Icon24Hours className="h-4 w-4 text-neutral-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    24 hours stand by
                  </p>
                  <p className="mt-1 text-[8px] text-neutral-400">
                    A Full strategic supply
                  </p>
                </div>
              </div>

              <div className="flex gap-2 p-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <Icon360View className="h-4 w-4 text-neutral-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    360 View
                  </p>
                  <p className="mt-1 text-[8px] text-neutral-400">
                    We are available 24/7
                  </p>
                </div>
              </div>

              <div className="flex gap-2 p-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <Icon3dCubeSphere className="h-4 w-4 text-neutral-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    Astitva UI Components
                  </p>
                  <p className="mt-1 text-[8px] text-neutral-400">
                    A collection of UI components
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 p-4">
                <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <IconPlus className="h-3 w-3 text-neutral-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-neutral-600">
                    Create Project
                  </p>
                </div>
              </div>

              {/* Motion divs ending here */}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
