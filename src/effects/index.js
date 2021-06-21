import { useEffect, useRef, useState } from "react";
import { HeaderEffect } from "./header";
import styled from "styled-components";
const Form = styled.form`
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 40%;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    border-radius: 2rem;
    outline: none;
    border: 1px solid #000;
    /* border: none; */
`;

const Button = styled.button`
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transform: translateY(-2px);
    transition: all 0.2s;
    &:active {
        transform: translateY(2px);
    }
`;
const WelDiv = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: purple;
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const UsingSideEffect = () => {
    const [showMenu, setShowMenu] = useState(false);
    const userEmail = useRef();
    const userPassword = useRef();

    useEffect(() => {
        if (localStorage.getItem("userIn")) {
            setShowMenu(true);
        }
    }, [showMenu]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // userEmail.current.value = "";
        // userPassword.current.value = "";
        if (userPassword.current.value.length > 6) {
            setShowMenu(true);
        }
        localStorage.setItem("userIn", "1");
    };
    return (
        <>
            <HeaderEffect showMenu={showMenu} setShowMenu={setShowMenu} />
            {showMenu ? (
                <WelDiv>Welcome Back</WelDiv>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Input type="email" ref={userEmail} placeholder="Email" />
                    <Input
                        type="password"
                        ref={userPassword}
                        placeholder="Password"
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </>
    );
};
