import styled from "styled-components"


export const Navbar = styled.nav`
    width: 100%;
    height: 7rem;
    padding:1rem;

    /* flex box */
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const ListNavigation  = styled.ul`
    list-style:none;
    display:flex;
    margin-right:12%;
    li {
        margin-right:1.2rem;
        a {
            text-transform:uppercase;
            width:100%;
            text-decoration:none;
            font-size:1.1rem;
            color:#333;
            padding:1rem 2rem;
            border:1px solid transparent;
            border-radius:1rem;
            transition:ease-in-out 0.4s;
            &:hover {
                background-color:rgba(0,0,0, 0.5);
                color:#fff;
                border:1px solid #fff;
            }
        }
    }
`

export const Logo = styled.div`
    font-family: 'Ballet', cursive;
    font-size:2rem;
    margin-left:2%;
    color:#333;
`