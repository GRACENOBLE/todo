"use client";
import React, { useState } from "react";
import Navcomponent from "./navcomponent";
import Groupcard from "./groupcard";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const navlinks: { title: string; route: string }[] = [];

  const [lists, setLists] = useState<any>([]);
  const [inputData, setInputData] = useState("");

  const groups = [{}, {}];

  const handleAddList = () => {
    const temp: {}[] = lists.slice();
    temp.push({ title: inputData, route: `/protected/${inputData}` });
    setLists(temp);
    router.push(`/protected/${inputData}`);
  };

  console.log(lists);

  return (
    <div className=" max-h-screen h-full py-4 ps-20">
      <div className="h-full w-[360px] rounded-lg px-2 py-8 overflow-auto bg-white">
        <h2 className="font-bold mb-4">Private</h2>
        <ul className="mb-4">
          {lists.map(({ title, route }: { title: string; route: string }) => (
            <li key={title}>
              <Navcomponent title={title} route={route} />
            </li>
          ))}
        </ul>
        <form action={handleAddList}>
          <input
            type="text"
            className="outline-none px-4 w-full rounded-full py-2 bg-slate-100"
            placeholder="+ Create new list"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </form>

        {/* groups */}
        <h2 className="font-bold my-4">Groups</h2>
        <ul className="grid grid-cols-2 gap-2 mb-4">
          {groups.map((_, i) => (
            <li key={i}>
              <Groupcard />
            </li>
          ))}
        </ul>

        <input
          type="text"
          className="outline-none px-4 w-full rounded-full py-2 bg-slate-100"
          placeholder="+ Create new group"
        />
      </div>
    </div>
  );
};

export default Sidebar;
