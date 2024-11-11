// Hero.js
import React from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

const SECTION_HEIGHT = 1500;

const Hero = ({ backgroundImage, parallaxData }) => (
  <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh )` }} className="relative w-full">
    <CenterImage backgroundImage={backgroundImage} />
    <ParallaxImages parallaxData={parallaxData} />
   
  </div>
);

const CenterImage = ({ backgroundImage }) => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ['170%', '100%']);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

const ParallaxImages = ({ parallaxData }) => (
  <div className="mx-auto max-w-5xl px-4 pt-[100px]">
    {parallaxData.map((data, idx) => (
      <ParallaxImg key={idx} {...data} />
    ))}
  </div>
);

const ParallaxImg = ({ className, text, start, end }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div className={className} style={{ transform, opacity }}>
      <p>{text}</p>
    </motion.div>
  );
};

export default Hero;
