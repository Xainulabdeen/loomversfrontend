// Scroll.js
import React from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import Hero from "./Hero2";
import Schedule from "./Schedule";
import DynamicImg from "../components/DynamicImg";

const Scroll = () => {
  const parallaxData = [
    {
      text: "Who Are We?",
      start: 100,
      end: 200,
      className: "w-1/2  text-white text-5xl font-black uppercase ",
    },
    {
      text: "We are a non fundede abc bla bla company raising abc and efg in our society and helping users with hij, klm, and nop solutions ",
      start: 300,
      end: 200,
      className:
        "w-full font-semibold text-end  text-white text-3xl font-black uppercase",
    },
    {
      text: "Our Mission ",
      start: 500,
      end: 200,
      className: "w-1/2   text-white text-5xl font-black uppercase",
    },
    {
      text: "Our mission is to do abc and def and and provide ghi and jkl ",
      start: 700,
      end: 200,
      className:
        "w-full font-semibold  text-end  text-white text-3xl font-black uppercase",
    },
    {
      text: "Why Us?",
      start: 900,
      end: 200,
      className: "w-1/2  text-white text-5xl font-black uppercase",
    },
    {
      text: "We are a community of exprienced creators who works and do abc for all the users in this community helping brands grow and become more productive in script writing for better content and more growth",
      start: 1100,
      end: 200,
      className:
        "w-full font-semibold  text-end  text-white text-3xl font-black uppercase -z-10",
    },
    // Add other items here...
  ];

  const scheduleData = [
    {
      user: "Ali",
      role: "Designer",
      description:
        "Being part of this platform is a great opportunity for me to learn and grow as a designer.",
    },
    {
      user: "Ali",
      role: "Designer",
      description:
        "Being part of this platform is a great opportunity for me to learn and grow as a designer.",
    },
    {
      user: "Ali",
      role: "Designer",
      description:
        "Being part of this platform is a great opportunity for me to learn and grow as a designer.",
    },
    {
      user: "Ali",
      role: "Designer",
      description:
        "Being part of this platform is a great opportunity for me to learn and grow as a designer.",
    },
    {
      user: "Ali",
      role: "Designer",
      description:
        "Being part of this platform is a great opportunity for me to learn and grow as a designer.",
    },
    {
      user: "Ali",
      role: "Designer",
      description:
        "Being part of this platform is a great opportunity for me to learn and grow as a designer.",
    },

    // Add other schedule items here...
  ];

  const content = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: -900,
      end: -600,
      className: "w-2/3 border-2 border-zinc-500 rounded-2xl",
    },
    {
      type: "text",
      text: "Your Parallax Text Here",
      start: -900,
      end: -650,
      className: "w-1/2  text-white text-5xl font-black uppercase",
    },
    {
      type: "text",
      text: "Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here",
      start: -1500,
      end: -800,
      className:
        "w-1/4 text-white  sm:text-sm lg:text-lg md:text-lg  mx-[70%]  border-zinc-500  text-sm text-zinc-500 ",
    },
    // img 2

    {
      type: "image",
      src: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: -900,
      end: -600,
      className: "w-2/3 border-2 border-zinc-500 rounded-2xl",
    },
    {
      type: "text",
      text: "Your Parallax Text Here",
      start: -900,
      end: -650,
      className: "w-1/2  text-white text-5xl font-black uppercase",
    },
    {
      type: "text",
      text: "Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here",
      start: -1500,
      end: -800,
      className:
        "w-1/4 text-white  sm:text-sm lg:text-lg md:text-lg  mx-[70%]  border-zinc-500  text-sm text-zinc-500 ",
    },

    //img 3
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: -900,
      end: -600,
      className: "w-2/3 border-2 border-zinc-500 rounded-2xl",
    },
    {
      type: "text",
      text: "Your Parallax Text Here",
      start: -900,
      end: -650,
      className: "w-1/2  text-white text-5xl font-black uppercase",
    },
    {
      type: "text",
      text: "Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here",
      start: -1500,
      end: -800,
      className:
        "w-1/4 text-white  sm:text-sm lg:text-lg md:text-lg  mx-[70%]  border-zinc-500  text-sm text-zinc-500 ",
    },
  ];

  return (
    <div className="bg-zinc-900">
      <ReactLenis root options={{ lerp: 0.02 }}>
       
        <Hero
          backgroundImage="https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          parallaxData={parallaxData}
        />

        <div className=" container max-w-5xl  justify-self-center overflow-hidden py-32 ">
          <DynamicImg content={content} className="border-b-zinc-500 " />
        </div>
        <Schedule
          title="Brain Behind this awesom community "
          scheduleData={scheduleData}
        />
      </ReactLenis>
    </div>
  );
};

export default Scroll;
