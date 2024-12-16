"use client";
import React from "react";
import dynamic from "next/dynamic";
import { gridItems } from "@/data";

// Dynamically import BentoGrid and BentoGridItem to handle SSR issues
const BentoGrid = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGrid), { ssr: false });
const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGridItem), { ssr: false });

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({ id, title, titleClassName, description, className, img, imgClassName, spareImg }) => (
            <BentoGridItem //
              id={id}
              key={id}
              title={title}
              titleClassName={titleClassName}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
