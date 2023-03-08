import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
${normalize}

:root {
  --color-white: #fff;
  --color-light-grey: #f4f6f8;
  --color-grey: #9daec2;
  --color-dark-grey: #6e8098;
  --color-very-dark-blue: #19202d;
  --font-size-h1: 2.8rem;
  --line-height-h1: 3.4rem;
  --font-size-h2: 2.4rem;
  --line-height-h2: 2.9rem;
  --font-size-h3: 2rem;
  --line-height-h3: 2.4rem;
  --font-size-h4: 1.4rem;
  --line-height-h4: 1.8rem;
  --font-size-body: 1.6rem;
  --line-height-body: 2.6rem;
  --border-radius-s: 0.6rem;
  --border-radius-l: 1.5rem;
  --padding-layout: 0 10%;
  --padding-search-bar-items: 2rem 3.2rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 50%;
  scroll-behavior: smooth;
}

body {
  font-family: "Kumbh Sans", sans-serif;
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: ${({ theme }) => theme.colorText};
}

select {
  font-size: var(--font-size-h4);
  color: ${({ theme }) => theme.colorText};
  :active, :focus{
    border: none;
  }
}

input {
  font-size: var(--font-size-h4);
  color: ${({ theme }) => theme.colorText};
  :active, :focus {
    border: none;
  }
}

:root {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColorApp};
  overflow: auto;
  transition: 0.2s linear;
}
`
