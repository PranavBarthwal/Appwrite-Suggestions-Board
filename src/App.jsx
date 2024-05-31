import { DB_ID, COLLECTION_ID, databases, ID } from "./lib/appwrite";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionText, setSuggestionText] = useState("");

  useEffect(() => {
    getSuggestions();
  }, []);

  async function getSuggestions() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);
    console.log(res);
    setSuggestions(res.documents.reverse());
  }

  function handleInput(e) {
    setSuggestionText(e.target.value);
  }

  async function addSuggestion(e) {
    e.preventDefault();

    if (suggestionText) {
      await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
        text: suggestionText,
        completed: false,
      });
    }

    setSuggestionText("");

    getSuggestions();
  }

  async function updateDocument(id, completed) {
    await databases.updateDocument(DB_ID, COLLECTION_ID, id, {
      completed: completed,
    });

    getSuggestions();
  }

  async function deleteDocument(id) {
    await databases.deleteDocument(DB_ID, COLLECTION_ID, id);

    getSuggestions();
  }





  return (
    <main className="mt-5 max-w-4xl w-full mx-auto mb-[4rem]">
      <Navbar />

      <form
        onSubmit={addSuggestion}
        className="my-[2rem] flex flex-col gap-4 my-6"
      >
        <textarea
          value={suggestionText}
          onInput={handleInput}
          placeholder="Enter your suggestion here..."
          className="bg-slate-800 shadow-xl w-full h-20 p-4 rounded-xl disabled:bg-slate-900 disabled:placeholder:text-slate-500 disabled:cursor-not-allowed"
        ></textarea>
        <button
          type="submit"
          className="bg-[rgba(253,54,110,1)] px-6 py-2 rounded shadow ml-auto transition hover:bg-[#EDEDF0] hover:text-[rgba(253,54,110,1)]"
        >
          Enter Your Suggestion
        </button>
      </form>

      <hr></hr>

      <ul className="space-y-4 mt-[2rem]">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.$id}
            className="flex items-center border border-[#EDEDF0] p-4 rounded shadow gap-2"
          >
            <span className="text-2xl font-bold">
              {suggestion.completed ? "✅" : "📄"}
            </span>

            <text
              className={`text-[1rem] ${
                suggestion.completed
                  ? "text-slate-500 line-through decoration-2 decoration-slate-500"
                  : ""
              }`}
            >
              {suggestion.text}
            </text>

            <div className="ml-auto min-w-[7rem] flex items-center">
              <input
                onChange={() =>
                  updateDocument(suggestion.$id, !suggestion.completed)
                }
                type="checkbox"
                checked={suggestion.completed}
                className="ml-auto cursor-pointer mr-2"
              />

              <button
              onClick={() => deleteDocument(suggestion.$id)}
              >
                <img src="https://cdn-icons-png.flaticon.com/128/4980/4980658.png" className="w-7" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
