import styled from "styled-components";

export const Container = styled.div`
 
  width: 100%;
  height: 100vh;
  
  display: flex;
  gap: 50px;
  flex-direction: column;
  
  
`;

export const Links = styled.ul`
  list-style: none;

  >li {
    margin-top: 12px;
  }

  a {
    color: ${({theme}) => theme.COLORS.WHITE}; 
  }

`
