interface SearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void
  addItem: () => void
}

const SearchInput = ({ searchText, setSearchText, addItem }: SearchInputProps) => {

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      addItem()
    }
  }

  return (
    <input
      className="mt-3 p-1 rounded-md px-4"
      value={searchText}
      placeholder="Add something..."
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={(e) => onKeyDown(e)} />
  )
}

export default SearchInput