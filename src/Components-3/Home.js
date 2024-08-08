import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style/home.css'
import {Link, Outlet} from "react-router-dom";
export function Home(){
    return(
        <>
            <Container fluid className='home-container vh-100'>
                <Row className='header'>
                    <Col sm={4} className='logo'>Logo sm=4</Col>
                    <Col className='banner' sm={8}>Banner sm=8</Col>
                </Row>
                <Row className='navbar d-flex justify-content-center'>Navbar</Row>
                <Row className='main'>
                    <Col sm={2} className='left-main'>Left col-2</Col>
                    <Col className='content-main' sm={7}>
                        <Outlet/>
                    </Col>
                    <Col className='right-main' sm={3}>Right col-3</Col>
                </Row>
            </Container>

        </>
    )
}