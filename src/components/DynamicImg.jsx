import React, { useRef } from 'react';
import { ReactLenis } from "lenis/dist/lenis-react";
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

const SECTION_HEIGHT = 1500;

const DynamicContent = ({ content }) => {
  return (
    <div>
      <SmoothScrollSection content={content} />
    </div>
  );
};

export default DynamicContent;

export const SmoothScrollSection = ({ content }) => {
  return (
    <div className="bg-zinc-900">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <HeroSection content={content} />
      </ReactLenis>
    </div>
  );
};

const HeroSection = ({ content }) => (
  <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full">
    <CenterContent content={content} />
    <ParallaxContent content={content} />

  </div>
);

const CenterContent = ({ content }) => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: content.find(item => item.type === 'image')?.src ? `url(${content.find(item => item.type === 'image').src})` : "",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxContent = ({ content }) => (
  <div className="mx-auto max-w-5xl px-4 pt-[200px]">
    {content.map((item, index) => (
      <ParallaxItem key={index} {...item} />
    ))}
  </div>
);

const ParallaxItem = ({ type, src, text, start, end, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ transform, opacity }}
    >
      {type === 'image' ? (
        <img src={src} alt={text} className="w-full h-auto rounded-2xl" />
      ) : (
        <p >{text}</p>
    
      )}
    </motion.div>
  );
};
