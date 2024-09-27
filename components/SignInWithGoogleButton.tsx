import React from "react";
import { Button } from "./ui/button";
import { signInWithGoogleAction } from "@/app/actions";

const SignInWithGoogleButton = () => {
  return (
    <form action={signInWithGoogleAction}>
      <Button type="submit">Google</Button>
    </form>
  );
};

export default SignInWithGoogleButton;
