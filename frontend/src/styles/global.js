import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
 --background: #F0F2F5;
 --red-100: #EE8F79;
 --text-title: #363F5F;
 --text-body: #969CB3;
 --shape: #FFFFFF;
 --red: #ED1C2A;
 --white: #FFFFFF;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{ 
  @media(max-width: 1080px){
    font-size: 93.75%; 
  }

  @media(max-width: 720px){
    font-size: 87.5%; 
  }
}

body{ 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

form{
  color: var(--text-title);
}

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button{ 
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

`
