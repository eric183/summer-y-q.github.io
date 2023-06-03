import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
};

const Page = ({ children }) => {
  return <div className="ml-2">hello {children} </div>;
};

export default Page;
