import { motion } from "framer-motion";

export default function ContactCard({
  icon,
  title,
  value,
  link,
}) {
  return (
    <motion.a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        bg-[#111827]
        border border-white/10
        rounded-2xl
        p-6
        flex
        items-center
        gap-5
        hover:border-blue-500/50
        hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
        transition-all
        duration-300
      "
    >
      {/* Icon */}
      <div
        className="
          w-14
          h-14
          rounded-xl
          bg-blue-500/10
          flex
          items-center
          justify-center
          text-blue-400
          text-2xl
          group-hover:scale-110
          transition
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="text-gray-400 group-hover:text-white transition">
          {value}
        </p>
      </div>
    </motion.a>
  );
}