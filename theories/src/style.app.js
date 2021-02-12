import styled from "styled-components"

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const NavBar = styled.nav`
    width: 60%;
    MARGIN: 0 auto;
    padding:1rem 2rem;
    height:4rem;
    display: flex;
    background-color:#eee;
    justify-content:space-around;
    align-items:center;
    a {
        text-decoration:none;
        color:#333;
        padding: 1rem 1.5rem;
        border-radius:1rem;
        font-size:1.6rem;
        border: 1px solid #333;
    }
`