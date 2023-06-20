import React from "react";
import { Row, Col } from 'antd';
import CardTemplate from "./Card";
import '../teasers.css';
import SwitchMapList from "../SwitchMapList";
import { useAppSelector } from "../../../../app/hooks";

const CardList: React.FC = () => {
    const offers = useAppSelector(state => state.offers.offers);
    const filtersoff = useAppSelector(state => state.offers.filter);
    const cards = filtersoff.length ? filtersoff : offers;
    return (
        <div className="card-list">
            <div className="card-list_found">
                {cards.length} объектов найдено
            </div>
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