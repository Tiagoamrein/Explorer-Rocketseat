import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color:${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialisead;
  }
  body, button, input, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }
  *::-webkit-scrollbar {
    width: 8px;
}
*::-webkit-scrollbar-track {
    background: transparent;
}
*::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 20px;
}
  a{
    text-decoration: none;
  }
  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover , a:hover{
    filter: brightness(0.9);
  }
`