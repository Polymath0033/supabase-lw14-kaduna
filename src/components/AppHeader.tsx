import { FC } from "react";
import { Logo } from "./logo";

export const AppHeader: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <header className="flex justify-between w-full px-[42px] bg-neutral-700 ">
      <Logo />
      {children}
    </header>
  );
};
