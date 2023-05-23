import { Layout, Space, Row, Col } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "../teasers/data";
import img1 from '../../../assets/img/img1.jpg';
import img2 from '../../../assets/img/img2.jpg';
import img3 from '../../../assets/img/img3.jpg';
import ModalOfferImg from "./ModalOfferImg";

//import img4 from '../../../assets/img/img4.jpg';

const Object: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const { id } = useParams();
    const obj = cards.find((card) => card.id === id);

    function openModal() {
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    if (obj) {
        return (
            <Layout className="object">
                {showModal ? <ModalOfferImg setShowModal={setShowModal}/> : <></>}
                <div className="image-gallery" onClick={openModal}>
                    <div className="primary-image">
                        <div style={{position: 'relative'}}>
                            <img src={obj.img} alt="obj-img" style={{width: '100%'}}/>
                        </div>
                    </div>
                    <div className="secondary-image">
                        <div style={{backgroundImage: `url(${img1})`}}></div>
                        <div style={{backgroundImage:  `url(${img2})`}}></div>
                        <div style={{backgroundImage: `url(${img3})`}}></div>
                    </div>
                    <div>
    
                    </div>
                    <div id="gallery" hidden/>
                </div>

                <Space direction="vertical" className="object-params">
                    <div className="location param">
                        <h3>Местонахождение</h3>
                        <Row>
                            <Col span={12}>
                                <span>Страна:</span>
                                Турция
                            </Col>
                            <Col span={12}>
                                <span>Район:</span>
                                Алания
                            </Col>
                            <Col span={12}>
                                <span>Адрес:</span>
                                Gazipaza Cd
                            </Col>
                            <Col span={12}>
                                <span>Область/штат:</span>
                                Средиземноморский район
                            </Col>
                            <Col span={12}>
                                <span>Деревня:</span>
                                Каргыджак
                            </Col>
                        </Row>        
                    </div>

                    <div className="build param">
                        <h3>Параметры здания</h3>
                        <Row>
                            <Col span={12}>
                                <span>Год сдачи:</span>
                                2024
                            </Col>
                            <Col span={12}>
                                <span>Количество этажей:</span>
                                6
                            </Col>
                        </Row>
                    </div>

                    <div className="apart param">
                        <h3>Параметры квартиры</h3>
                        <Row>
                            <Col span={12}>
                                <span>Этаж:</span>
                                6
                            </Col>
                            <Col span={12}>
                                <span>Количество спален:</span>
                                1
                            </Col>
                            <Col span={12}>
                                <span>Общая площадь:</span>
                                50 м²
                            </Col>
                            <Col span={12}>
                                <span>Количество комнат:</span>
                                2
                            </Col>
                            <Col span={12}>
                                <span>Количество ванных:</span>
                                1
                            </Col>
                        </Row>
                    </div>

                    <div className="description param">
                        <h3>Описание</h3>
                        <Row>
                            <Col span={24} className="summary">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Excepturi id adipisci earum numquam impedit error 
                                    itaque rerum voluptatibus ullam sunt aliquid dolor, 
                                    totam enim consectetur esse eos provident suscipit ipsum.
                                    
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Excepturi id adipisci earum numquam impedit error 
                                    itaque rerum voluptatibus ullam sunt aliquid dolor, 
                                    totam enim consectetur esse eos provident suscipit ipsum.
                                </p>
                                <span className="readmore">Узнать больше</span>
                            </Col>
                        </Row>
                    </div>
                    <div className="additional param">
                            <h3>Дополнительно</h3>
                            <Row>
                                <Col span={8} className="param-add">
                                    Мебель
                                </Col>
                                <Col span={8} className="param-add">
                                    Кондиционер
                                </Col>
                                <Col span={8} className="param-add">
                                    Ремонт
                                </Col>
                                <Col span={8} className="param-add">
                                    Видеонаблюдение
                                </Col>
                                <Col span={8} className="param-add">
                                    Стеклопакеты
                                </Col>
                                <Col span={8} className="param-add">
                                    Консьерж
                                </Col>
                                <Col span={8} className="param-add">
                                    Лифт
                                </Col>
                                <Col span={8} className="param-add">
                                    Бытовая техника
                                </Col>
                                <Col span={8} className="param-add">
                                    Балкон
                                </Col>
                            </Row>

                        </div>

                </Space>
    
            </Layout>
        )
    } else {
        return (
            <div>Упс, не найдено</div>
        )
    }
    
}

export default Object;