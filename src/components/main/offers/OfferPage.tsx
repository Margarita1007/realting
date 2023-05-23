import { Col, Row  } from "antd";
import React from "react";
import './offers.css';
import Object from "./Object";
import MapOffer from "./MapOffer";
import FeedbackForm from "./FeedbackForm";


const OfferPage: React.FC = () => {
    return (
        <div className="offer-page-container">
            <Row justify={'space-between'} className="offer-page-title">
                <Col>
                    <h1>Квартира 1 спальня 50 м² в Каргыджак, Турция</h1>
                </Col>
                <Col className="price">
                    $ 230,000
                </Col>
            </Row>
            <Row gutter={30}>
                <Col span={16}>
                    <Object/>
                    <div className="map-offer-container">
                        <h3>Местоположение</h3>
                        <MapOffer/>
                    </div>
                </Col>
                <Col span={8}>
                    <FeedbackForm/>
                </Col>
            </Row>
        </div>
    )
}

export default OfferPage;