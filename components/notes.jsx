import { motion, cardAnimation } from "../animations/cards"
import { FiTrash2, FiEdit2,FiFileText } from "react-icons/fi"
import MotionButton from "../animations/button"
// import { data } from "framer-motion/client"

function Notes({note,deleteNote,editNote,colors}) {
   
    return(
        <>
        <div className="flex ml-8 mt-4 mb-4"> 
          <h1 className="flex dark:text-amber-100 text-xl">Your Notes
         <FiFileText className="text-xl" /> 
         </h1>
        </div>
         <div 
        className="grid w-[90%]  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{
            note.map((el)=>(
<motion.div {...cardAnimation}
key={el.id} 
className={` note break-words ml-4 mt-4 p-4 rounded-xl border ${colors[el.color]}`}
>
    <div className="ml-4">{el.content}</div>
<div className="flex m-4  items-center gap-2">
    <MotionButton
onClick={() => editNote(el.id)}
  className="flex rounded-lg p-2 text-slate-400 bg-slate-800"
>
  <FiEdit2 />
</MotionButton>
<MotionButton
onClick={() => deleteNote(el.id)}
  className="flex rounded-lg p-2 text-red-400 bg-red-500/10"
>
  <FiTrash2 />
</MotionButton>
</div>
</motion.div>
        ))}
        </div>
        </>
    )
}

export default Notes