import React, { useState } from "react";
import styled from "styled-components";

export default function Checkbox({ id, name, checked }) {
  // TODO: Style the component and checkmark to look like the mockup provided
  const [isChecked, setIsChecked] = useState(checked);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxCont>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onClick={toggleChecked}
      />
      <label htmlFor={id}>{name}</label>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.div`
  position: relative;
  display: flex;

  input {
    margin: 5px 10px;
  }
`;
