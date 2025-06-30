import { getDatabase } from "firebase/database";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-700 overflow-hidden">
      <form className="flex items-center gap-5">
        <input
          type="text"
          className="border-2 rounded-2xl bg-amber-500 outline-0 px-2 font-bold"
        />
        <button
          className="capitalize text-lg font-bold bg-green-500 p-1
         rounded-lg"
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
