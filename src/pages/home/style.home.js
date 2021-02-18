import styled from "styled-components"
import BKHero from "../../assets/images/hero.webp"

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image:url(${BKHero}); 
    background-position:top;
    background-size:cover;
    .overlay  {
        width:100vw;
        height:100vh;
        background:rgba(854, 544, 431, 0.4);
    }
`