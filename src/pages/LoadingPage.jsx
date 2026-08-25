import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
              fill="#e74c3c"
              transform="translate(0 -1028.4)"
            />
          </svg>
        </motion.div>

        <p className="mt-2 font-bold text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
