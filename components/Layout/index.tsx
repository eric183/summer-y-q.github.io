import React, { FC, Fragment } from "react";
import SideNav from "./SideNav";
import Avatar from "./Avatar";

interface LayoutProps {
  children: React.ReactNode & any;
  path: string;
  pageKeys: string[];
}

const Layout: FC<LayoutProps> = ({ children, path, pageKeys }) => {
  return (
    <main className="App w-screen h-screen flex flex-col">
      {/* Header */}
      <header
        role="banner"
        className="flex items-center justify-between px-4 bg-sky-200 text-white py-3 text-sm font-medium flex-shrink-0"
      >
        <span className="font-extrabold text-gray-500 text-base">
          骷髅樱桃电商后台惹
        </span>
        <Avatar
          className="rounded-full self-end"
          src="data:image/png;base64,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"
        ></Avatar>
      </header>

      {/* Main Content */}
      <section className="main-content flex flex-1 w-full bg-slate-200 px-4 py-5">
        {/* Sidebar */}
        <aside role="complementary" className="w-64 flex-shrink-0 flex-.5 mr-4">
          <SideNav />
        </aside>

        {/* Content */}
        <section className="router-enter flex-1 flex-shrink-0">
          {children}
          {/* <IndexRoot></IndexRoot> */}
        </section>
      </section>
    </main>
  );
};

export default Layout;
