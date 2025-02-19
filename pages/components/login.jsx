import React from "react";

const Login = () => {
  return (
    <>
      <div className="m-[2rem] my-[4rem]">
        {/* login */}
        <div className="justify-items-center">
          <div className="font-black xsm:text-[18px] sm:text-[22px]">LOGIN</div>
          <div className="border-[2px] border-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem]">
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Email:
              </p>
              <input
                type="text"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Password:
              </p>
              <input
                type="text"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="flex justify-between space-x-[1rem] ">
              <button className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]">
                Login
              </button>
              <button className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]">
                Sign UP
              </button>
            </div>
          </div>
        </div>
        {/* signup */}
        <div className="justify-items-center">
          <div className="font-black xsm:text-[18px] sm:text-[22px]">
            SIGN UP
          </div>
          <div className="border-[2px] border-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem]">
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                NAME:
              </p>
              <input
                type="text"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Email:
              </p>
              <input
                type="email"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Password:
              </p>
              <input
                type="password"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Password"
              />
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Phone:
              </p>
              <input
                type="phone"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Address:
              </p>
              <input
                type="text"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Address"
              /> <div>
              <p className="font-black xsm:text-[18px] sm:text-[22px]">
                Post code:
              </p>
              <input
                type="number"
                className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                placeholder="Enter Your Post Code"
              />
            </div>
            </div>
            <div className="flex justify-between space-x-[1rem] ">
              <button className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]">
                Login
              </button>
              <button className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]">
                Sign UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
