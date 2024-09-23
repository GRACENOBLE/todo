import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="flex justify-between">
        <Sidebar />
        {children}
      </div>
    </Container>
  );
};

export default layout;
