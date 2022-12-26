import React from "react";
import styled from "styled-components";

const HomeSignInput = ({ value, setValue, placeholder, type = "text" }) => {
  return <Block value={value} type={type} onChange={({ target: { value } }) => setValue(value)} placeholder={placeholder} />;
};

const Block = styled.input`
  padding: 0px 20px;
  width: 100%;
  height: 35px;
  outline: none;
  border: 2px solid #e1e1e1;
  border-radius: 16px;
  font-size: 1rem;
`;

export default HomeSignInput;
