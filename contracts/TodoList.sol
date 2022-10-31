// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract TodoList {

  TodoItem[] private _todos;

  struct TodoItem {
    uint256 id;
    string text;
    address creator;
    bool isCompleted;
  }

  function addTodoItem(string memory text_) external{
    _todos.push(TodoItem({
      id: _todos.length,
      text: text_,
      creator: msg.sender,
      isCompleted: false
    }));
  }

  function getTodo(uint256 id_) external view returns(TodoItem memory) {
    return _todos[id_];
  }

  function updateTodo(uint256 id_, string memory text_) outOfBounds(id_) external {
    TodoItem storage todoItem = _todos[id_];
    require(msg.sender == todoItem.creator, "Only the creator of the todo item can modify it.");
    todoItem.text = text_;
  }

  function deleteTodo(uint256 id_) outOfBounds(id_) external {
    TodoItem storage todoItem = _todos[id_];
    require(msg.sender == todoItem.creator, "Only the creator of the todo item can delete it.");
    todoItem.creator = address(0);
    todoItem.isCompleted = false;
    todoItem.text = "";
  }

  function toggleTask(uint256 id_) outOfBounds(id_) external {
    TodoItem storage todoItem = _todos[id_];
    require(msg.sender == todoItem.creator, "Only the creator of the todo item can toggly it.");
    todoItem.isCompleted = !todoItem.isCompleted;
  }

  function getAllTodos() external view returns(TodoItem[] memory) {
    return _todos;
  }

  modifier outOfBounds(uint256 id_) {
    require(id_ < _todos.length, "Out of bounds");
    _;
  }
}