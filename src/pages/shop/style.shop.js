import styled from "styled-components"


export const Wrapper = styled.div`
    /* flex box */
    display:flex;
    justify-content:center;
    flex-wrap:wrap;


    /* features */
    width:100%;
    height:auto;
    background: #eeeeee ;
`;

export const Product = styled.div`
   /* flex box */
    display:flex;
    flex-direction:column;
    justify-content:center;

    /* features */
    background-color:#fff;
    width:20%;
    height:440px;
    margin:1%;
    padding:1%;
    border-radius:1rem;
    border:2px solid #555;
    overflow:hidden;

    .img {
        height:60%;
        img {
        width:100%;
        height:100%;
        border-radius:1rem;
    }
    }
    h3{
        border:1px solid red;
    }
    button {
        width:100%;
        padding: .6rem;
        background-color:#555;
        border-radius:2rem;
        border:0;
        cursor: pointer;
        a {
            /* background-color:#555; */
            text-decoration:none;
            font-size:1.2rem;
            color:#fff;
            width:100%;
        }
    }
`