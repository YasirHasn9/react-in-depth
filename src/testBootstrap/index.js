import {Container , Row , Col} from "react-bootstrap"
import "./style.css"

export const PlayingWithBootstrap = () => {
    return (
        <Container fluid="md" className="test">
            <h1>Contaier</h1>
            <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
            </Row>
        </Container>
    )
}