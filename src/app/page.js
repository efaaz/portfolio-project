"use client";
import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { IoLogoJavascript } from "react-icons/io";
import "animate.css";
import { useMyContext } from "@/components/Providers";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function Home() {
  const { isAboutFirst, isRobotFirst, isContactFirst } = useMyContext();
  return (
    <div className="min-h-screen px-4 py-8">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
      </motion.div>
    </div>
  );
}
const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-secondary-400 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 row-span-2 md:col-span-6"
  >
    <Image
      src="https://i.ibb.co.com/WxPv3pF/AGC-20240912-123537361-PORTRAIT-1.jpg"
      alt="avatar"
      className="mb-4 border-4 border-maheenWT1 size-20 object-cover rounded-full"
      width={1200} // Specify width attribute
      height={1200} // Specify height attribute
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I&#39;m{" "}
      <span>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["Maheen"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={3000}
        />
      </span>
      <p className="text-zinc-500 text-xl">
        a Web Developer from Bangladesh with experience in responsive and user
        friendly Website development.
      </p>
    </h1>
    <a
      href="https://drive.google.com/uc?export=download&id=1henj73qXOi7c9IlH8_881z9SxgSvTo1w"
      download
      className="flex items-center  gap-1 animate__animated animate__fadeIn  animate__slower animate__infinite text-red-300 hover:underline"
    >
      Download Resume <FiArrowRight />
    </a>
  </Block>
);
