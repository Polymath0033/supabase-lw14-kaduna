import { FC } from "react";

export const DeleteModal: FC<{
  onClose: () => void;
  deleteHandler: () => void;
}> = ({ onClose, deleteHandler }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="bg-neutral-700 border border-solid border-neutral-600 min-w-[440px] max-w-md  gap-200 flex flex-start flex-col rounded-12 shadow-md">
        <div className="flex items-center justify-start p-250 gap-200">
          <i className="w-10 h-10 rounded-8 gap-2 flex justify-center items-center bg-neutral-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M14.8521 4.37899L15.6702 6.16378H18.3097C19.1212 6.16378 19.7791 6.82166 19.7791 7.6332V8.7214C19.7791 9.27626 19.3293 9.72606 18.7745 9.72606H5.00466C4.4498 9.72606 4 9.27626 4 8.7214V7.6332C4 6.82166 4.65788 6.16378 5.46943 6.16378H8.10885L8.92705 4.37899C9.17255 3.84339 9.70775 3.5 10.2969 3.5H13.4821C14.0713 3.5 14.6065 3.84339 14.8521 4.37899Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.24 9.80078V18.4865C18.24 20.1511 16.9073 21.5005 15.2634 21.5005H8.51661C6.8727 21.5005 5.54004 20.1511 5.54004 18.4865V9.80078"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.1992 13.3164V17.8248M13.5796 13.3164V17.8248"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
          <div className="flex flex-col gap-[6px] [flex:1_0_0] items-start ">
            <h1 className="text-text-preset-3 text-white ">Delete Note</h1>
            <p className=" text-text-preset-5 text-neutral-200 ">
              Are you sure you want to permanently delete this note? This action
              cannot be undone.
            </p>
          </div>
        </div>

        <div className="w-full rounded-12 bg-neutral-600 h-[1px] "></div>
        <div className="flex gap-200 justify-end p-250">
          <button
            className="bg-gray-500  text-white py-150 px-200 flex justify-center items-center rounded-8 text-text-preset-4"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="bg-red-500 text-white py-150 px-200 flex justify-center items-center rounded-8 text-text-preset-4"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
