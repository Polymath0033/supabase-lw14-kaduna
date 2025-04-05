import React, { FC } from "react";
import { Logo } from "./logo";

export const AuthWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-700 w-full h-screen ">
      <section className="bg-neutral-950 border border-solid border-neutral-800 min-w-[540px] max-w-md  p-600 gap-200 flex flex-start flex-col rounded-16 shadow-md">
        <Logo />
        <h1 className="text-white text-center text-2xl font-bold !tracking-[-0.5px] !leading-[120%] " >Welcome to Note</h1>
        {children}
      </section>
    </div>
  );
};
