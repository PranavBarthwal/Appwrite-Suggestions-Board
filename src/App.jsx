import { DB_ID, COLLECTION_ID, databases } from "./lib/appwrite"
import { useState, useEffect } from 'react'

function App() {

  const [suggestions, setSuggestions] = useState([])

  async function getSuggestions(){
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID);
    console.log(res)
    setSuggestions(res.documents) 
  }

  useEffect(() => {
    getSuggestions()
  }, [])  

    

      return (
        <div className="flex flex-wrap justify-center items-center p-4" style={{ backgroundColor: '#EDEDF0' }}>
  {suggestions.map((suggestion) => (
    <div 
      key={suggestion.$id} 
      className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 m-4 shadow-lg"
      style={{ backgroundColor: 'rgba(237, 237, 240, 0.3)' }}
    >
      <h2 className="text-lg font-semibold" style={{ color: '#19191D' }}>{suggestion.text}</h2>
      <p className="text-gray-500" style={{ color: '#19191D' }}>{suggestion.description}</p>
    </div>
  ))}
</div>

      )

  
      
    
  }

export default App
