import { useCallback, useState,useEffect} from "react"


function App() {
  const [Length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')

  const generatePassword = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+="%$*&@+!"

    for(let i=1;i<length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass+= str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length,numberAllowed,charAllowed])

  return (
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg 
   px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className="text-white my-3 text-center">
      Password Generator
    </h1>
    <div className="flex shodow rounded-lg overflow-hidden
    mb-4">
      <input 
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      readOnly
      />
      <button className="outline-none bg-blue-700 text-white 
      px-3 py-0.5 shrink-0">
        Copy
      </button>
    </div>
    <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
    <input type="range"
    min={8}
    max={100}
    value={Length}
    className="cursor-pointer"
    onChange={(e) => setLength(e.target.value)}
    id="length"
    />
    <label htmlFor="length">Length : {Length}</label>
    </div>

    <div className="flex items-center gap-x-1">
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id="number"
    onChange={()=>{
      setnumberAllowed((data) => !data)
    }}
    />
    <label htmlFor="number">Numbers</label>
    </div>

    <div className="flex items-center gap-x-1">
    <input type="checkbox"
    defaultChecked={charAllowed}
    id="charInput"
    onChange={()=>{
      setcharAllowed((data) => !data)
    }}
    />
    <label htmlFor="charInput">Characters</label>
    </div>
    </div>
   </div>
  )
}

export default App