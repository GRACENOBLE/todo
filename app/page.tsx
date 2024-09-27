import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <div className="h-screen w-full grid place-items-center justify-center">
      <div className=" flex flex-col items-center">
        <div className="px-4 py-2 rounded-full border mb-10">The ToDo list app</div>
        <h1 className="text-6xl text-center max-w-[1000px]">
          The worlds best app for managing your day to day tasks
        </h1>
        <p className="py-8">
          Make each worth living by setting and achieving youur goals one by one.
        </p>
        <div className="flex justify-between px-20 w-96">
          <Authlink name={"Sign Up"} route={"/sign-up"} />

          <Authlink name={"Sign In"} route={"/sign-in"} />
        </div>
      </div>
    </div>
  );
};

export default page;

const Authlink = ({ name, route }: { name: string; route: string }) => {
  return (
    <Link href={route}>
      <Button className="rounded-full">{name}</Button>
    </Link>
  );
};
