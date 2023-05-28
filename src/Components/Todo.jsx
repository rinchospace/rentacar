import { useState } from 'react';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleButtonClick() {
    addTodo();
  }

  function addTodo() {
    if (inputValue === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
    setInputValue('');
  }

  function handleCheckButtonClick(id) {
    setTodoList(prevTodoList =>
      prevTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }

  function handleTrashButtonClick(id) {
    setTodoList(prevTodoList =>
      prevTodoList.filter(todo => todo.id !== id)
    );
  }

  return (
    <div className='wish'>
      <input
        type="text"
        className="textarea"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="buttoninput" onClick={handleButtonClick}>
        Добавить
      </button>
      <ul className="todolist">
        {todoList.map(todo => (
          <li key={todo.id} className={todo.completed ? 'checklist' : ''}>
            <p className="item">{todo.text}</p>
            <button
              className="check-button"
              onClick={() => handleCheckButtonClick(todo.id)}
            >Использовано
              <i className="fa-solid fa-check"></i>
            </button>
            <button
              className="trash-button"
              onClick={() => handleTrashButtonClick(todo.id)}
            >Убрать
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
