"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function VideoExplenation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return <></>;

  return (
    <blockquote
      className="twitter-tweet m-auto w-md"
      data-media-max-width="560"
    >
      <Image
        src="/peringatan-darurat-indonesia.png"
        alt="Peringatan darurat indonesia"
        width={1024}
        height={1024}
      >
      </Image>
      <a href="https://twitter.com/MataNajwa/status/1826523637102641304?ref_src=twsrc%5Etfw">
        August 22, 2024
      </a>
    </blockquote>
  );
}
