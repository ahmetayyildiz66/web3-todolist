import PlusIcon from '../assets/plus.svg'

interface SearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void
  addItem: () => void
}

const SearchInput = ({ searchText, setSearchText, addItem }: SearchInputProps) => {

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13 && searchText) {
      addItem()
    }
  }

  const addNewTodoTask = () => {
    if (searchText) {
      addItem()
    }
  }

  return (
    <div className="relative inline-block">
      <input
        className="mt-3 p-1 rounded-md px-4"
        value={searchText}
        placeholder="Add something..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)} />
      <PlusIcon onClick={addNewTodoTask} className="absolute top-4 right-1 hover:cursor-pointer" />
    </div>
  )
}

export default SearchInput