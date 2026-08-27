import { motion } from "framer-motion"

function MotionButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export default MotionButton