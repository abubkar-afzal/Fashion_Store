import React, { useEffect, useState } from "react";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Page1 = ({
  allNewCollection,
  bestFashion,
  bestSeller,
  men,
  women,
  kids,
  family,
  DealOfDay,
  Intro,
  allFeedbacks,checkloginornot,setLoader
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Intro.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>{
      Intro.length == 0 ? setLoader(true):setLoader(false)
    }
      <div className="  top-0 bottom-0 overflow-y-scroll hideBar sm:mt-[-2rem] shadow-xl ">
        <div className="  xsm:p-2 xsm:bg-[---c1] xsm:grid sm:px-[2rem] xsm:h-[1000px] abssm:h-[860px] absm:h-[820px]  sm:h-auto  ">
          <div className=" xsm:mt-[2rem] xsm:relative xsm:text-[1rem] xsm:px-3 sm:grid sm:grid-cols-2  sm:content-center sm:mb-[2rem]  ">
            <div className="sm:w-[70%] content-center ">
              <div className="xsm:text-[3rem]  xsm:font-bold m-2">
                Find The Best Fashion Style For <ReactTyped
                  strings={["Men", "Women", "Kids","Family"]}
                  typeSpeed={200}
                  backSpeed={100}
                  loop
                />
              </div>
              <h3 className="xsm:my-4 xsm:text-[22px]">
                There you can find all types of styles because its fashion.com
                there you can find all the men, women, child collection as you
                need.
              </h3>
              <Link href={`${process.env.NEXT_PUBLIC_HOST}/components/other/trends`}>
                <button className="xsm:bg-black xsm:hover:bg-white xsm:hover:text-black  xsm:text-white duration-[2s] xsm:w-[10rem] xsm:h-12 xsm:rounded-lg xsm:my-2">
                  SHOPE NOW
                </button>
              </Link>
            </div>
            <div className={`  ${Intro.length ==0 ? "hidden":"relative"} xsm:justify-items-end my-4  sm:w-[26rem] sm:h-[40rem]  sm:right-[4rem]  ml-auto`}>
              {Intro.map((item, index) => (
                <Image
                  width={1020}
                  height={1020}
                  src={item.product_img}
                  alt={`Image ${index + 1}`}
                  className={`absolute object-cover right-4 transition-opacity duration-1000 ease-in-out  ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                  }
               rounded-bl-[6rem] xsm:w-[250px] xsm:h-[300px] sm:w-[30rem] sm:h-[40rem] `}
                />
              ))}
            </div>
          </div>
        </div>
        <Page2 allNewCollection={allNewCollection} checkloginornot={checkloginornot}/>
        <Page3 bestFashion={bestFashion} checkloginornot={checkloginornot}/>
        <Page4 bestSeller={bestSeller} checkloginornot={checkloginornot}/>
        <Page5 men={men} women={women} kids={kids} family={family} checkloginornot={checkloginornot}/>
        <Page6 DealOfDay={DealOfDay} checkloginornot={checkloginornot}/>
        <Page7 allFeedbacks={allFeedbacks} checkloginornot={checkloginornot}/>
      </div>
    </>
  );
};
export default Page1;
