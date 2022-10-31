import React from "react";
import "./Container.css";

export const Container = (props: React.PropsWithChildren<{ width: number }>) => {
  return (
    <div style={{ width: `${props.width}px` }} className="container">
      {props.children}
    </div>
  );
};
