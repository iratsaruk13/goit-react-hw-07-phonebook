import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  margin-right: auto;
  font-size: 20px;
  color: #300339;
`;

export const FormInput = styled.input`
  font-size: 16px;
  color: #300339;
  border-radius: 15px;
  border: none;
  &:hover,
  &:focus {
    border: 1px solid #a942d9;
  }
  padding: 15px;
  width: 100%;
  background-color: #e9d8f9;
  &:hover {
    background-color: #ddaaeb;
  }
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 0 0 5px rgba(96, 0, 118, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const Error = styled.div`
  position: absolute;
  color: #cb1717;
  font-size: 14px;
`;

export const FormContactBtn = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #300339;
  background-color: #e1bbe3;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 16px;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(51, 0, 66, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
