import React from "react";
import { passwordChecksArr } from "../data";
import PasswordChecks from "./passwordChecks";

const Password = ({
  characters,
  password,
  handlePasswordChange,
  isShowChecks,
}) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            height: "40px",
            fontSize: "18px",
            paddingInline: "10px",
            marginBlock: "10px",
          }}
        />
      </div>
      {isShowChecks && (
        <div>
          <h4 style={{ lineHeight: "0.1cm" }}>Password should be:</h4>
          <ul style={{ listStyleType: "none" }}>
            {passwordChecksArr.map((each, i) => {
              const { id, passwordContent } = each;
              return (
                <PasswordChecks
                  key={id}
                  passwordContent={passwordContent}
                  index={id}
                  characters={characters}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Password;
