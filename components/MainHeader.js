"use client"
import React from "react";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import MainHeaderBackground from "./MainHeaderBackground";
import { usePathname } from "next/navigation";
const MainHeader = () => {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <div className={classes.header}>
        <header>
          <Link href="/" className={classes.logo}>
            <Image src={logo} alt="logo" priority />
            NextLevel Food
          </Link>
        </header>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals" className={path.startsWith('/meals')? classes.active : undefined}>Browse Meals</Link>
            </li>
            <li>
              <Link href="/community"  className={path === '/community' ? classes.active : undefined}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainHeader;
