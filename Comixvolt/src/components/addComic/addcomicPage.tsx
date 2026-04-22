import React from "react";
import { Link } from "react-router-dom";
  

const AddComic: React.FC = () => {
    return (
        <div>
    <h2 className='text-2xl font-bold text-white md-2 text-center'>Comic Page</h2>
    <p className='text-zinc-400 text-center'> Add your comics ya nerd </p>

    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-6">
    <Link className="bg-zinc-800 hover:bg-zinc-700 transition p-16 rounded-xl text-center shadow-lg text-lg font-bold min-h-48 w-full" to="Pages/addComicForm">
      Add New Comic
    </Link>

    <Link className="bg-zinc-800 hover:bg-zinc-700 transition p-16 rounded-xl text-center shadow-lg text-lg font-bold min-h-48 w-full" to="#">
      View Comic List
    </Link>

  </div>
</div>
)
};

export { AddComic };
export default AddComic;