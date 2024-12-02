"use client";

import { About, Experience, HeroBanner, Highlights } from "@/components";

export default function Homepage() {
  return (
    <>
      <div className="p-0 md:p-5">
        <HeroBanner />
        <Highlights />
        <div className="lg:grid grid-cols-2 lg:p-5 md:pt-9">
          <About />
          <Experience />
        </div>
      </div>
    </>
  );
}
