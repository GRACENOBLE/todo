"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const post = async (formdata: FormData, list: string) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const id = user && user["id"];

  const response = await supabase.from("todos").insert({
    name: formdata.get("todo"),
    status: false,
    user_id: id,
    list: list,
  });
  revalidatePath("/");
};

export const deletePost = async (name: any) => {
  const supabase = createClient();
  const response = await supabase.from("todos").delete().eq("name", name);
  revalidatePath("/");
};

export const deleteCompletedTodo = async (name: any) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const id = user && user["id"];
  const response = await supabase
    .from("todos")
    .delete()
    .eq("name", name)
    .eq("user_id", id);
  revalidatePath("/");
};

export const updatePost = async (prev: any, formdata: FormData) => {
  const supabase = createClient();
  const response = await supabase
    .from("todos")
    .update({ name: formdata.get("input"), status: formdata.get("completed") })
    .eq("name", prev);
  revalidatePath("/");
};

export const getLists = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const id = user && user["id"];
  const { error, data: todos } = await supabase
    .from("todos")
    .select()
    .eq("user_id", id);

  return todos;
};
