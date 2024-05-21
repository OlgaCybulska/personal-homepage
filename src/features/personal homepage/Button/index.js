import styled from "styled-components";

export default styled.button`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  width: fit-content;
  border: 1px;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 20.058px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.buttonText};

  &:hover {
    box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.colors.buttonShadow};
  }
`;
