import { motion } from "framer-motion"

export const cardAnimation = {
  initial: {
    opacity: 0,
    y: 20
  },

  animate: {
    opacity: 1,
    y: 0
  },

  whileHover: {
    y: -6,
    scale: 1.01
  },

  transition: {
    duration: 0.3
  }
}

export { motion }