import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PasswordChecks = ({ passwordContent, characters, index }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "15px",
      }}
    >
      {characters?.includes(index) ? (
        <FaCheckCircle style={{ color: "green" }} />
      ) : (
        <FaTimesCircle style={{ color: "red" }} />
      )}
      <span>{passwordContent}</span>
    </li>
  );
};

export default PasswordChecks;
