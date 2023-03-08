import styled from "styled-components"

export const FlagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: ${({ theme }) => theme.backgroundColorElements};
  color: ${({ theme }) => theme.colorText};
`

export const Img = styled.img`
  max-width: 100%;
  object-fit: contain;
  grid-row-start: 1;
  grid-row-end: 2;
`
export const Description = styled.div`
  padding: 30px;
  justify-self: start;
`

export const Details = styled.div`
  margin-top: 10px;
  justify-self: start;
`

export const Detail = styled.p`
  justify-self: start;
`
export const FlagDetailsPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 30px;
`
