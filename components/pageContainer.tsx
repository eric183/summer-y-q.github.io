"use client";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="App w-screen h-screen flex flex-col dark:bg-gray-900 bg-gray-900">
      {children}
    </main>
  );
};

export default PageContainer;
