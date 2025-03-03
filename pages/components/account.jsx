import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import IMAGE1 from "../assets/img1.png";
import IMAGE2 from "../assets/img2.png";
import IMAGE3 from "../assets/img3.png";
import IMAGE4 from "../assets/img4.png";
import IMAGE5 from "../assets/img5.png";
import IMAGE6 from "../assets/img6.png";
import { MdEdit } from "react-icons/md";
import { Fade, Slide } from "react-awesome-reveal";

const Account = () => {
  const [loader, setLoader] = useState(false);
  const [name, setname] = useState("");
  const [bd, setbd] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [postcode, setpostCode] = useState("");
  const [dname, setdname] = useState(true);
  const [dbd, setdbd] = useState(true);
  const [dpassword, setdpassword] = useState(true);
  const [daddress, setdaddress] = useState(true);
  const [dphone, setdphone] = useState(true);
  const [dpostcode, setdpostcode] = useState(true);
  const [id, setid] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setphoto] = useState("");
  const [dphoto, setdphoto] = useState(null);
  const [hpassword, sethpassword] = useState(true);
  const [album, setalbum] = useState(false);

  let responseofuser;
  let hidePass;

  const router = useRouter();
  useEffect(() => {
    const fetchuser = async () => {
      setLoader(true);
      const scrollOptions = {
        left: 0,
        top: 0,
        behavior: 'smooth'
    }
    window.scrollTo(scrollOptions);
      let d = await fetch(`/api/getAccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("Fashion_Store") }),
      });
      let res = await d.json();
      if(res.success == true){

        setEmail(res.login.user_email);
        setname(res.login.user_name);
        setpassword(res.login.user_password);
        setphone(res.login.user_phone);
        setpostCode(res.login.user_post_code);
        setaddress(res.login.user_address);
        setphoto(res.login.user_photo);
        responseofuser = res;
        setLoader(false);
      }else{
        console.log("error came")
      }
    };
    if (localStorage.getItem("Fashion_Store")) {
      fetchuser();
    } else {
      router.push("/");
    }
  }, []);
  useEffect(() => {
    if (photo == 1) {
      setdphoto(null);
      setdphoto(IMAGE1);
    } else if (photo == 2) {
      setdphoto(null);
      setdphoto(IMAGE2);
    } else if (photo == 3) {
      setdphoto(null);
      setdphoto(IMAGE3);
    } else if (photo == 4) {
      setdphoto(null);
      setdphoto(IMAGE4);
    } else if (photo == 5) {
      setdphoto(null);
      setdphoto(IMAGE5);
    } else {
      setdphoto(null);
      setdphoto(IMAGE6);
    }
  }, [photo]);
  if (hpassword) {
    hidePass = "password";
  } else {
    hidePass = "text";
  }
  const DisableChanges = async () => {
    setLoader(true);
    const scrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth'
  }
  window.scrollTo(scrollOptions);
    let d = await fetch(`/api/getAccount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("Fashion_Store") }),
    });
    let res = await d.json();
    setid(res.login._id);
    setname(res.login.user_name);
    setbd(res.login.user_bd);
    setpassword(res.login.user_password);
    setphone(res.login.user_phone);
    setpostCode(res.login.user_post_code);
    setaddress(res.login.user_address);
    setEmail(res.login.user_email);
    setphoto(res.login.user_photo);

    setdaddress(true);
    setdname(true);
    setdpassword(true);
    setdphone(true);
    setdpostcode(true);
    setdbd(true);
    setLoader(false);
  };
  const logOut = () => {
    setLoader(true);
    const scrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth'
  }
  window.scrollTo(scrollOptions);
    localStorage.removeItem("Fashion_Store");
    window.location.reload();
    router.push("/");
    setLoader(false);
  };
  const dName = () => {
    setdname(!dname);
  };

  
  const dPassword = () => {
    setdpassword(!dpassword);
  };
  const dAddress = () => {
    setdaddress(!daddress);
  };
  const dPhone = () => {
    setdphone(!dphone);
  };
  const d_postcode = () => {
    setdpostcode(!dpostcode);
  };
  const SaveChanges = async (e) => {
    setLoader(true);
    const scrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth'
  }
  window.scrollTo(scrollOptions);
    if (
      (name.length > 3 &&
        password.length > 4 &&
        postcode.length > 4 &&
        address.length > 4 &&
        phone.length > 10) ||
      photo > 0
    ) {
      
      let user = {
        _id: id,
        user_name: name,
       
        user_phone: phone,
        user_password: password,
        user_post_code: postcode,
        user_address: address,
        user_email: email,
        user_photo: photo,
      };
      let r = await fetch(`/api/updateUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let res = await r.json();

      if (res) {
        if (res.success) {
          console.log("Fail 1")
          
        } else {
            console.log("Fail 2")
         
        }
      }
    } else {
        console.log("Fail 3")
     
    }
    setLoader(false);
  };
  const hideP = () => {
    sethpassword(!hpassword);
  };
  const showphotos = () => {
    setalbum(!album);
  };
  return (
    <>
        <Fade cascade duration={3000}>
      
          <div
            
            className=" mt-[1rem] text-center m-2 justify-items-center "
          >
            <div
              
              onClick={showphotos}
              className="w-[150px] h-[150px] outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
            >
              <Image
                src={dphoto}
                alt="logo"
                width={500}
                height={500}
                className="rounded-full "
              />
              <div
                
                className="absolute sm:right-[4vw] sm:mt-[-15vw] "
              >
                <MdEdit className=" text-[---c4] m-2 sm:text-[22px] " />
              </div>
              {album ? (
                <Fade cascade triggerOnce>
                  <div
                    
                    className="bg-white rounded-[2rem] flex flex-wrap w-[90vw] place-content-center justify-self-center m-2 "
                  >
                    <div
                      
                      onClick={() => {
                        setphoto(1);
                      }}
                      className="w-[60px] h-[60px]  outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
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
                        setphoto(2);
                      }}
                      className="w-[60px] h-[60px]  outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
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
                        setphoto(3);
                      }}
                      className="w-[60px] h-[60px]  outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
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
                        setphoto(4);
                      }}
                      className="w-[60px] h-[60px]  outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
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
                        setphoto(5);
                      }}
                      className="w-[60px] h-[60px]  outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
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
                        setphoto(6);
                      }}
                      className="w-[60px] h-[60px]  outline-1 outline-black sticky rounded-full m-4 cursor-pointer hover:scale-[1.1] duration-[1s]"
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
            </div>
            <div  className="space-y-[1rem]">
              <div  className=" ">
                <p
                  
                  className=" sm:text-[15px]   font-bold  bg-transparent "
                >
                  : Name :
                </p>
                <div
                  
                  className="flex items-center place-content-center ml-[2rem] "
                >
                  <input
                    
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    type="text"
                    disabled={dname}
                    value={name}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Data"
                    className="h-[2rem] bg-white rounded-[2rem] xsm:w-[50vw]  sm:w-[30vw] mt-2 p-2 px-4  sm:text-[16px]  disabled:outline-none outline my-2 "
                  />
                  <BiSolidEditAlt
                    onClick={dName}
                    className="m-2 sm:text-[30px]  cursor-pointer"
                  />
                </div>
              </div>

            
              <div >
                <p
                  
                  className=" sm:text-[15px]   font-bold  bg-transparent "
                >
                  : Password :
                </p>
                <div
                  
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    disabled={dpassword}
                    type={hidePass}
                    value={password}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Data"
                    className="h-[2rem] bg-white rounded-[2rem] xsm:w-[40vw]  sm:w-[25vw] mt-2 p-2 px-4  sm:text-[16px]  disabled:outline-none outline my-2"
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
                  )}
                  <BiSolidEditAlt
                    onClick={dPassword}
                    className="m-2 sm:text-[30px]  cursor-pointer"
                  />
                </div>
              </div>
              <div >
                <p
                  
                  className=" sm:text-[15px]   font-bold  bg-transparent "
                >
                  : Phone :
                </p>
                <div
                  
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    disabled={dphone}
                    type="text"
                    value={phone}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Data"
                    className="h-[2rem] bg-white rounded-[2rem] xsm:w-[50vw]  sm:w-[30vw] mt-2 p-2 px-4  sm:text-[16px]  disabled:outline-none outline my-2"
                  />
                  <BiSolidEditAlt
                    onClick={dPhone}
                    className="m-2 sm:text-[30px]  cursor-pointer"
                  />
                </div>
              </div>
              <div >
                <p
                  
                  className=" sm:text-[15px]   font-bold  bg-transparent "
                >
                  : Address :
                </p>
                <div
                  
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    disabled={daddress}
                    type="text"
                    value={address}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Data"
                    className="h-[2rem] bg-white rounded-[2rem] xsm:w-[50vw]  sm:w-[30vw] mt-2 p-2 px-4  sm:text-[16px]  disabled:outline-none outline my-2"
                  />
                  <BiSolidEditAlt
                    onClick={dAddress}
                    className="m-2 sm:text-[30px]  cursor-pointer"
                  />
                </div>
              </div>
              <div >
                <p
                  
                  className=" sm:text-[15px]   font-bold  bg-transparent "
                >
                  : Post code :
                </p>
                <div
                  
                  className="flex items-center place-content-center ml-[2rem] mb-[1rem"
                >
                  <input
                    
                    onChange={(e) => {
                      setpostCode(e.target.value);
                    }}
                    disabled={dpostcode}
                    type="text"
                    value={postcode}
                    id="question"
                    name="question"
                    placeholder="Please Enter your Data"
                    className="h-[2rem] bg-white  rounded-[2rem] mt-2 p-2 px-4 xsm:w-[50vw]  sm:w-[30vw] sm:text-[16px]  disabled:outline-none outline my-2"
                  />
                  <BiSolidEditAlt
                    onClick={d_postcode}
                    className="m-2 sm:text-[30px]  cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div >
              <button
                
                onClick={SaveChanges}
                className="bg-[---c2] hover:bg-[---h2] xsm:text-[10px] sm:text-[14px] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                Save Changes
              </button>
            </div>

            <div >
              <button
                
                onClick={DisableChanges}
                className="bg-[---c9] hover:bg-[---h9] xsm:text-[10px] sm:text-[14px] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                Disable Changes
              </button>
            </div>
            <div >
              <button
                
                onClick={logOut}
                className="bg-[---c7] hover:bg-[---h7] xsm:text-[10px] sm:text-[14px] p-4 m-2 w-auto px-[1rem] rounded-[2rem] font-bold shadow-lg text-[---c4]"
              >
                Log out
              </button>
            </div>
          </div>
        
      </Fade>
    </>
  );
};
export default Account;
