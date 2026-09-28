
import { FaCheckCircle, FaTrash } from "react-icons/fa";

type TodoProps = {
    todo: {
    id: number,
    text: string,
    completed: boolean}
    completeTodo: (id: number) => void
    deleteTodo: (id: number) => void
}


export default function Todo ({todo, completeTodo, deleteTodo}: TodoProps) {
    return (
        <div className="bg-mauve-300 p-2 rounded-md flex justify-between items-center font-bold my-4">
            <p className ={`${todo.completed === true ? "line-through text-green-800" : " "}`}>{todo.text}</p>
            <div className="flex items-center gap-2 cursor-pointer">
                <FaCheckCircle className = "hover:text-green-700"
                onClick={() => completeTodo(todo.id)}  />    
                <FaTrash className = "hover:text-red-800"
                onClick={() => deleteTodo(todo.id)} /> 
            </div>
        </div>
    )
}