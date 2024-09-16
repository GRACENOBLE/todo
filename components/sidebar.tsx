import React from "react";
import Navcomponent from "./navcomponent";
import Groupcard from "./groupcard";

const Sidebar = () => {
  const navlinks: {
    key: string;
    icon: string;
    title: string;
    tasks: number;
    route: string;
  }[] = [
    {
      key: "1",
      icon: "🏠",
      title: "Home",
      tasks: 8,
      route: "/",
    },
    {
      key: "2",
      icon: "😂",
      title: "List 1",
      tasks: 0,
      route: "",
    },
    {
      key: "3",
      icon: "🙀",
      title: "List 2",
      tasks: 0,
      route: "",
    },
    {
      key: "4",
      icon: "😏",
      title: "List 3",
      tasks: 0,
      route: "",
    },
    {
      key: "5",
      icon: "🥲",
      title: "List 4",
      tasks: 0,
      route: "",
    },
  ];

  const groups = [{}, {}];

  return (
    <div className=" max-h-screen h-full py-4 ps-20">
      <div className="h-full w-[360px] rounded-lg px-2 py-8 overflow-auto bg-white">
        <h2 className="font-bold mb-4">Private</h2>
        <ul className="mb-4">
          {navlinks.map(({ key, icon, title, tasks, route }) => (
            <li key={key}>
              <Navcomponent
                icon={<span>{icon}</span>}
                title={title}
                tasks={tasks}
              />
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="outline-none px-4 w-full rounded-full py-2 bg-slate-100"
          placeholder="+ Create new list"
        />
        {/* groups */}
        <h2 className="font-bold my-4">Groups</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {groups.map(() => (
            <Groupcard />
          ))}
        </div>
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
