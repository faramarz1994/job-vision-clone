import React, { useState } from "react";

const Input = ({
  type,
  placeholder,
  onChange,
  customClass,
  width,
  id,
  value,
  password,
}) => {
  const [passType, setPassType] = useState("password");
  return password ? (
    <div className="w-full flex items-center">
      <input
        type={passType}
        onChange={onChange}
        id={id ? id : 0}
        value={value}
        placeholder={"رمز عبور انتخاب کنید"}
        className={`${"w-full"} bg-gray-100 text-xs py-3 px-3 h-11 rounded border rounded-l-none border-l-0 border-gray-200 outline-blue-300
    focus:bg-white focus:text-black57`}
      />
      <div
        className="h-11 w-11 flex items-center justify-center border border-r-0 border-gray-200 rounded rounded-r-none cursor-pointer bg-gray-100"
        onClick={() =>
          passType === "password"
            ? setPassType("text")
            : setPassType("password")
        }
      >
        {passType === "password" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 13.9091C0 13.9091 4.09091 3 15 3C25.9091 3 30 13.9091 30 13.9091C30 13.9091 25.9091 24.8182 15 24.8182C4.09091 24.8182 0 13.9091 0 13.9091ZM27.0117 13.9038C25.8335 11.546 22.1945 5.72727 15 5.72727C7.83409 5.72727 4.16919 11.5731 2.98828 13.9144C4.16646 16.2721 7.80545 22.0909 15 22.0909C22.1659 22.0909 25.8322 16.2451 27.0117 13.9038ZM15 8.45455C11.9877 8.45455 9.54545 10.8968 9.54545 13.9091C9.54545 16.9214 11.9877 19.3636 15 19.3636C18.0123 19.3636 20.4545 16.9214 20.4545 13.9091C20.4545 10.8968 18.0123 8.45455 15 8.45455ZM17.7273 13.9091C17.7273 12.4023 16.5068 11.1818 15 11.1818C13.4932 11.1818 12.2727 12.4023 12.2727 13.9091C12.2727 15.4159 13.4932 16.6364 15 16.6364C16.5068 16.6364 17.7273 15.4159 17.7273 13.9091Z"
              fill="#9FA1A7"
            ></path>{" "}
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="3"
              width="30"
              height="22"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 13.9091C0 13.9091 4.09091 3 15 3C25.9091 3 30 13.9091 30 13.9091C30 13.9091 25.9091 24.8182 15 24.8182C4.09091 24.8182 0 13.9091 0 13.9091ZM27.0117 13.9038C25.8335 11.546 22.1945 5.72727 15 5.72727C7.83409 5.72727 4.16919 11.5731 2.98828 13.9144C4.16646 16.2721 7.80545 22.0909 15 22.0909C22.1659 22.0909 25.8322 16.2451 27.0117 13.9038ZM15 8.45455C11.9877 8.45455 9.54545 10.8968 9.54545 13.9091C9.54545 16.9214 11.9877 19.3636 15 19.3636C18.0123 19.3636 20.4545 16.9214 20.4545 13.9091C20.4545 10.8968 18.0123 8.45455 15 8.45455ZM17.7273 13.9091C17.7273 12.4023 16.5068 11.1818 15 11.1818C13.4932 11.1818 12.2727 12.4023 12.2727 13.9091C12.2727 15.4159 13.4932 16.6364 15 16.6364C16.5068 16.6364 17.7273 15.4159 17.7273 13.9091Z"
                fill="white"
              ></path>
            </mask>{" "}
            <g mask="url(#mask0)">
              <rect
                width="30"
                height="30"
                transform="translate(0 -1)"
                fill="#9FA1A7"
              ></rect>
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 13.9091C0 13.9091 4.09091 3 15 3C25.9091 3 30 13.9091 30 13.9091C30 13.9091 25.9091 24.8182 15 24.8182C4.09091 24.8182 0 13.9091 0 13.9091ZM27.0117 13.9038C25.8335 11.546 22.1945 5.72727 15 5.72727C7.83409 5.72727 4.16919 11.5731 2.98828 13.9144C4.16646 16.2721 7.80545 22.0909 15 22.0909C22.1659 22.0909 25.8322 16.2451 27.0117 13.9038ZM15 8.45455C11.9877 8.45455 9.54545 10.8968 9.54545 13.9091C9.54545 16.9214 11.9877 19.3636 15 19.3636C18.0123 19.3636 20.4545 16.9214 20.4545 13.9091C20.4545 10.8968 18.0123 8.45455 15 8.45455ZM17.7273 13.9091C17.7273 12.4023 16.5068 11.1818 15 11.1818C13.4932 11.1818 12.2727 12.4023 12.2727 13.9091C12.2727 15.4159 13.4932 16.6364 15 16.6364C16.5068 16.6364 17.7273 15.4159 17.7273 13.9091Z"
              fill="#9FA1A7"
            ></path>{" "}
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="3"
              width="30"
              height="22"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 13.9091C0 13.9091 4.09091 3 15 3C25.9091 3 30 13.9091 30 13.9091C30 13.9091 25.9091 24.8182 15 24.8182C4.09091 24.8182 0 13.9091 0 13.9091ZM27.0117 13.9038C25.8335 11.546 22.1945 5.72727 15 5.72727C7.83409 5.72727 4.16919 11.5731 2.98828 13.9144C4.16646 16.2721 7.80545 22.0909 15 22.0909C22.1659 22.0909 25.8322 16.2451 27.0117 13.9038ZM15 8.45455C11.9877 8.45455 9.54545 10.8968 9.54545 13.9091C9.54545 16.9214 11.9877 19.3636 15 19.3636C18.0123 19.3636 20.4545 16.9214 20.4545 13.9091C20.4545 10.8968 18.0123 8.45455 15 8.45455ZM17.7273 13.9091C17.7273 12.4023 16.5068 11.1818 15 11.1818C13.4932 11.1818 12.2727 12.4023 12.2727 13.9091C12.2727 15.4159 13.4932 16.6364 15 16.6364C16.5068 16.6364 17.7273 15.4159 17.7273 13.9091Z"
                fill="white"
              ></path>
            </mask>{" "}
            <g mask="url(#mask0)">
              <rect
                width="30"
                height="30"
                transform="translate(0 -1)"
                fill="#9FA1A7"
              ></rect>
            </g>{" "}
            <line
              x1="1"
              y1="-1"
              x2="33"
              y2="-1"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 27 2)"
              stroke="#9FA1A7"
              stroke-width="2"
              stroke-linecap="round"
            ></line>
          </svg>
        )}
      </div>
    </div>
  ) : (
    <input
      type={type ? type : "text"}
      onChange={onChange}
      id={id ? id : 0}
      value={value}
      placeholder={placeholder}
      className={`${
        customClass ? customClass : "w-full"
      } bg-gray-100 text-xs py-3 px-3 rounded border border-gray-200 outline-blue-300
    focus:bg-white focus:text-black57`}
    />
  );
};

export default Input;
