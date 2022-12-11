import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container= styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 85rem auto;
  grid-template-areas:
    "header"
    "title"
    "content";

    
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 4rem 0;

    a{
      text-decoration: none;
      color: ${({theme}) => theme.COLORS.WHITE};
    } 
  }
 
`;
 
export const Title= styled.div`
    grid-area: title;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    padding: 24px 94px;
    
    
    
`



export const NewMovie=styled(Link)`
    
    
    border: none;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    display: flex;
    align-items: center;
    padding: 13.5px 32px;
    width: 220px;
    margin-right: 30px;
    height: 48px;
    border-radius: 10px;
    gap: 8px;
    

`