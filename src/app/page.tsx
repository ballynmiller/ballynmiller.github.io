"use client";

import { About, HeroBanner, Highlights, Navigation } from "@/components";

export default function Homepage() {
  return (
    <>
      <HeroBanner />
      <Navigation />
      <About />
      <Highlights />
    </>
  );
}
