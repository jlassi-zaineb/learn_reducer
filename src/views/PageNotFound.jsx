import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function PageNotFound() {
    return (
        <Container>
            <Row className="PageNotFound text-center mt-5" >
                <Col><h1>404 Page not found !</h1></Col>
            </Row>
            <Row className="text-center" >
                <Col><img src="/assets/img/404.png" alt="error" style={{ width: 'auto', height: '300px' }} /></Col>
            </Row>
        </Container>
    )
}
