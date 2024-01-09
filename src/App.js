import React, { useState, useEffect } from "react";
import ConfirmPassword from "./components/confirmPassword";
import Password from "./components/password";
import { isCheck, isPasswordsCheck } from "./isCheck";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowChecks, setIsShowChecks] = useState(false);
  const [characters, setCharacters] = useState(null);
  const [isMatch, setIsMatch] = useState(true);

  let newCharacters = [];
  // HANDLE password CHANGE
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsShowChecks(true); // Show password security check

    // Function that handles password security checks
    isCheck(value, newCharacters);

    setCharacters(newCharacters);

    // Check if there is value in confirmPassword input
    if (confirmPassword) {
      isPasswordsCheck(password, value, setIsMatch);
    } else {
      setIsMatch(true);
    }
  };

  // TRACK password AND confirmPassword TO MAKE SURE THE MATCH ERROR TRIGGERS WHEN EITHER INPUT FIELD CHANGES
  useEffect(() => {
    if (password === confirmPassword) {
      setIsMatch(true);
    }
    if (!password) {
      setIsShowChecks(false);
    }
  }, [password, confirmPassword]);

  // HANDLE confirmPassword CHANGE
  const handleConfirmPasswordChange = (e) => {
    setIsShowChecks(true); // Don't show password security check
    const value = e.target.value;
    setConfirmPassword(value);

    // Function to check if password is same as confirm password
    isPasswordsCheck(password, value, setIsMatch);

    // Remove "password not match" warning if confirmPassword does not have a value
    if (!value) {
      setIsMatch(true);
    }
  };

  return (
    <form
      style={{
        border: "2px solid green",
        padding: "20px 10px",
      }}
    >
      {/* Password Input */}
      <Password
        characters={characters}
        password={password}
        handlePasswordChange={handlePasswordChange}
        isShowChecks={isShowChecks}
      />

      {/* Confirm Password Input */}
      <ConfirmPassword
        handleConfirmChange={handleConfirmPasswordChange}
        isMatch={isMatch}
      />
    </form>
  );
}

export default App;
