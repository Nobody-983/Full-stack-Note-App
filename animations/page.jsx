import { motion } from "framer-motion"

function PageMotion({ children, ...props }) {
  return (
    <motion.main
      {...props}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.main>
  )
}

export default PageMotion