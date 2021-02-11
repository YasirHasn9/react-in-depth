import styled from "styled-components"

export const NavBar = styled.nav`
background-color:#d1eaf3;
width:100%;
height:8rem;
display:flex;
justify-content:space-between;
align-items:center;
h1 {
    padding:1rem 2rem;
    letter-spacing:5px;
    font-family:cursive;
    font-size:3rem;
    a {
        color:#333;
    }
}
 div {   
     display:flex;
     justify-content:space-around;
     align-items:center;
     width:40%;
     a {
         padding:1.5rem 2rem;
         text-decoration:none;
         color:#333;
         font-size:1.6rem;
         text-transform:capitalize;
         transition:all .4s;
         letter-spacing:3px;
         transform:translateY(-1px);
         border:1px solid #000;
         border-bottom:1rem solid #000;
         border-radius:1rem;
         &:hover {
             transform:translateY(-3px);
         }
         &:active {
            transform:translateY(2px);
         }
        }
 }
`


