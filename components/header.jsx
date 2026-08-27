import MotionButton from "../animations/button"
import { FiPlus} from "react-icons/fi"

function Head({input,setInput,addNote,textareaRef}) {
    return(
        <>
         <div className="w-[90%] mt-8 mx-auto flex items-center gap-3">
  <textarea
    value={input}
    ref={textareaRef}
    onChange={(e) => setInput(e.target.value)}
    className="text flex-1"
  ></textarea>

  <MotionButton
    onClick={addNote}
    className="flex mt-32 w-30 p-1 items-center gap-4 border bg-[#7C3AED]"
  >
    Add Note
    <FiPlus className="text-lg" />
  </MotionButton>
</div>
        </>
    )
}

export default Head