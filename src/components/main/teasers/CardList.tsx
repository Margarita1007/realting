import React from "react";
import { Row, Col } from 'antd';
import CardTemplate from "./Card";
import { cards } from "./data";
import './teasers.css';
import SwitchMapList from "./SwitchMapList";

const CardList: React.FC = () => {
    return (
        <div className="card-list">
            <Row gutter={[16, 16]}>
                { cards.map((card) => (
                    <Col xs={24} sm={12} md={8} lg={12} xl={8} key={card.id}>
                        <CardTemplate {...card}/>
                    </Col>
                ))}
            </Row>
            <SwitchMapList/>
        </div>
    )
}

export default CardList;