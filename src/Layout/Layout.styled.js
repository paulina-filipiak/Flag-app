import styled from "styled-components"
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Button = styled.button`
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.backgroundColorElements};
`
