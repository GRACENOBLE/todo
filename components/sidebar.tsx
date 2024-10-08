"use client";
import React, { useEffect, useState } from "react";
import Navcomponent from "./navcomponent";
import Groupcard from "./groupcard";
import { useRouter } from "next/navigation";
import { getLists } from "@/actions";

const Sidebar = () => {
  const router = useRouter();
  const navlinks: { title: string; route: string }[] = [];

  const [userLists, setUserLists] = useState<any>([]);
  const [lists, setLists] = useState<any>([]);
  const [inputData, setInputData] = useState("");

  const groups = [{}, {}];

  const handleAddList = () => {
    const temp: {}[] = lists.slice();
    temp.push({ title: inputData });
    setLists(temp);
    router.push(`/protected/${inputData}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLists();
      setUserLists(data);
    };

    fetchData();
  }, []);

  const uniqueLists = new Set();

  return (
    <div className="h-screen py-4">
      <div className="h-full w-[360px] rounded-xl px-4 py-8 overflow-auto bg-white">
        <h2 className="font-bold mb-4">Private</h2>

        <Navcomponent title={"Today"} route={`/protected/today`} userList={[]} />
        <ul>
          {userLists
            .map(({ list }: { list: string; route: string }) => {
              if (!uniqueLists.has(list)) {
                uniqueLists.add(list);
                return (
                  <li key={list}>
                    <Navcomponent title={list} route={`/protected/${list}`} userList={userLists} />
                  </li>
                );
              }
              return null;
            })
            .filter(Boolean)}
        </ul>
        <ul className="mb-4">
          {lists.map(({ title, route }: { title: string; route: string }) => (
            <li key={title}>
              <Navcomponent title={title} route={route} userList={[]} />
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
