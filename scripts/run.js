const deploy = async () => {
  const TodoListFactory = await hre.ethers.getContractFactory("TodoList");
  const TodoListContract = await TodoListFactory.deploy();
  await TodoListContract.deployed();

  const [owner, secondAccount, thirdAccount] = await hre.ethers.getSigners();

  console.log("owner: ", owner.address);

  const addItemTx = await TodoListContract.addTodoItem("Plan your day");
  await addItemTx.wait();

  const getFirstTodoTx = await TodoListContract.getTodo(0);
  console.log("first todo item: ", getFirstTodoTx);

  const updateTodoTx = await TodoListContract.updateTodo(0, "Plan your week");
  await updateTodoTx.wait();

  const getUpdatedTodo = await TodoListContract.getTodo(0);
  console.log("updated todo: ", getUpdatedTodo.text);

  const deleteTodoTx = await TodoListContract.deleteTodo(0);
  await deleteTodoTx.wait();

  const getAllTodos = await TodoListContract.getAllTodos();
  console.log("getAllTodos: ", getAllTodos);

  console.log("deployed address: ", TodoListContract.address);
};

const main = async () => {
  await deploy();
};

main();
