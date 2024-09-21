import Link from "next/link";
import React from "react";

const Navcomponent = ({
  title,
  route,
}: {
  title: string;
  route: string
}) => {
  return (
    <Link
      className="flex justify-between items-center rounded-xl px-2 group hover:bg-slate-100 h-[48px] transition-all ease-in-out duration-300"
      href={route}
    >
      <p className="flex gap-2">
        {title}
      </p>
      <div className="bg-slate-100 w-8 h-[24px] text-xs grid place-items-center rounded-full group-hover:bg-white ">
        {/* {tasks} */}
      </div>
    </Link>
  );
};

export default Navcomponent;
