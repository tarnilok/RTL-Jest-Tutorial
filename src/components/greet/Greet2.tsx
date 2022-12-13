import React from "react";

export const Greet2 = ({ name = "" }: { name?: string }) => {
  return <div>Hello {name}</div>;
};
