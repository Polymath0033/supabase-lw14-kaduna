import { FC } from "react";

export const NoteCard: FC<{
  title: string;
  content: string;
  updateAt: string;
  className?: string;
}> = ({ title, content, updateAt }) => {
  return (
    <article className="rounded-8 w-[280px] p-4 bg-neutral-950 flex flex-col items-start justify-start gap-2">
      <h4 className="capitalize text-white text-text-preset-3 ">{title}</h4>
      <p className="text-text-preset-6 text-neutral-100 ">
        {content.length > 50 ? content.substring(0, 50) + "..." : content}{" "}
      </p>
      <p className=" text-text-preset-6 w-full mr-0 text-neutral-300 flex flex-end justify-end ">
        {updateAt}
      </p>
    </article>
  );
};
