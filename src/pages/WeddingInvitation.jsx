import React from "react";
import { motion } from "framer-motion";

const WeddingInvitation = ({ toggleMusic, setOpen }) => {
  const BtnClick = () => {
    toggleMusic();
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] px-4 py-8 font-serif text-[#795548]">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto min-h-[720px] max-w-md overflow-hidden rounded-sm bg-[#faf8f5] px-6 py-10 shadow-2xl"
      >
        {/* ================================= */}
        {/* OUTER BORDERS */}
        {/* ================================= */}

        <motion.div
          animate={{
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-3 border border-[#D6B36A]"
        />

        <div className="pointer-events-none absolute inset-5 border border-[#e5dcd5]" />

        <div className="pointer-events-none absolute inset-7 border border-[#eee6df]" />

        {/* ================================= */}
        {/* TOP LEFT BLUE FLOWERS */}
        {/* ================================= */}

        <motion.img
          src="/flowers-top-left.png"
          alt=""
          initial={{
            opacity: 0,
            x: -80,
            y: -80,
          }}
          animate={{
            opacity: 1,
            x: [0, -4, 0],
            y: [0, 5, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 0.5,
            },
            x: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none absolute -left-8 -top-3 z-20 w-[220px]"
        />

        <motion.img
          src="/flowers-top-left.png"
          alt=""
          initial={{
            opacity: 0,
            x: 60,
            y: -60,
          }}
          animate={{
            opacity: 0.55,
            x: [0, 3, 0],
            y: [0, 4, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 0.8,
            },
            x: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none absolute -right-24 -top-16 z-20 w-[170px] rotate-[90deg]"
        />

        <motion.img
          src="/flowers-bottom-right.svg"
          alt=""
          initial={{
            opacity: 0,
            x: 80,
            y: 80,
          }}
          animate={{
            opacity: 0.95,
            x: [0, 4, 0],
            y: [0, -5, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 0.6,
            },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none absolute -bottom-3 -right-20 z-20 w-[240px]"
        />

        <motion.img
          src="/flowers-bottom-right.svg"
          alt=""
          initial={{
            opacity: 0,
            x: -70,
            y: 70,
          }}
          animate={{
            opacity: 0.45,
            x: [0, -3, 0],
            y: [0, -4, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: 1,
            },
            x: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pointer-events-none absolute -bottom-16 -left-24 z-20 w-[190px] rotate-[90deg]"
        />

        <div className="relative z-30 flex min-h-[650px] flex-col items-center justify-center text-center">
          <motion.p
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mb-5 text-[10px] tracking-[0.35em] text-[#A38B82]"
          >
            TOGETHER WITH OUR FAMILIES
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              opacity: 1,
              scale: [0.3, 1.15, 1],
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#E5D5C8] bg-[#D6B36A] text-2xl text-white shadow-lg"
          >
            <motion.span
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ♥
            </motion.span>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            dir="rtl"
            className="mb-2 text-xl font-medium text-[#85665B]"
          >
            دعوة زفاف
          </motion.p>

          {/* NAMES */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
            dir="rtl"
            className="font-['Scheherazade_New'] text-5xl font-normal text-[#765B54]"
          >
            فرح و وليد
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              delay: 1.4,
              duration: 0.8,
            }}
            className="my-7 flex items-center gap-3"
          >
            <span className="h-px w-14 bg-[#D7C3B8]" />

            <motion.span
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-lg text-[#B58C7C]"
            >
              ❀
            </motion.span>

            <span className="h-px w-14 bg-[#D7C3B8]" />
          </motion.div>

          {/* DATE */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.6,
              duration: 0.8,
            }}
            className="text-sm tracking-[0.15em] text-[#89736C]"
          >
            December 25, 2026
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.8,
              duration: 0.8,
            }}
            className="mt-7 max-w-[270px] text-sm leading-7 text-[#8F7A72]"
          >
            We cordially invite you to celebrate
            <br />
            the beginning of our forever.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 2,
              duration: 0.7,
            }}
            className="mt-7 flex items-center gap-2"
          >
            <span className="h-[1px] w-8 bg-[#D6B36A]" />

            <span className="text-[#D6B36A]">✦</span>

            <span className="h-[1px] w-8 bg-[#D6B36A]" />
          </motion.div>

          <motion.button
            onClick={BtnClick}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.2,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 10px 30px rgba(214,179,106,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-8 cursor-pointer rounded-full border border-[#C9A96B] bg-[#D6B36A] px-9 py-3 text-sm font-semibold text-[#5F4A43] shadow-md"
          >
            Open Invitation
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WeddingInvitation;
