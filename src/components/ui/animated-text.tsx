'use client';

import { useAnimate, motion, stagger } from 'motion/react';
import React, { useEffect } from 'react';

export const AnimatedText = () => {
  const text =
    'Do you really expect this guy to believe that  marshmallow, disguised as a CEO. A comic figure in an ill-fitting uniform.Could possibly make me nervous?';

  const [scope, animate] = useAnimate();
  const startAnimating = () => {
    animate(
      'span',
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      },
      {
        duration: 1,
        ease: 'easeInOut',
        delay: stagger(0.05),
      },
    );
  };
  useEffect(() => {
    startAnimating();
  }, []);
  return (
    <div
      ref={scope}
      className="mx-auto max-w-3xl text-left text-4xl font-bold text-white"
    >
      {/* <motion.span style={{ opacity: 0 }} className="inline-block">
        {text}
      </motion.span> */}

      {text.split(' ').map((word, idx) => (
        <motion.span
          style={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          key={idx}
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};
