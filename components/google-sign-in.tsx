"use client";

import React from "react";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";

const GoogleSignIn = () => {
  const supabase = createClient();
  const handleclick = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  return (
    <div>
      <Button onClick={() => handleclick}>Sign in with Google</Button>
    </div>
  );
};

export default GoogleSignIn;
