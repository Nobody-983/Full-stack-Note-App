import { FiSun, FiMoon } from "react-icons/fi"
import MotionButton from "../animations/button"
import { motion } from "../animations/cards"

function Nav({toggleTheme,darkMode}) {
    
    return(
      <>
        <div className="">
          </div>
       <MotionButton
  onClick={toggleTheme}
  className="relative top-4 left-2 flex h-9 w-16 items-center rounded-full bg-slate-800 "
>
  <FiSun className="absolute left-2 text-yellow-400" />
  <FiMoon className="absolute right-2 text-slate-300" />

  <motion.div
    animate={{
      x: darkMode ? 28 : 0,
    }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white"
  >
    {darkMode ? (
      <FiMoon className="text-slate-800" />
    ) : (
      <FiSun className="text-yellow-500" />
    )}
  </motion.div>
</MotionButton>
        </>
    )
}
export default Nav