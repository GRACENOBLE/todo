"use client";
import { CircleChevronDown, EllipsisVertical } from "lucide-react";
import React, { useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deletePost, updatePost } from "@/actions";

const Todo = ({ name }: { name: string }) => {
  const [editMode, setEditMode] = useState(false);

  const inputRef = useRef<HTMLFormElement>(null);

  return (
    <div className="w-full bg-white p-2 rounded-xl flex justify-between">
      <div className="flex gap-2 items-center">
        {editMode ? (
          <form
            ref={inputRef}
            action={async (formData) => {
              inputRef.current?.reset();
              await updatePost(name, formData);
              setEditMode(false);
            }}
          >
            <input
              type="checkbox"
              name="checkbox"
              className="outline-none border-slate-400 cursor-pointer"
            />
            <input
              name="input"
              type="text"
              defaultValue={name}
              className="border rounded-lg px-2"
              autoFocus
            ></input>
            <button className="bg-slate-50 px-4 py-2 text-xs rounded-lg hover:bg-slate-200 transition-all duration-300 ease-in-out ms-4">
              Update
            </button>
          </form>
        ) : (
          <p>{name}</p>
        )}
      </div>
      <div className="flex gap-2">
        <button className="rounded-lg bg-slate-100 h-[32px] flex gap-1 items-center px-2">
          <CircleChevronDown className="size-4" />
          time
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-lg bg-slate-100 h-[32px] w-[32px] grid place-items-center outline-none">
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Modify</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => deletePost(name)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Todo;
