import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "../checkbox";

export default function AccordionFilter({ label, list }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const optionsList = list;

  useEffect(() => {}, [isOpen]);

  return (
    <>
      {optionsList ? (
        <>
          <Title>
            {isOpen ? (
              <h4 onClick={toggleOpen}>-</h4>
            ) : (
              <h4 onClick={toggleOpen}>+</h4>
            )}
            <h4>{label}</h4>
          </Title>
          {isOpen ? (
            <Options>
              <ul>
                {optionsList.map((option) => (
                  <li key={option.id}>
                    <Checkbox
                      id={option.id}
                      name={option.name}
                      checked={false}
                    />
                  </li>
                ))}
              </ul>
            </Options>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;

  h4 {
    padding: 10px;
    margin: 0;
    cursor: pointer;
  }
`;

const Options = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
