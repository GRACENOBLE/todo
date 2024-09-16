"use client";
import { ArrowUp, LoaderCircle } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { post } from "@/actions";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

const Input = () => {
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await post(formData);
      }}
      className="flex w-full justify-center gap-4 "
    >
      <input
        type="text"
        name="todo"
        className="outline-none px-4 w-full rounded-full py-3 bg-slate-400 placeholder-white  max-w-[600px] text-white"
        placeholder="+ Create a new task"
      />
      <Button
        type="submit"
        className="bg-slate-400 h-[48px] rounded-full w-[48px] hover:bg-slate-300 transition-all ease-in-out duration-300"
      >
        {pending ? <LoaderCircle className="animate-spin" /> : <ArrowUp />}
      </Button>
    </form>
  );
};

export default Input;
