import styled from "styled-components";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContactsName = styled.p`
  color: #300339;
  font-size: 18px;
`;

export const ContactsButton = styled.button`
  font-size: 20px;
  font-weight: 500;
  color: #300339;
  background-color: #e1bbe3;
  width: 100px;
  border-radius: 10px;
  border: none;
  padding: 16px;
  transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(51, 0, 66, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
