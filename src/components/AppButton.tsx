import React, { FC } from "react";

export const AppButton: FC<{
  type?: "submit" | "button" | "reset";
  children?: React.ReactNode;
  value?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ type = "button", children, value, className, disabled, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex py-150 px-200 capitalize items-center justify-center rounded-8  gap-100 text-text-preset-4 focus:shadow-[0px_0px_0px_2px_#FFFF,_0px_0px_0px_4px_#99A0AE] bg-blue-500 text-white hover:bg-blue-700 disabled:bg-neutral-100 disabled:text-neutral-300 w-full ${className}`}
    >
      {value}
      <span>{children}</span>
    </button>
  );
};
