'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const navItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    {
      title: 'Login',
      href: '/login',
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-40">
      <nav className="mx-auto flex max-w-4xl rounded-full bg-gray-100 px-4 py-1">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={item.title}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="group relative w-full py-3 text-center text-xs text-neutral-500"
          >
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 h-full w-full rounded-full bg-black"
              ></motion.div>
            )}
            <span className="relative z-20 text-neutral-500 group-hover:text-neutral-400">
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
