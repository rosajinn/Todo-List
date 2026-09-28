import { useState } from "react";
import Todo from "./Todo";


type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
function App() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id))
  }
  return (
    <>
      <div className="bg-white p-2 min-h-screen flex justify-center items-center">
        <div className="max-w-540px w-[80%] bg-slate-900 p-4 rounded-md shadow-md">
          <h1 className="text-center text-white text-2xl font-bold">Todos for today</h1>
          <div className="flex gap-8 justify-center my-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add Todo"
              className="flex-3 border-2 outline-none border-r-gray-500 text-white placeholder-gray-500 p-2 rounded-md focus:border-white"
            />
            <button
              type="button"
              onClick={addTodo}
              className="flex-1 bg-green-200 cursor-pointer rounded-md text-l hover:bg-mauve-300 text-red-950 font-bold"
            >
              Add 
            </button>
          </div>
          <div>
        
            {todo.length > 0 ? (
              <>
               <h1 className="text-center text-white text-xl"> My Todos : </h1>
              {todo.map((todo) => {
              return (
                <Todo key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
              );
            })}</>
            ) : (
              <div>
                <h1 className="text-center text-white text-xl my-2">You have completed all your task!</h1>
                
              </div>
            
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
