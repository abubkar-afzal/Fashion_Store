import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import IMAGE1 from "../assets/img1.png";
import IMAGE2 from "../assets/img2.png";
import IMAGE3 from "../assets/img3.png";
import IMAGE4 from "../assets/img4.png";
import IMAGE5 from "../assets/img5.png";
import IMAGE6 from "../assets/img6.png";
import { MdEdit } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const Login = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hpassword, sethpassword] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [Photo, setPhoto] = useState(6);
  const [dPhoto, setdPhoto] = useState(IMAGE6);
  const [signupdisplay, setsignupdisplay] = useState(false);
  const [album, setalbum] = useState(false);
  let hidePass;
  if (hpassword) {
    hidePass = "password";
  } else {
    hidePass = "text";
  }
  useEffect(() => {
    if (Photo == 1) {
      setdPhoto(null);
      setdPhoto(IMAGE1);
    } else if (Photo == 2) {
      setdPhoto(null);
      setdPhoto(IMAGE2);
    } else if (Photo == 3) {
      setdPhoto(null);
      setdPhoto(IMAGE3);
    } else if (Photo == 4) {
      setdPhoto(null);
      setdPhoto(IMAGE4);
    } else if (Photo == 5) {
      setdPhoto(null);
      setdPhoto(IMAGE5);
    } else {
      setdPhoto(null);
      setdPhoto(IMAGE6);
    }
  }, [Photo]);
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
      user_post_code: postCode,
      user_photo: Photo
    }
    let post = await fetch(`/api/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    let res = await post.json();
    if(res.signup == true){
    localStorage.setItem("Fashion_Store", res.token);
    setName("")
    setEmail("")
    setPassword("")
    setPhone("")
    setAddress("")
    setPostCode("")
    router.push(`/`)
   
    }
    else{
      console.log("SignUp Failed")
    }
  }
  const loginUser = async () => {
    let user = {
      user_email: email,
      user_password: password,
    }
    let post = await fetch(`/api/loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    let res = await post.json();

    if (res.login === true) {
      localStorage.setItem("Fashion_Store", res.token);
      setEmail("")
      setPassword("")
      router.push(`/`)
     
    } else {
      console.log("user not found")
    }

  }
  const showphotos = () => {
    setalbum(!album);
  };
  const hideP = () => {
    sethpassword(!hpassword);
  };
  return (
    <>
      <div className="my-[4rem] ">
      {signupdisplay ? <>
          {/* signup */}

          <div className="">
            
              <div className="justify-items-center"><Slide direction="left" duration={2000}> 
                <div className="font-black xsm:text-[18px] sm:text-[22px]">
                  SIGN UP
                </div>
                <div className="shadow-lg shadow-black p-[2rem] sm:space-y-[2rem] sm:space-x-[2rem] rounded-[2rem] m-4 space-y-[1rem] bg-[---c1]">
                  <div className="xsm:hidden sm:block"></div>
                  <div className="justify-items-center">
                    <div

                      onClick={showphotos}
                      className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer  duration-[1s]"
                    >
                      <div className="hover:scale-[1.05] duration-[1s]">
                        <Image
                          src={dPhoto}
                          alt="logo"
                          width={500}
                          height={500}
                          className="rounded-full "
                        />
                        <div

                          className="absolute bottom-6 right-3 sm:bottom-10 sm:right-5"
                        >
                          <MdEdit className="m-2 sm:text-[22px] text-white" />
                        </div></div>
                      {album ? (
                        <Fade cascade>
                          <div

                            className="bg-[---c3] rounded-[2rem] flex flex-wrap w-[18rem] sm:w-[22rem] sm:mr-[2.7rem] place-content-center justify-self-center m-2 "
                          >
                            <div

                              onClick={() => {
                                setPhoto(1);
                              }}
                              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE1}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div

                              onClick={() => {
                                setPhoto(2);
                              }}
                              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE2}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div

                              onClick={() => {
                                setPhoto(3);
                              }}
                              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE3}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div

                              onClick={() => {
                                setPhoto(4);
                              }}
                              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE4}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div

                              onClick={() => {
                                setPhoto(5);
                              }}
                              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE5}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                            <div

                              onClick={() => {
                                setPhoto(6);
                              }}
                              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
                            >
                              <Image
                                src={IMAGE6}
                                alt="logo"
                                width={500}
                                height={500}
                                className="rounded-full "
                              />
                            </div>
                          </div>
                        </Fade>
                      ) : null}
                    </div>                   </div>
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
                    <div
                  
                  className="flex items-center place-content-center  mb-[1rem"
                >
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      value={password}
                      type={hidePass}
                      className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                      placeholder="Enter Your Password"
                    />
                     {hpassword ? (
                                        <FaEyeSlash
                                          onClick={hideP}
                                          className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                                        />
                                      ) : (
                                        <FaEye
                                          onClick={hideP}
                                          className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                                        />
                                      )}</div>
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
                </div> </Slide>
              </div>             </div></> : <>  {/* login */}
          <div className="">
           
              <div className="justify-items-center">
              <Slide direction="right" duration={2000}> <div className="font-black xsm:text-[18px] sm:text-[22px]">LOGIN</div>
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
                    <div
                  
                  className="flex items-center place-content-center  mb-[1rem"
                >
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      value={password}
                      type={hidePass}
                      className="w-auto h-[2rem] border-[1px] border-black rounded-[8px] p-2 px-4 m-2"
                      placeholder="Enter Your Password"
                    />
                     {hpassword ? (
                                        <FaEyeSlash
                                          onClick={hideP}
                                          className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                                        />
                                      ) : (
                                        <FaEye
                                          onClick={hideP}
                                          className=" m-2 sm:text-[20px] mm:text-[26px] lm:text-[30px] t:text-[26px] l:text-[30px] ll:text-[37px] k:text-[45px] cursor-pointer"
                                        />
                                      )}</div>
                  </div>
                  <div className="w-full">
                    <Link href={`/components/forgot`}> <p className="text-[---c10] hover:underline font-thin xsm:text-[13px] sm:text-[16px]  text-end  cursor-pointer xsm:mx-4 sm:mx-[2rem]">forgot password ?</p></Link>
                  </div>
                  <div className="flex justify-between space-x-[1rem] ">
                    <button onClick={loginUser} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem] hover:bg-[---h2]">
                      Login
                    </button>
                    <button onClick={signupDisplay} className="font-black xsm:text-[12px] sm:text-[16px] bg-[---c2] px-[2rem] py-[10px] text-white rounded-[2rem]  hover:bg-[---h2]">
                      Sign UP
                    </button>
                  </div>
                </div></Slide></div>
            </div></>}

      </div>
    </>
  );
};

export default Login;
