import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import Filters from './filters/Filters';
import CardList from './cards/CardList';
import axios from 'axios';

const ContentContainer: React.FC = () => {
    const [data, setData] = useState();
    useEffect(() => {
        console.log(data)
    }, [data])
    axios
        .get("https://us-central1-aisales-bot-vieoxe.cloudfunctions.net/property-api", {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"

              }
        })
        .then((resp) => {
            const dataresp = resp.data;
            setData(dataresp);
        })
        .catch((error) => console.error(error))
    return (
        <Layout className='catalog-left'>
            <Filters/>
            <CardList/>
        </Layout>
    )
}

export default ContentContainer;