export default function Done({ todos }) {
  let itemIndex = 1;

  const display = () => {
    if (todos.length === 0) {
      return (
        <h1>
          Nothing
        </h1>
      );
    } else {
      return todos.map((todo, index) => {
        if (todo.isDone === true) {
          return (
            <li
              key={index}
            >
              <div>
                <div>
                  {itemIndex++}: {todo.title} ✅
                </div>
                <div>{todo.description} </div>
              </div>
              <div></div>
            </li>
          );
        }
      });
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>Completed Task:</div>
        </div>
        <ul>{display()}</ul>
      </div>
    </div>
  );
}
