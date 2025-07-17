'use client';

import { IconRocket } from '@tabler/icons-react';
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
  useMotionValueEvent,
} from 'motion/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket />,
    title: 'Generate ultra realistic images in second',
    description:
      'With our state od that art AI, you can generate the images in seconds',
    content: (
      <div>
        <Image
          src="/image1.jpg"
          width="500"
          height="500"
          className="rounded-lg"
          alt="Image 1"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket />,
    title: 'Replicate image art',
    description:
      'With our state od that art AI, you can generate the images in seconds',
    content: (
      <div>
        <Image
          src="/image2.jpg"
          width="500"
          height="500"
          className="rounded-lg"
          alt="Image 1"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket />,
    title: 'Generate ultra realistic images in second',
    description:
      'With our state od that art AI, you can generate the images in seconds',
    content: (
      <div>
        <Image
          src="/image3.jpg"
          width="500"
          height="500"
          className="rounded-lg"
          alt="Image 1"
        />
      </div>
    ),
  },
];

export const ParallaxFeature = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const backgrounds = ['#004052', '#220135', '#5c162e'];
  const [background, setBackground] = useState(backgrounds[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    console.log(finalValue);
    setBackground(backgrounds[finalValue]);
  });

  return (
    <motion.div
      ref={containerRef}
      animate={{ background }}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-20">
        {features.map((feature, idx) => (
          <Card feature={feature} key={idx} />
        ))}
      </div>
    </motion.div>
  );
};

function Card({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 300,
      damping: 30,
      mass: 1,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);

  return (
    <motion.div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-40"
    >
      <motion.div
        style={{
          scale,
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </motion.div>
  );
}
