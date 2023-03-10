import { Menu } from "@headlessui/react";
import { Icon } from "Icons";

function Auth() {
  const user = {
    name: "nesathanozturk",
    avatar: "https://avatars.githubusercontent.com/u/107864503?v=4",
  };

  return (
    <Menu as="nav" className={"hidden md:block relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl bg-black pr-2 hover:bg-active ${
              open ? "bg-active" : "bg-black"
            }`}
          >
            <img
              src={user.avatar}
              alt="Avatar"
              className={"w-8 h-8 rounded-full p-0.5 mr-2"}
            />
            <span className="text-sm font-semibold mr-2 md:hidden lg:inline">
              {user.name}
            </span>
            <span className={open && "rotate-180"}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/s"
                >
                  Account
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/s"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/s"
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded border-t-[1px] border-zinc-700 ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/s"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
