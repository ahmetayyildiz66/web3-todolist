const main = async () => {
  const TodoListContractFactory = await hre.ethers.getContractFactory(
    "TodoList"
  );
  const TodoListContract = await TodoListContractFactory.deploy();
  await TodoListContract.deployed();

  console.log("contract address: ", TodoListContract.address);
  // 0xc45B9E1edfc84d9335CC52B30e2008a409498B68
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
