import React from "react";

const ConfirmPassword = ({ handleConfirmChange, confirmPassword, isMatch }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmChange}
          style={{
            height: "40px",
            fontSize: "18px",
            paddingInline: "10px",
            marginBlock: "10px",
          }}
        />
      </div>
      {!isMatch && (
        <span style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}>
          Passwords do not match
        </span>
      )}
    </div>
  );
};

export default ConfirmPassword;
