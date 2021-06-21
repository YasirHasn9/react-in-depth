import styled from "styled-components";
const Header = styled.header`
    width: 100%;
    height: 6rem;
    background-color: purple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    h1 {
        margin-left: 2rem;
        font-size: 2rem;
    }
    ul {
        margin-right: 4rem;
        display: flex;
        justify-content: space-between;
        width: 400px;
        list-style: none;
        font-size: 1.2rem;
        li {
            padding: 0.5rem 1.5rem;
            border-radius: 1rem;
            text-transform: capitalize;
            &.logout {
                background-color: rebeccapurple;
                &:hover {
                    background-color: palegreen;
                }
            }
        }
    }
    a {
        color: #fff;
        text-decoration: none;
        width: 100%;
        height: 100%;
        &:hover {
            color: purple;
        }
    }
`;
export const HeaderEffect = (props) => {
    console.log(props);
    const logout = () => {
        props.setShowMenu(false);
    };
    return (
        <Header>
            <h1>A Typical Page</h1>
            {props.showMenu ? (
                <ul>
                    <li>Users</li>
                    <li>Admin</li>
                    <li onClick={logout} className="logout">
                        <a href="#">Logout</a>
                    </li>
                </ul>
            ) : null}
        </Header>
    );
};
