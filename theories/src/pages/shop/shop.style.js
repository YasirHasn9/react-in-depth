import styled from "styled-components"


export const Wrapper = styled.div`
    width:90%;
    margin: 0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    a{
        width: 23%;
        margin:2%;
    }
`
export const CategoryDiv = styled.div`
    display:flex;
    align-items:center;
  
    height:500px;
    margin:1%;
    border:1px solid #333;
    img {
        width:100%;
    }
`




export const BtnDiv = styled.div`
    width: 80%;
    height: 4rem;
    display:flex;
    justify-content:space-between;
   
`   
export const CategoryButton = styled.button`
    padding: 0 2rem;
    border: none;
    border-radius:1rem;
    width:22%;
    :hover {
        background-color:#333;
        color:#fff;
    }
    a {
        text-decoration:none;
        color:#333;
        font-size:1rem;
        font-style:bold;
        width:100%;
        height:100%;
        :hover {
            color:#fff;
        }
    }
`

