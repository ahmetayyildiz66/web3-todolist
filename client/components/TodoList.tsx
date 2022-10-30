interface TodoListProps {
  list: string[]
}

const TodoList = ({ list }: TodoListProps) => {
  return (
    <div className="pt-5">
      {list.map((a, index) => {
        return <div key={index}>{a}</div>
      })}
    </div>
  )

}

export default TodoList