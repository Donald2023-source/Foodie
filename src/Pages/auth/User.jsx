import React, { useState } from "react";
import image from "../../assets/pexels-jj-jordan-44924743-8195814.jpg";
import logo from "../../assets/Logo.png";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { motion } from "framer-motion"; // Import Framer Motion

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      className="container relative flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-screen w-screen border">
        <motion.img
          className="w-full h-full object-cover flex items-center justify-center"
          src={image}
          alt=""
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <motion.div
        className="lg:max-w-7xl md:max-w-5xl absolute top-0 h-full p-8 lg:p-20 lg:w-[60%] flex flex-col items-center gap-10 justify-center bg-[#070707b7]"
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h2
          className="p-6 rounded-full bg-[#5c5c5cb8] text-xl w-fit"
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        >
          <FiUser />
        </motion.h2>

        <div className="w-full">
          <form className="flex flex-col gap-5 items-center justify-center w-full">
            <motion.fieldset
              className="flex items-center bg-[#3a393987] w-full lg:w-[60%] text-lg rounded-md gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="border-r-2 px-2 h-full text-gray-400 ">
                +234
              </span>
              <input
                maxLength={10}
                className="py-2 outline-none bg-[#4444442a] text-gray-200"
                type="text"
                placeholder="Mobile number"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </motion.fieldset>

            <motion.fieldset
              className="relative bg-[#3a39396a] text-gray-200 w-full lg:w-[60%] rounded-md p-2 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input
                className="outline-none px-2 p-1 bg-[#3a3a3a00] w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="absolute right-3 cursor-pointer text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </motion.fieldset>

            <motion.fieldset
              className="text-gray-200 lg:w-[65%] rounded-md p-2 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <input className="p-2" type="checkbox" />
              <p className="leading-relaxed text-xs lg:text-md">
                By creating an account, you agree to your Terms and have read
                and acknowledged the Global Privacy Statement
              </p>
            </motion.fieldset>

            <motion.button
              className="p-3 w-full lg:w-[60%] rounded-lg text-white border-none bg-mainColor hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
