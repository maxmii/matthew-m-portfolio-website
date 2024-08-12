'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../img/Iridium Logo.jpeg';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contactPage',
  },
];

const MainNavigation = () => {
  //   const pathName = usePathname();
  return (
    <div className="rounded-md bg-slate-500">
      <div>
        <Image
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
          className="text-left"
        />
      </div>
      <div>
        <ul className="justify-around relative flex text-justify">
          {navLinks.map(({ title, path }) => (
            <li key={title}>
              <Link href={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
