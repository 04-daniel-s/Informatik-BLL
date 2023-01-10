import React from "react";
import "../styles/Container.css";

export const Container = (props: React.PropsWithChildren<{ width: number; minHeight?: string }>) => {
  return (
    <div style={{ width: `${props.width}px`, minHeight: `${props.minHeight}` }} className="container">
      {props.children}
    </div>
  );
};
