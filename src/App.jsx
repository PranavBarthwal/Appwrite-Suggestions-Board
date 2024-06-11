import { DB_ID, COLLECTION_ID, databases, ID } from "./lib/appwrite"
import { useState, useEffect } from 'react'

function App() {

  const [suggestions, setSuggestions] = useState([])
  const [suggestionText, setSuggestionText] = useState('')

  useEffect(() => {
    getSuggestions()
  }, [])

  async function getSuggestions() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);
    console.log(res)
    setSuggestions(res.documents.reverse())
  }

  function handleInput(e) {
    setSuggestionText(e.target.value)
  }

  async function addSuggestion(e) {
    e.preventDefault()

    if (suggestionText) {
      await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
        text: suggestionText,
        completed: false
      })
    }

    setSuggestionText('')

    getSuggestions()
  }





  return (

    <main className="mt-5 max-w-3xl w-full mx-auto">

      <form
        onSubmit={addSuggestion}
        className="my-[2rem] flex flex-col gap-4 my-6"
      >
        <textarea
          value={suggestionText}
          onInput={handleInput}
          placeholder="Enter your suggestion here..."
          className="bg-slate-800 shadow-xl w-full h-20 p-4 rounded-xl disabled:bg-slate-900 disabled:placeholder:text-slate-500 disabled:cursor-not-allowed"
        >

        </textarea>
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
            className="flex items-center border border-white/20 p-4 rounded shadow gap-2"
          >
            <span className="text-2xl font-bold">{suggestion.completed ? '✅' : null}</span>
            <h2 className="text-xl font-semibold">{suggestion.text}</h2>
          </li>
        ))}

      </ul>

    </main>

  )
}

export default App
