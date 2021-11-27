import React from "react";
import { Spin } from "antd";

export function Spinner() {
  return (
    <div className="spinner">
      <Spin size="large" />
    </div>
  );
}

export default Spinner;
