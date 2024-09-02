"use client";

import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center">
        <Image
          height={20}
          width={90}
          src={
            "https://static.vecteezy.com/system/resources/thumbnails/018/930/572/small/youtube-logo-youtube-icon-transparent-free-png.png"
          }
          alt="Logo"
          className="hidden cursor-pointer sm:block"
        />
        <h1 className="text-2xl">YouTube</h1>
      </Link>
    </>
  );
};
