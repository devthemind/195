import React, { useState } from 'react';
import { Row, Col, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink,
    CardDeck, Card, CardBody } from 'reactstrap';

function Body() {
    const [firstDropdownOpen, firstSetDropdownOpen] = useState(false);
    const [secondDropdownOpen, secondSetDropdownOpen] = useState(false);

    const first_toggle = () => firstSetDropdownOpen(!firstDropdownOpen);
    const second_toggle = () => secondSetDropdownOpen(!secondDropdownOpen);

    const items = [
        {
            titleType: "single",
            mainTitle: "معرفی سامانه"
        },
        {
            titleType: "menu",
            mainTitle: "قوانین و مقررات",
            subTitle: ["مصوبات", "تعهدات اپراتوری"]
        },
        {
            titleType: "single",
            mainTitle: "پرسش های متداول"
        },
        {
            titleType: "menu",
            mainTitle: "ارتباط با ما",
            subTitle: ["درباره ما", "تماس با ما"]
        }
    ]

    return(
        <Row className="body-content">
            <Col lg="2"></Col>
            <Col lg="8">
                <Row>
                    <Col lg="6" className="body-header-container">
                        {/* <Nav>
                            <NavItem>
                                <NavLink href="#">معرفی سامانه</NavLink>
                            </NavItem>
                            <Dropdown nav isOpen={firstDropdownOpen} toggle={first_toggle}>
                            <DropdownToggle nav caret>
                                قوانین و مقررات
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="rtl-text">مصوبات</DropdownItem>
                                <DropdownItem className="rtl-text">تعهدات اپراتوری</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink href="#">پرسش های متداول</NavLink>
                            </NavItem>
                            <Dropdown nav isOpen={secondDropdownOpen} toggle={second_toggle}>
                            <DropdownToggle nav caret>
                                ارتباط با ما
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="rtl-text">درباره ما</DropdownItem>
                                <DropdownItem className="rtl-text">تماس با ما</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </Nav> */}
                        <Nav>
                            {items.map(item => {
                                item.titleType === "single" ?
                                <NavItem>
                                    <NavLink href="#">{item.mainTitle}</NavLink>
                                </NavItem>
                                :
                                <Dropdown nav isOpen={firstDropdownOpen} toggle={first_toggle}>
                                    <DropdownToggle nav caret>{item.mainTitle}</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem className="rtl-text">{item.subTitle}</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            })}
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col lg="9">
                        <p class="rtl-text text-justify body-upper-cointainer-text">
                            سامانه الکترونیکی رسیدگی به شکایات وزارت ارتباطات وفناوری
                            اطلاعات در اجرای ماده 25 قانون ارتقای نظام سلامت اداری و مقابله
                            با فساد ودر راستای افزایش رضایت مشتریان زیرمجموعه های وزارت
                            ارتباطات و فناوری اطلاعات از طریق ارتباط با مشترکین نهایی راه
                            اندازی گردیده است. کلیه مشترکین و همکاران گرامی می توانند شکایت
                            خود را در خصوص خدمات ارائه شده زیرمجموعه های این وزارتخانه،
                            سازمان ها و شرکت های ذیربط دارای مشترک و کاربر نهایی با استفاده
                            از لینک های موجود در این صفحه ثبت نموده و دفاتر/اداره کل بازرسی
                            شرکت های وسازمان های تابعه مسئولیت پاسخگویی و رسیدگی به این
                            شکایات را به عهده دارند.
                        </p>
                    </Col>
                    <Col lg="3" className="body-upper-cointainer-image">
                        <img src={require('../assets/images/body-pic.png')}></img>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="container-fluid-body">
                        <CardDeck>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title rtl-text">ثبت شکایت</h5>
                                    <p className="card-text rtl-text card-text text-justify">
                                        طرح شکایت یا درخواست از اپراتورهای ارتباطی، فناوری
                                        اطلاعات، رادیویی و پست و پیشخوان
                                    </p>
                                    <div class="middle-pos-button">
                                        <button type="button" class="btn btn-outline-secondary">
                                            ثبت شکایت
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title rtl-text">پیگیری شکایت</h5>
                                    <p className="card-text rtl-text card-text text-justify">
                                        پیگیری شکایت ثبت شده و مشاهده وضعیت جاری آن
                                    </p>
                                    <div class="middle-pos-button">
                                        <button type="button" class="btn btn-outline-secondary">
                                            پیگیری شکایت
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title rtl-text">راهنما</h5>
                                    <p className="card-text rtl-text card-text text-justify">
                                        مشاهده راهنمای سامانه و دستورالعمل های نظارتی
                                    </p>
                                    <div class="middle-pos-button">
                                        <button type="button" class="btn btn-outline-secondary">
                                            مشاهده راهنما
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="2">
                        <div class="icon-text">
                            <i class="fas fa-hourglass-start fa-5x"></i>
                            <p class="icon-container-text">
                                پاسخگویی در سریع ترین زمان
                            </p>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div class="icon-text">
                            <i class="fas fa-smile fa-5x"></i>
                            <p class="icon-container-text">
                                رضایت مندی مشترکین
                        </p>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div class="icon-text">
                            <i class="fas fa-gavel fa-5x"></i>
                            <p class="icon-container-text">
                                اعمال مقررات درخصوص تخلفات
                            </p>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div class="icon-text">
                            <i class="fas fa-search fa-5x"></i>
                            <p class="icon-container-text">
                                نظارت دقیق تر بر اپراتورها
                            </p>
                        </div>
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </Col>
            <Col lg="2"></Col>
        </Row>
    )
};

export default Body;