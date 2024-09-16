import React from "react";
import { createClient } from "@/utils/supabase/server";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Todo from "@/components/todo";
import Input from "@/components/input";

const page = async () => {
  const supabase = createClient();
  const { data: todos } = await supabase.from("todos").select();
  return (
    <div className=" w-full mx-20 mt-10 overflow-auto flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between">
          <div className="mb-10">
            <h1 className="font-bold text-2xl">
              Good morning <span>Noble</span>
            </h1>
            <h2 className="text-slate-400">Today Sat 26 Aug 2024 </h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-white rounded-xl h-[48px] w-[160px] flex items-center ps-2 gap-2">
              <button className="bg-slate-100 rounded-lg h-[32px] w-[32px] grid place-items-center">
                <ChevronDown />
              </button>
              Today
            </div>
            <button className="bg-white rounded-xl h-[48px] w-[48px] grid place-items-center">
              <Menu />
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-2 h-full max-h-[65vh] overflow-auto">
          {todos &&
            todos.map(({ id, name }) => (
              <li key={id}>
                <Todo name={name} />
              </li>
            ))}
        </ul>
      </div>

      <div className=" mb-10 flex justify-center">
        <Input />
      </div>
    </div>
  );
};

export default page;
