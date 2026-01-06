import React, { PropsWithChildren, ReactNode } from "react";

interface IRenderProps extends PropsWithChildren {
  in: boolean;
  fallback?: ReactNode;
}
const Render: React.FC<IRenderProps> = (props) => {
  if (props.in) return <>{props.children}</>;
  return props.fallback;
};

export default Render;
