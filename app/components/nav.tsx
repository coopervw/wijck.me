"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  const pathname = usePathname(); // Get current pathname
  const [bubbleStyle, setBubbleStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Extract the base path from the current pathname
    const basePath = `/${pathname.split('/')[1]}`;

    // Update bubble position on initial load and pathname change
    const activeLink = document.querySelector(`a[href="${basePath}"]`);
    if (activeLink && navRef.current) {
      const { offsetWidth, offsetLeft } = activeLink as HTMLElement;
      setBubbleStyle({ width: offsetWidth, left: offsetLeft });

      setIsInitialLoad(false);
    }
  }, [pathname]);

  return (
      <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <nav
              className="flex flex-row items-center justify-center relative px-0 pt-5 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
              id="nav"
          >
            <div
                ref={navRef}
                className="relative flex flex-row space-x-0 py-1 bg-gray-100 dark:bg-gray-100 rounded-full"
            >
              <div
                  className={`absolute top-0 left-0 h-full bg-black rounded-full ${isInitialLoad ? '' : 'transition-all duration-300 ease-in-out'}`}
                  style={{
                    width: `${bubbleStyle.width}px`,
                    transform: `translateX(${bubbleStyle.left}px)`,
                  }}
              />
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative z-10 transition-all duration-300 ease-in-out flex align-middle py-1 px-4 rounded-full focus:outline-none ${
                    isActive
                      ? 'text-white' // Active text color
                      : 'text-neutral-800 dark:text-neutral-200' // Default text color
                  }`}
                >
                      {name}
                    </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </aside>
  )
}
