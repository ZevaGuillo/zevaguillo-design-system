import React from "react";
import clsx from "clsx";
import type { KbdProps } from "./Kbd.types";

export const Kbd = ({ children, className = "" }: KbdProps) => {
  return (
    <kbd
      className={clsx(
        "inline-flex h-5 w-fit min-w-[20px] items-center justify-center rounded-md border border-gray-300 bg-gray-100 px-1 text-xs font-mono",
        className,
      )}
    >
      {children}
    </kbd>
  );
};

export default Kbd;
