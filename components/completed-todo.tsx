import React from 'react'

const CompletedTodo = ({todo}:{todo: any}) => {
  return (
    <div className="w-full bg-white p-2 rounded-xl flex justify-between">{todo.name}</div>
  );
}

export default CompletedTodo
