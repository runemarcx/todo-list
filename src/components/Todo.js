import { useState } from "react";

export default function Todo({ data, setData }) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    isEditing: false,
    index: -1,
    isDone: false,
  });

  let todoIndex = 1;

  const titleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  const descriptionChange = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };

  const buttClicked = () => {
    if (todo.title === "" && todo.description === "") {
      return;
    }
    setData([...data, todo]);
    setTodo({ title: "", description: "" });
  };

  function cancelEdit() {
    setTodo((todo.isEditing = false));
  }

  function delClicked(index) {
    let modifedTodos = data.filter((data, todoIndex) => {
      if (index !== todoIndex) return data;
    });
    setData(modifedTodos);
  }

  function editClicked(index, todoItem) {
    setTodo({
      title: todoItem.title,
      description: todoItem.description,
      isEditing: true,
      index: index,
    });
  }

  function updateClicked() {
    let newTodos = data.map((data, index) => {
      if (index === todo.index) {
        return { title: todo.title, description: todo.description };
      }
      return data;
    });
    setData(newTodos);
    setTodo({ ...todo, title: "", description: "", isEditing: false });
  }

  function doneClicked(index) {
    let modifedTodos = data.filter((data, todoIndex) => {
      if (index === todoIndex) {
        return (data.isDone = true);
      } else {
        return data;
      }
    });
    setData(modifedTodos);
  }

  return (
    <div>
      <div >
        <div>
    <div class="todo" >To-dos</div>
          Title:{" "}
          <input
            name="title"
            value={todo.title}
            onChange={titleChange}
            id="username"
            type="text"
          />
          Description:{" "}
          <input
            name="description"
            value={todo.description}
            onChange={descriptionChange}
            id="username"
            type="text"
          />
          {todo.isEditing ? (
            <div>
              <button
                onClick={updateClicked}
                type="button"
              >
                Update
              </button>
              <button
                onClick={cancelEdit}
                type="button"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={buttClicked}
              type="button"
            >
              Add To-do
            </button>
          )}
        </div>
        <ul>      
          {data.map((todo, index) => {
            if (todo.isDone !== true) {
              return (
                <li  key={index}>
                  <div>
                    <div>
                      {todoIndex++}: {todo.title}
                    </div>
                    <div>
                      {todo.description}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => doneClicked(index)}
                      type="button"
                    >
                      Done
                    </button>

                    <button
                      onClick={() => editClicked(index, todo)}
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => delClicked(index)} 
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
