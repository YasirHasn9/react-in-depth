import styled from "styled-components"

export const NavBar = styled.nav`
width:100%;
display:flex;
justify-content:space-around;
h1 {
    padding:1rem 2rem;
    border-bottom:1px solid skyblue;
    letter-spacing:5px;
    font-family:cursive;
    a {
        color:#fff;
    }
}
 div {   
     display:flex;
     justify-content:space-around;
     align-items:center;
     width:40%;
     a {
         padding:1.5rem 2rem;
         border-bottom:2px solid skyblue;
         text-decoration:none;
         color:#fff;
         font-size:2.2rem;
         text-transform:capitalize;
         transition:all .4s;
         letter-spacing:3px;
         transform:translateY(-1px);
         &:hover {
             background:#000;
             border-radius:1rem;
             transform:translateY(-3px);
         }
         &:active {
            transform:translateY(-2px);
         }
        }
 }
`


