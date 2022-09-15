import React from "react";
import { classnames } from "../utils/general";

const ButtonBanner = (props) => {
  return (
    <div className="flex flex-row px-4 py-4">
      {props.challenges.map((challenge) => {
        const color =
          props.selected === challenge.id ? "bg-yellow-500" : "bg-white";

        return (
          <button
            key={challenge.id}
            onClick={() => {
              props.onClick(challenge.id);
            }}
            className={classnames(
              `border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 ${color} flex-shrink-0 mx-2`
            )}
          >
            {challenge.title}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonBanner;
