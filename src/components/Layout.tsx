import React, { FC } from "react";

interface Layout {
  children?: React.ReactNode;
}

const Layout: FC<Layout> = ({ children }) => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-white text-black">
      {children}
    </section>
  );
};

export default Layout;
