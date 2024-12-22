"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const activeNavbar = usePathname();

  return (
    <div className="shadow-NavShadow">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link
                    href="/"
                    className={
                      activeNavbar === "/"
                        ? "text-[16px] text-[#e7b97a]"
                        : "text-[16px]"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a className="text-[16px]">Service</a>
                </li>
                <li>
                  <a className="text-[16px]">Fleet</a>
                </li>
                <li>
                  <a className="text-[16px]">About</a>
                </li>
                <li>
                  <a className="text-[16px]">Contact</a>
                </li>
              </ul>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-[22px]">
            {" "}
            <Image src="/logo.png" height={60} width={60} alt="logo" />{" "}
            FleetConnect
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                className={
                  activeNavbar === "/"
                    ? "text-[16px] text-[#e7b97a]"
                    : "text-[16px]"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <a className="text-[16px]">Service</a>
            </li>
            <li>
              <a className="text-[16px]">Fleet</a>
            </li>
            <li>
              <a className="text-[16px]">About</a>
            </li>
            <li>
              <a className="text-[16px]">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/api/login">
            <button className="bg-[#fee100] px-4 py-2 rounded-lg">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
