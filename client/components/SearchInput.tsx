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
      className="border-pink-500"
      value={searchText}
      placeholder="Add something..."
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={(e) => onKeyDown(e)} />
  )
}

export default SearchInput