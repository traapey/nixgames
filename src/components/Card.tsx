import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export function Card({ icon, title, text }: CardProps) {
  return (
    <div className="rounded-xl bg-[#252728] flex flex-col px-4 pt-6 pb-12 items-center justify-center max-w-[270px] shadow-lg">
      <span className="text-gray-800 text-sm font-semibold inline-flex items-center p-6 rounded-full bg-[#161819]">
        {icon}
      </span>
      <span className="mt-2 font-semibold">{title}</span>
      <p className="mt-2 text-sm text-center">{text}</p>
    </div>
  );
}
