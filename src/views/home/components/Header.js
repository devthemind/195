import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';


function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <Container fluid={true}>
            <Row id="header" className="fixed-top">
                <Col lg="8">
                    <Row>
                        <Col lg="2" md="4" sm="1" className="header-image">
                            <img src={require('../assets/images/cra-logo.svg')} />
                        </Col>
                        <Col lg="8" md="6" sm="9" >
                            <p className="rtl-text text-nowrap header-text">سامانه ثبت و پاسخگویی به شکایات 195</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg="4">
                    <Row>
                        <Col lg="5">
                        </Col>
                        <Col lg="7" md="2" sm="2">
                            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary py-0">
                                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                                <Collapse isOpen={!collapsed} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink href="login.html">ورود</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/">ثبت نام</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Header;