import { useState } from "react"

function App() {
 const [color, setcolor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 showdow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg">red</button>
        <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full bg-green-500 text-white shadow-lg">green</button>
        <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg">blue</button>
        <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full bg-yellow-400 text-white shadow-lg">yellow</button>
      </div>
    </div>
   </div>
  )
}

export default App
