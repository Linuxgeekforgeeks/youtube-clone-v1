"use client";

import { MdOutlineAccountCircle } from "react-icons/md";

function SignInButton() {
  return (
    <button className="flex gap-2 items-center overflow-hidden mr-6 border-[1px] border-slate-100 px-3 py-1.5 cursor-pointer text-blue-400 rounded-full">
      <MdOutlineAccountCircle className="h-6 w-6" />
      Sign In
    </button>
  );
}

export default SignInButton;
