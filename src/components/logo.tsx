import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <Link to={"/"} className="flex gap-1 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
      >
        <g id="Feather" clipPath="url(#clip0_2565_12978)">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.8995 2.15785C26.8677 0.192253 23.4741 0.809653 20.5411 1.59505C7.79136 6.29345 3.28056 15.8415 1.69576 21.5297C1.61736 21.6725 1.56976 21.8363 1.56556 22.0113C0.938362 24.4249 0.852962 26.0335 0.851562 26.0867C0.827762 26.6649 1.27716 27.1535 1.85536 27.1773C1.87076 27.1787 1.88616 27.1787 1.90156 27.1787C2.46016 27.1787 2.92496 26.7377 2.95016 26.1735C2.95716 26.0027 3.02156 24.8281 3.41776 23.0725C6.92896 22.9241 10.464 21.6165 13.9359 19.1749C14.2075 18.9845 14.3727 18.6765 14.3825 18.3461C14.3923 18.0143 14.2439 17.6979 13.9849 17.4935L12.3833 16.2251L17.6389 15.7099C17.8531 15.6889 18.0547 15.6035 18.2185 15.4635C18.3319 15.3683 21.0073 13.0779 23.5525 10.4081C27.4235 6.34805 28.7633 3.80425 27.8995 2.15785Z"
            fill="#335CFF"
          />
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6785 25.0801H12.7045C12.1249 25.0801 11.6545 25.5505 11.6545 26.1301C11.6545 26.7097 12.1249 27.1801 12.7045 27.1801H21.6785C22.2581 27.1801 22.7285 26.7097 22.7285 26.1301C22.7285 25.5505 22.2581 25.0801 21.6785 25.0801Z"
            fill="#335CFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_2565_12978">
            <rect
              width="28"
              height="28"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <span className="text-white font-cursive text-[23px] font-normal !tracking-[-0.46px] [text-edge:cap] [leading-trim:both] ">
        Notes
      </span>
    </Link>
  );
};
