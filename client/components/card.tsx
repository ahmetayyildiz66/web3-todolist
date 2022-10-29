import { useState } from "react"
import SearchInput from "./searchInput"

const Card = () => {
  const [searchText, setSearchText] = useState("")

  const addItem = () => {
    console.log('add item')
  }

  return (
    <div className="bg-slate-100 p-4 w-1/2 rounded-md pt-20">
      <h1 className="text-4xl">Todo List</h1>
      <SearchInput searchText={searchText} setSearchText={setSearchText} addItem={addItem} />
    </div>
  )
}

export default Card