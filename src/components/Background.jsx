import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, index) => (

        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-blue-400/30"

          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2,
          }}

          animate={{
            y: [null, -80],
            opacity: [0.2, 0.8, 0.2],
          }}

          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}

        />

      ))}

    </div>
  );
}