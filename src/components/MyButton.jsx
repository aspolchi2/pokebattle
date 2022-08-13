import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ onClick, src }) => {
  return (
    <Button onClick={onClick} variant="text">
      <img src={src} alt="logo" />
    </Button>
  );
};

export default MyButton;
