import React from 'react'
import GridComponent from '../components/Hero'
import DynamicImg from "../components/DynamicImg";
export const Home = () => {
  const content = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: 100,
      end: 200,
      className: "w-1/4 border-2 border-zinc-500 rounded-2xl",
    },
    {
      type: "text",
      text: "Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here Your Parallax Text HereYour Parallax Text HereYour Parallax Text Here Your Parallax Text Here",
      start: 100,
      end: 200,
      className:
        "w-1/4 text-white  sm:text-sm lg:text-lg md:text-lg  mx-[70%]  border-zinc-500  text-sm text-zinc-500 ",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      start: 100,
      end: 200,
      className: "ml-40 w-2/4 border-2 border-zinc-500 rounded-2xl",
    },
    {
      type: "text",
      text: "Your Parallax Text Here Your Parallax Text HereYour Parallax Text Here",
      start: 0,
      end: 200,
      className: "ml-auto w-full  text-white text-4xl  font-black uppercase",
    },
    {
      type: "text",
      text: "Your Parallax Text Here Your Parallax Text HereYour Parallax Text Here",
      start: 100,
      end: 200,
      className: "ml-auto w-full  text-white text-4xl  font-black uppercase",
    },
    {
      type: "text",
      text: "Your Parallax Text Here Your Parallax Text HereYour Parallax Text Here",
      start: 200,
      end: 200,
      className: "ml-auto w-full  text-white text-4xl  font-black uppercase",
    },

    // img 2

    
   
   

    //img 3
   
   
   
  ];

  return (
    <div>      
      <GridComponent
        title="Home"
        description="Read More Know More"
        btntext="Get Started"
        btnlink="#"
        btnclass=""
      />
<DynamicImg content={content} className="border-b-zinc-500 " />
<div className=" container max-w-5xl  justify-self-center overflow-hidden py-32 ">

          
        </div>
  </div>
  )
}
export default Home;