import styled from "styled-components"


export const Navbar = styled.nav`
    width: 100%;
    height: 5rem;
    background:#3333;
    padding:1rem;

    /* flex box */
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const ListNavigation  = styled.ul`
    list-style:none;
    display:flex;
    margin-right:3%;
    li {
        margin-right:2rem;
        a {
            width:100%;
            text-decoration:none;
            font-size:1.1rem;
            color:#333;
            padding:1rem 2rem;
            border:1px solid #333;
            border-radius:1rem;
            transition:all 0.4s;
            &:hover {
                background-color:#fff;
                color:#333;
            }
        }
    }
`