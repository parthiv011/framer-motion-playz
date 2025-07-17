'use client';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'motion/react';

type Card = {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: 'Raymond Reddington',
    title: 'Concierge of crime',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA6VbDXTFr6BQOXfygSrrbQQpz2LCkl3ZGFOFlgDnyO3zWTtSwbGibYm5XBXtsv7yuSU&usqp=CAU',
    ctaLink: 'https://parthiv-parmar.vercel.app/?tab=Projects',
    ctaText: 'Explore',
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, is an American singer-songwriter. Her music is noted for
          its melancholic exploration of glamor and romance, with frequent
          references to pop culture and 1950s–1970s Americana.[2] She is the
          recipient of various accolades, including an MTV Video Music Award,
          three MTV Europe Music Awards, two Brit Awards, two Billboard Women in
          Music awards and a Satellite Award, in addition to nominations for
          eleven Grammy Awards and a Golden Globe Award.[3] Variety honored her
          at their Hitmakers Awards for being "one of the most influential
          singer-songwriters of the 21st century"Award, in addition to
          nominations for eleven Grammy Awards and a Golden Globe Award.[3]
          Variety honored her at their Hitmakers Awards for being "one of the
          most influential singer-songwriters of the 21st century".
        </p>
      );
    },
  },
  {
    description: 'Rohit Sharma',
    title: 'Hitman',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReL8XWfMNlqWqLYWOrM1lPp1xAJb-0VeEiVAEZLpKlLrie3cCRYp5DTFLgKtPk0w2Xrt0&usqp=CAU',
    ctaLink: 'https://parthiv-parmar.vercel.app/?tab=Experiences',
    ctaText: 'Explore',
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, is an American singer-songwriter. Her music is noted for
          its melancholic exploration of glamor and romance, with frequent
          references to pop culture and 1950s–1970s Americana.[2] She is the
          recipient of various accolades, including an MTV Video Music Award,
          three MTV Europe Music Awards, two Brit Awards, two Billboard Women in
          Music awards and a Satellite Award, in addition to nominations for
          eleven Grammy Awards and a Golden Globe Award.[3] Variety honored her
          at their Hitmakers Awards for being "one of the most influential
          singer-songwriters of the 21st century" Award, in addition to
          nominations for eleven Grammy Awards and a Golden Globe Award.[3]
          Variety honored her at their Hitmakers Awards for being "one of the
          most influential singer-songwriters of the 21st century".
        </p>
      );
    },
  },
  {
    description: 'Lana Del Rey',
    title: 'Summertimes Sadness',
    src: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Lana_Del_Rey_-_Lust_for_Life.png',
    ctaLink: 'https://parthiv-parmar.vercel.app/',
    ctaText: 'Explore',
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, is an American singer-songwriter. Her music is noted for
          its melancholic exploration of glamor and romance, with frequent
          references to pop culture and 1950s–1970s Americana.[2] She is the
          recipient of various accolades, including an MTV Video Music Award,
          three MTV Europe Music Awards, two Brit Awards, two Billboard Women in
          Music awards and a Satellite Award, in addition to nominations for
          eleven Grammy Awards and a Golden Globe Award.[3] Variety honored her
          at their Hitmakers Awards for being "one of the most influential
          singer-songwriters of the 21st century"Award, in addition to
          nominations for eleven Grammy Awards and a Golden Globe Award.[3]
          Variety honored her at their Hitmakers Awards for being "one of the
          most influential singer-songwriters of the 21st century".
        </p>
      );
    },
  },
];

export const LayoutCards = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null));

  return (
    <div className="relative min-h-screen bg-gray-100 py-10">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop:blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          ref={ref}
          layoutId={`card-${current.title}`}
          className="fixed inset-0 z-20 m-auto h-[500px] w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4"
        >
          <motion.img
            src={current.src}
            alt={current.title}
            layoutId={`card-img-${current.src}`}
            className="aspect-square w-full rounded-xl"
          />
          <div className="flex flex-col items-start gap-2">
            <div className="flex w-full items-start justify-between gap-2 py-4">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="text-xs font-bold tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${current.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-50 overflow-auto [mask-image:linear-gradient(to_top,transparent_20%,black_80%)] pb-20"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            key={idx}
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <motion.img
                src={card.src}
                alt={card.title}
                layoutId={`card-img-${card.src}`}
                className="aspect-square h-20 rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="text-xs font-bold tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}{' '}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
