import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 175,
        y: position.y - 175,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 120,
      }}
      className="fixed w-[350px] h-[350px] rounded-full pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,.18) 0%, rgba(59,130,246,0) 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}