"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const post = async (formdata: FormData) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const id = user && user["id"];

  const response = await supabase.from("todos").insert({
    name: formdata.get("todo"),
    status: false,
    user_id: id,
  });
  revalidatePath("/");
};

export const deletePost = async (name: any) => {
  const supabase = createClient();
  const response = await supabase.from("todos").delete().eq("name", name);
  revalidatePath("/");
};

export const updatePost = async (prev: any, formdata: FormData) => {
  const supabase = createClient();
  const response = await supabase
    .from("todos")
    .update({ name: formdata.get("input"), status: formdata.get("checkbox") })
    .eq("name", prev);
  revalidatePath("/");
};
