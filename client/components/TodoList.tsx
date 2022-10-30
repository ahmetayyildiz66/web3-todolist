import TrashIcon from '../assets/trash.svg'

interface TodoListProps {
  list: TodoProps[],
  toggleTask: (id: number) => void,
  deleteTask: (id: number) => void
}

interface TodoProps {
  creator: string,
  id: number,
  isCompleted: boolean,
  text: string
}

const TodoList = ({ list, toggleTask, deleteTask }: TodoListProps) => {
  return (
    <div className="pt-5">
      {list.map((todoItem, index) => {
        return <div className="flex justify-between max-w-sm h-8" key={index}>
          <label className="flex items-center">
            <input type="checkbox" checked={todoItem.isCompleted} onChange={() => toggleTask(index)} />
            <span className={`ml-2 ${todoItem.isCompleted && 'line-through'}`}>{todoItem.text}</span>
          </label>
          <TrashIcon className="w-5 hover:cursor-pointer" onClick={() => deleteTask(index)} />
        </div>
      })}
    </div>
  )

}

export default TodoList