import { getDatabase, set, ref, push, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci"
import { FaAngry } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"

function App() {
  const [fireData, setFireData] = useState("");
  const [fireList, setFireList] = useState([]);
  const [fireEdit, setFireEdit] = useState(true)
  const db = getDatabase();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fireData) return alert("kisu lekhak beda 😤" )
    set(push(ref(db, "fire/")), {
      agun: fireData,
    });
    setFireData("");
  };

  const handleUpdate = () => {
    setFireEdit(!fireEdit)
  }

  useEffect(() => {
    onValue(ref(db, "fire/"), (mal) => {
      let malpati = [];
      mal.forEach((jinis) => {
        setFireList(jinis.val());
        malpati.push({...jinis.val(), id: jinis.key});
      });
      setFireList(malpati);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-700 overflow-hidden">
      <form className="flex items-center gap-5">
        <input
          type="text"
          value={fireData}
          onChange={(e) => setFireData(e.target.value)}
          className="border-2 rounded-2xl bg-amber-500 outline-0 px-2 font-bold"
        />
        {fireEdit ? 
          <button
            className="capitalize text-lg font-bold bg-pink-700 p-1
         rounded-lg"
          >
            Update
          </button>
        : 
          <button
            className="capitalize text-lg font-bold bg-green-500 p-1
         rounded-lg"
            onClick={handleSubmit}
          >
            add
          </button>
        }
      </form>
      <ol className="flex flex-col gap-2 font-bold text-2xl text-green-600 capitalize pt-5 h-55 overflow-y-auto no-scrollbar">
        {fireList.map((jinis, i) => (
          <li key={jinis.id} className="flex gap-2">
            <span>{i + 1}. </span>
            <span>{jinis.agun}</span>
            <button className="text-blue-900" onClick={handleUpdate}>
              <CiEdit />
            </button>
            <button className="text-red-700">
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
