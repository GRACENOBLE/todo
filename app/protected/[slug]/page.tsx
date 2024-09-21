import Input from "@/components/input";
import { SubmitButton } from "@/components/submit-button";
import Todo from "@/components/todo";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { ChevronDown, InfoIcon, Menu } from "lucide-react";
import { redirect } from "next/navigation";
import { signOutAction } from "@/app/actions";
import CompletedTodo from "@/components/completed-todo";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const id = user && user["id"];

  const { error, data: todos } = await supabase
    .from("todos")
    .select()
    .eq("user_id", id);
  console.log("todos", todos, error);

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
          <form>
            <SubmitButton
              pendingText="Signing Out..."
              formAction={signOutAction}
            >
              Sign Out
            </SubmitButton>
          </form>
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
            todos
              .filter((todo) => todo.status == false)
              .map(({ id, name }) => (
                <li key={id}>
                  <Todo name={name} />
                </li>
              ))}
        </ul>
        <h2>Completed Todos</h2>
        <ul>
          {todos
            ?.filter((todo) => todo.status == true)
            .map((todo) => (
              <div>
                <CompletedTodo todo={todo} />
              </div>
            ))}
        </ul>
      </div>

      <div className=" mb-10 flex justify-center">
        <Input />
      </div>
    </div>
  );
}
