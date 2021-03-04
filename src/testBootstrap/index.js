import {Counter} from "../reducer/index"
import {Container , Row , Col} from "react-bootstrap"
import "./style.css"

export const PlayingWithBootstrap = () => {
    return (
        <Container fluid="md">
            <h1>Contaier</h1>
            <Row>
                <Counter />
            </Row>
        </Container>
    )
}