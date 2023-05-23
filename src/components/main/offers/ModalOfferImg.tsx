import React, { useRef } from "react";
import './modal.css';
import { ArrowLeftOutlined, ArrowRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Carousel } from "antd";
import { useParams } from "react-router-dom";
import { cards } from "../teasers/data";
import img1 from '../../../assets/img/img1.jpg';
import img2 from '../../../assets/img/img2.jpg';
import img3 from '../../../assets/img/img3.jpg';

interface ChildProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SampleNextArrow: React.FC<any> = (props: any) => {
    const { className, style, onClick } = props
    return (
        <ArrowRightOutlined
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
        />
    )
}  

const SamplePrevArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props
    return (
      <ArrowLeftOutlined
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    )
  }
  
const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

const ModalOfferImg: React.FC<ChildProps> = ( {setShowModal}) => {
    let refCarousel = useRef(null);

    function closeModal() {
        document.body.style.overflow = "visible";
        setShowModal(false);
    }

    const { id } = useParams();
    const obj = cards.find((card) => card.id === id);
    if (obj) {
        const leafEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
        console.log(refCarousel)
        }

        return (
            <div className="modal-offer">
                <CloseCircleOutlined className="modal-close" onClick={closeModal}/>
                <div className="offer-carousel" onKeyDown={(e) => leafEvent(e)}>
                    <Carousel 
                        // ref={refCarousel.current} 
                        arrows 
                        {...settings}
                        // nextArrow={<ArrowRightOutlined />} 
                        // prevArrow={<ArrowLeftOutlined/>}
                    >
                        <img src={obj.img} alt="img1"/>
                        <img src={img1} alt="img1"/>
                        <img src={img2} alt="img1"/>
                        <img src={img3} alt="img1"/>
                    </Carousel>
                </div>
                
            </div>
        )
    } else {
        return (
            <div>Not found</div>
        )
    }
    
}

export default ModalOfferImg;