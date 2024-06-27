import React from 'react'
import Image1 from "../img/home1.jpg"
import Image2 from "../img/home2.jpg"
import Image3 from "../img/home3.png"
const ImageList=[
  {
    id:1,
    ima:Image1,
    title: "Lets Explore unique clothes",
  },
  {
    id:2,
    img:Image2,
    title:"30% off on all Women's Wear",
  },
  {
    id:3,
    img:Image3,
    title:"Get 70% off on all Men's Wear",
  }
];
function HeroSection() {
  return (
    <div className="relative overflow-hidden  min-h-[550px] sm:min-h[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration:200 ">
      {/* background pattern */}
      <div className='h-[600px] w-[600px] bg-primary absolute -top-1/2 right-1/4  rounded-2xl rotate-45 -z-9'>

      </div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
           {/* text content section  */}
           <div className="flex flex-col justify-center gap-4 pt-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Loreum ipsum dolor sit.</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consecturuernm
               nsdnn   maansa m z nnxnjsfnm xmcnx 
               dmsnsjfndj
            </p>
            <div>
              <button className=" bg-[#E0218A] hover:scale-105 duration-200 text-white px-4 py-2 rounded-full">Shop Now</button>
            </div>
           </div>
            {/* image section */}
            <div >
              <div>
                <img src={Image3}  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default HeroSection
