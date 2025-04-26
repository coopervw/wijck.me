"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

// Define the navigation items structure
const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  const pathname = usePathname();
  const [bubbleStyle, setBubbleStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  // Use a ref to store references to the individual link elements
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    // Find the active navigation item key
    // Handle exact match for '/' and prefix match for others
    const activePath =
      Object.keys(navItems).find((path) =>
        path === "/" ? pathname === "/" : pathname.startsWith(path)
      ) || "/"; // Default to '/' if no match (adjust if needed)

    const activeItem = itemRefs.current[activePath];
    const navContainer = navContainerRef.current;

    if (activeItem && navContainer) {
      // Calculate position relative to the nav container
      const navRect = navContainer.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      const newLeft = itemRect.left - navRect.left;
      const newWidth = itemRect.width;

      // Update bubble style
      // Set opacity to 1 to make it visible after initial calculation
      setBubbleStyle({
        left: newLeft,
        width: newWidth,
        opacity: 1,
      });
    } else {
      // If no active item found (e.g., during initial render before refs are set), hide the bubble
      setBubbleStyle({ left: 0, width: 0, opacity: 0 });
    }

    // Dependency array: Recalculate whenever the pathname changes
  }, [pathname]);

  // Function to assign refs to the link elements
  const setItemRef = (path: string) => (el: HTMLAnchorElement | null) => {
    itemRefs.current[path] = el;
  };

  return (
    // Centering the navbar for demonstration, adjust as needed
    <div className="flex justify-center my-8">
      <nav
        ref={navContainerRef}
        className="relative inline-flex items-center bg-gray-100 p-1 rounded-full space-x-1" // Container styling
      >
        {/* The Animated Bubble */}
        <div
          className="absolute top-1 bottom-1 left-0 h-auto bg-blue-400 rounded-full transition-all duration-300 ease-out" // Bubble styling & transition
          style={{
            left: `${bubbleStyle.left}px`,
            width: `${bubbleStyle.width}px`,
            opacity: bubbleStyle.opacity, // Control visibility
          }}
          aria-hidden="true" // Hide from screen readers
        />

        {/* Navigation Links */}
        {Object.entries(navItems).map(([path, { name }]) => {
          // Determine if the current link is active
          const isActive =
            path === "/" ? pathname === "/" : pathname.startsWith(path);

          return (
            <Link
              key={path}
              href={path}
              ref={setItemRef(path)} // Assign ref using the helper function
              className={`relative z-10 block text-sm md:text-base font-medium px-4 py-1.5 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800 ${
                isActive
                  ? "text-white" // Active text color
                  : "text-gray-700 hover:text-gray-900" // Inactive text color
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
