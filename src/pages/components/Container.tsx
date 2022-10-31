import React from "react";
import "../styles/Container.css";

export const Container = (props: React.PropsWithChildren<{ width: number }>) => {
  return (
    <div style={{ width: `${props.width}px` }} className="container">
      {props.children}
    </div>
  );
};
