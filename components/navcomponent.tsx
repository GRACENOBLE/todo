import React from "react";

const Navcomponent = ({
  icon,
  title,
  tasks,
}: {
  icon: React.ReactNode;
  title: string;
  tasks: number;
}) => {
  return (
    <div className="flex justify-between items-center rounded-xl px-2 group hover:bg-slate-100 h-[48px] transition-all ease-in-out duration-300">
      <p className="flex gap-2">
        {icon}
        {title}
      </p>
      <div className="bg-slate-100 w-8 h-[24px] text-xs grid place-items-center rounded-full group-hover:bg-white ">
        {tasks}
      </div>
    </div>
  );
};

export default Navcomponent;
