"use client";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="App w-screen h-screen flex flex-col dark:bg-slate-500">
      {children}
    </main>
  );
};

export default PageContainer;
