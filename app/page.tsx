import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <>
      Welcome to Todo
      <Authlink name={"Sign Up"} route={"/sign-up"} />
      <Authlink name={"Sign In"} route={"/sign-in"} />
    </>
  );
};

export default page;

const Authlink = ({ name, route }: { name: string; route: string }) => {
  return (
    <Link href={route}>
      <Button>{name}</Button>
    </Link>
  );
};
