'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const [pages] = useState({
    home: {
      url: "/",
      title: "Home",
    },
    projects: {
      url: "/projects",
      title: "Projects",
    },
    // blogs: {
    //   url: '/blogs',
    //   title: 'Blogs'
    // },
  });
  const pathName = usePathname();

  return (
    <nav>
      <ul>
        {Object.values(pages).map((page) => {
          const className = pathName === page.url ? "active" : "";
          return (
            <li key={page.url}>
              <Link className={className as string} href={page.url}>
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
