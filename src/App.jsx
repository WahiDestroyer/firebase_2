import { getDatabase, set, ref, push, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function App() {
  const [fireData, setFireData] = useState("");
  const [fireList, setFireList] = useState([]);
  const db = getDatabase();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    
    console.log(fireData);
    
      set(push(ref(db, "fire/")), {
        agun: fireData,
      });
  };

  useEffect(() => {
    onValue(ref(db, "fire/"), (mal) => {
      mal.forEach((jinis) => {
        // console.log(jinis.val()); 
        setFireList(jinis.val())
      })
    });
  }, [])

  console.log(fireList);
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-700 overflow-hidden">
      <form className="flex items-center gap-5">
        <input
          type="text"
          onChange={(e) => setFireData(e.target.value)}
          className="border-2 rounded-2xl bg-amber-500 outline-0 px-2 font-bold"
        />
        <button
          className="capitalize text-lg font-bold bg-green-500 p-1
         rounded-lg"
          onClick={handleSubmit}
        >
          add
        </button>
      </form>
      <ul className="font-bold text-2xl text-blue-800 capitalize pt-5">
        <li>hello</li>
      </ul>
    </div>
  );
}

export default App;
