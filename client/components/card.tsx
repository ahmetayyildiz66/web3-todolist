import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { MetaMaskInpageProvider } from "@metamask/providers"
import Checkmark from '../assets/checkmark.svg'
import SearchInput from "./SearchInput"
import TodoListABI from '../utils/TodoList.json'
import { ethereum } from '../utils/ethereumObject'
import TodoList from "./TodoList"

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

interface TodoProps {
  creator: string,
  id: number,
  isCompleted: boolean,
  text: string
}

const Card = () => {
  const [searchText, setSearchText] = useState("")
  const [account, setAccount] = useState("")
  const [list, setList] = useState<string[]>([])

  const contractAddress = "0xc45B9E1edfc84d9335CC52B30e2008a409498B68"
  const contractABI = TodoListABI.abi

  const addItem = async () => {
    try {
      if (ethereum()) {
        const provider = new ethers.providers.Web3Provider(ethereum() as any)
        const signer = provider.getSigner()

        const todoListContract = new ethers.Contract(contractAddress, contractABI, signer)

        const addTodoItemTx = await todoListContract.addTodoItem(searchText);

        await addTodoItemTx.wait()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const checkIfMetamaskExist = () => {
    if (!ethereum()) {
      console.log("You don't have metamask")
    }
    return true
  }

  const connectToMetaMask = async () => {
    if (checkIfMetamaskExist()) {
      try {
        const accounts = await ethereum()?.request({ method: "eth_accounts" })

        if (accounts && Array.isArray(accounts)) {
          setAccount(accounts[0])
        } else {
          return null
        }
      } catch (error) {
        console.error(error)
        return null
      }
    }
  }

  const getAllTodos = async () => {
    try {
      if (ethereum()) {
        const provider = new ethers.providers.Web3Provider(ethereum() as any)
        const signer = provider.getSigner()

        const todoListContract = new ethers.Contract(contractAddress, contractABI, signer)

        const getAllTodosTx = await todoListContract.getAllTodos()

        console.log("todotx: ", getAllTodosTx)

        const tempAllTodos: string[] = []
        getAllTodosTx.map((todo: TodoProps) => {
          tempAllTodos.push(todo.text)
        })

        console.log("tempAllTodos: ", tempAllTodos)
        setList(tempAllTodos)


      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    connectToMetaMask()
    getAllTodos()
  }, [])

  return (
    <div className="bg-slate-100 p-4 w-1/2 rounded-md">
      <p className="flex justify-end items-center">
        <span className="text-1xl font-bold">Account: </span>
        <span className="ml-2">{account}</span>
      </p>
      <h1 className="text-4xl pt-12">Todo List {searchText}</h1>
      <SearchInput searchText={searchText} setSearchText={setSearchText} addItem={addItem} />
      <TodoList list={list} />
      <Checkmark className="w-5" />
    </div>
  )
}

export default Card