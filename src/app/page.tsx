"use client";

import { About, Experience, HeroBanner, Highlights } from "@/components";

export default function Homepage() {
  return (
    <>
      <div className="p-5">
        <HeroBanner />
        <Highlights />
        <div className="grid grid-cols-2 p-5 pt-9">
          <About />
          <Experience />
        </div>
      </div>
    </>
  );
}
