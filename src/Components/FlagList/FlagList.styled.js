import styled from "styled-components"

export const FlagsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 8rem 0 0;
  width: 100%;

  @media (max-width: 80em) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 60em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 40em) {
    grid-template-columns: 1fr;
    padding-top: 4rem;
  }
`
