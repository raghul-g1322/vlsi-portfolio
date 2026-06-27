import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        inline-flex
        items-center
        gap-3
        px-5
        py-2
        rounded-full
        border
        border-green-500/30
        bg-green-500/10
        text-green-400
        font-medium
        mb-8
      "
    >
      <FaCircle className="text-[10px] animate-pulse" />

      Open to Full-Time Opportunities
    </motion.div>
  );
}