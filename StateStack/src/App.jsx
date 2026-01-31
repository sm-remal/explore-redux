import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todo/todoSlice";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        title: text,
      })
    );

    setText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-indigo-600 p-6">
          <h1 className="text-2xl font-bold text-white text-center">
            Redux Todo List
          </h1>
        </div>

        {/* Input Section */}
        <div className="p-6">
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What needs to be done?"
              onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            />
            {/* Add Button - cursor-pointer added */}
            <button
              onClick={handleAdd}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Add
            </button>
          </div>

          {/* Todo List Section */}
          <div className="mt-8">
            <ul className="space-y-3">
              {todos.length === 0 ? (
                <li className="text-center text-gray-400 py-4">
                  No tasks added yet.
                </li>
              ) : (
                todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200 group hover:border-indigo-300 transition-all"
                  >
                    <span className="text-gray-700 font-medium">
                      {todo.title}
                    </span>
                    
                    {/* Delete Button - Red Color & Pointer added */}
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all cursor-pointer"
                      title="Delete Todo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        
        {/* Footer Info */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <p className="text-xs text-center text-gray-500 font-semibold">
            Total Tasks: {todos.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;