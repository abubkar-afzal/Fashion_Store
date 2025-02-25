import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
const Login = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hpassword, setHpassword] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [signupdisplay, setsignupdisplay] = useState(false);
  const loginDisplay = () => {
    setsignupdisplay(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const signupDisplay = () => {
    setsignupdisplay(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const addUser = async () => {
    let user = {
      user_name: name,
      user_email: email,
      user_password: password,
      user_phone: phone,
      user_address: address,
      user_post_code: postCode
    }
    let post = await fetch(`/api/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    let res = await post.json();

    setName("")
    setEmail("")
    setPassword("")
    setPhone("")
    setAddress("")
    setPostCode("")
    router.push(`/`)
  }
  return (
    <>
      <div className="m-[2rem] my-[4rem]">
        {signupdisplay ? <>
          {/* signup */}

          <div className="">
            <Slide direction="left" duration={2000}>
             <div className="justify-items-center">
             <div className="font-black xsm:text-[18px] sm:text-[22px]">
              SIGN UP
            </div>
              <div className="shadow-lg shadow-black p-[2rem] sm:space-y-[2rem] sm:space-x-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
                <div className="xsm:hidden sm:block"></div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Name:
                  </p>
                  <input
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    value={name}
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
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    value={email}
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
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    value={password}
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
                    onChange={(e) => {
                      setPhone(e.target.value)
                    }}
                    value={phone}
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
                    onChange={(e) => {
                      setAddress(e.target.value)
                    }}
                    value={address}
                    type="text"
                    className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                    placeholder="Enter Your Address"
                  /> <div>
                    <p className="font-black xsm:text-[18px] sm:text-[22px]">
                      Post code:
                    </p>
                    <input
                      onChange={(e) => {
                        setPostCode(e.target.value)
                      }}
                      value={postCode}
                      type="number"
                      className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                      placeholder="Enter Your Post Code"
                    />
                  </div>
                </div>
                <div className="flex justify-between space-x-[1rem] ">
                  <button onClick={loginDisplay} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                    Login
                  </button>
                  <button onClick={addUser} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                    Sign UP
                  </button>
                </div>
              </div>
              </div>            </Slide>  </div></> : <>  {/* login */}
          <div className="">
            <Slide direction="right" duration={2000}>
              <div className="justify-items-center">
              <div className="font-black xsm:text-[18px] sm:text-[22px]">LOGIN</div>
              <div className="shadow-lg sm:space-y-[2rem] sm:space-x-[2rem] shadow-black p-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
                <div className="xsm:hidden sm:block"></div>
                <div>
                  <p className="font-black xsm:text-[18px] sm:text-[22px]">
                    Email:
                  </p>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    value={email}
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
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    value={password}
                    type="password"
                    className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="w-full">
                  <Link href={`/components/forgot`}> <p className="text-[---c10] hover:underline font-thin xsm:text-[13px] sm:text-[16px]  text-end  cursor-pointer xsm:mx-4 sm:mx-[2rem]">forgot password ?</p></Link>
                </div>
                <div className="flex justify-between space-x-[1rem] ">
                  <button className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem] hover:bg-[---h2]">
                    Login
                  </button>
                  <button onClick={signupDisplay} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                    Sign UP
                  </button>
                </div>
              </div></div>
            </Slide></div></>}

      </div>
    </>
  );
};

export default Login;
