import Done from "@/components/Done";
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Home() {
  const [navigate, setNav] = useState("todo");
  const [data, setData] = useState([]);

  const changeNav = (navigate) => {
    setNav(navigate);
  };

  return (
    <div>
      <div>
        <h1 class="title" >ACT To-Do List</h1>
      </div>
      <div >
        <button
          onClick={() => changeNav("todo")}
          name="1"
          value="1"
                       type="button"
        >
          Todo
        </button>
        <button
          onClick={() => changeNav("done")}
          name="2"
          value="2"
                   type="button"
        >
          Done
        </button>
      </div>
      <div >
        {" "}
        {navigate === "todo" && <Todo data={data} setData={setData} />}
        {navigate === "done" && <Done todos={data} setData={setData} />}
      </div>
    </div>
  );
}
