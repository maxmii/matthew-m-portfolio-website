'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../../public/img/Iridium Logo.png';

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
  return (
    <div className='rounded-md bg-black mb-4'>
      <div className='flex'>
        <Image src={Logo} alt='Logo' width={150} height={150} />
        <ul className='justify-around relative flex text-justify'>
          {navLinks.map(({ title, path }) => (
            <li key={title} className='text-white mx-64 mt-2.5'>
              <Link href={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
