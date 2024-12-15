import React, { useState } from "react";
import img1 from "../assets/5.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/4.jpg";
import img4 from "../assets/7.jpg";

import { IoIosStar } from "react-icons/io";

const Page7 = () => {
  const [next, setnext] = useState(1);
  const slide1 = () => {
    setnext(1);
  };
  const slide2 = () => {
    setnext(2);
  };
  const slide3 = () => {
    setnext(3);
  };
  const slide4 = () => {
    setnext(4);
  };
  let images;

  if (next === 1) {
    images =
      "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex space-x-[10rem] relative left-[-17rem] w-[1280px]  mt-8  ";
  } else if (next === 2) {
    images =
      "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex space-x-[10rem] relative left-[-36rem] w-[1280px]  mt-8  ";
  } else if (next === 3) {
    images =
      "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex space-x-[10rem] relative left-[-55rem] w-[1280px]  mt-8  ";
  } else {
    images =
      "xsm:hover:cursor-pointer xsm:duration-[2s] xsm:flex space-x-[10rem] relative left-[-74rem] w-[1280px]  mt-8  ";
  }

  return (
    <>
      <div className="xsh:h-[932px]  overflow-hidden xsm:text-center xsm:bg-white  xsm:items-center sh:h-[700px]">
        <h1 className="xsm:text-[3rem] xsm:font-bold xsm:m-4">
          What People Say About Us
        </h1>
        <p className="xsm:text-[1rem] pb-[3rem] xsm:font-bold xsm:m-4">
          Those peoples visit or use our website all of them give us a positive
          feedback. Lots of peoples lovels our web site. Some of them are your
          ragular customers
        </p>

        <p className="xsm:text-[1rem] xsm:font-bold xsm:mb-[4rem]">
          These the some of those comments those pass by our beloved customers.
          We love all of them as they love us.
        </p>
        <div className={images}>
          <div className="Images  xsm:hover:cursor-pointer xsm: -[1px] xsm:ml-[30%] xsm: -black xsm:w-[9.1rem] xsm:m-2">
            <p className="xsm:m-2">
              I buy lots of things from there i very like this point that is the
              very good store for buy all the cloths.
            </p>
            <img
              src={img1}
              alt=""
              className="xsm:rounded-[5rem] xsm:ml-[2rem] xsm:w-[4rem]  xsm:h-[4rem]"
            />
            <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 xsm:w-[8.8rem]">
              <div className="flex pl-[30%]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p>Jimmy Anderson</p>
            </div>
          </div>
          <div className="Images  xsm:hover:cursor-pointer xsm: -[1px] xsm:ml-[30%] xsm: -black xsm:w-[9.1rem] xsm:m-2">
            <p className="xsm:m-2">
              I buy lots of things from there i very like this point that is the
              very good store for buy all the cloths.
            </p>
            <img
              src={img2}
              alt=""
              className="xsm:rounded-[5rem] xsm:ml-[2rem] xsm:w-[4rem]  xsm:h-[4rem]"
            />
            <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 xsm:w-[8.8rem]">
              <div className="flex pl-[30%]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p>Jimmy Anderson</p>
            </div>
          </div>
          <div className="Images  xsm:hover:cursor-pointer xsm: -[1px] xsm:ml-[30%] xsm: -black xsm:w-[9.1rem] xsm:m-2">
            <p className="xsm:m-2">
              I buy lots of things from there i very like this point that is the
              very good store for buy all the cloths.
            </p>
            <img
              src={img3}
              alt=""
              className="xsm:rounded-[5rem] xsm:ml-[2rem] xsm:w-[4rem]  xsm:h-[4rem]"
            />
            <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 xsm:w-[8.8rem]">
              <div className="flex pl-[30%]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p>Jimmy Anderson</p>
            </div>
          </div>
          <div className="Images  xsm:hover:cursor-pointer xsm: -[1px] xsm:ml-[30%] xsm: -black xsm:w-[9.1rem] xsm:m-2">
            <p className="xsm:m-2">
              I buy lots of things from there i very like this point that is the
              very good store for buy all the cloths.
            </p>
            <img
              src={img4}
              alt=""
              className="xsm:rounded-[5rem] xsm:ml-[2rem] xsm:w-[4rem]  xsm:h-[4rem]"
            />
            <div className="xsm:text-[10px] xsm:bg-white xsm:text-center xsm:items-center xsm:space-y-2 p-2 xsm:w-[8.8rem]">
              <div className="flex pl-[30%]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <p>Jimmy Anderson</p>
            </div>
          </div>
        
        </div>
        
        <div className="xsm:space-x-3 pt-8 xsm:text-center">
          <input
            onClick={slide1}
            type="radio"
            name="img1"
            id="img1"
            className="radio"
          />
          <input
            onClick={slide2}
            type="radio"
            name="img1"
            id="img2"
            className="radio"
          />
          <input
            onClick={slide3}
            type="radio"
            name="img1"
            id="img3"
            className="radio"
          />
          <input
            onClick={slide4}
            type="radio"
            name="img1"
            id="img4"
            className="radio"
          />
        </div>
      </div>
    </>
  );
};
export default Page7;
