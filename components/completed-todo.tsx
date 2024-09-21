"use client";
import React from "react";
import { Button } from "./ui/button";
import { deleteCompletedTodo } from "@/actions";

const CompletedTodo = ({ todo }: { todo: any }) => {
  return (
    <div className="w-full bg-white p-2 rounded-xl flex justify-between">
      {todo.name}
      <form action={async () => await deleteCompletedTodo(todo.name)}>
        <Button>Delete</Button>
      </form>
    </div>
  );
};

export default CompletedTodo;
