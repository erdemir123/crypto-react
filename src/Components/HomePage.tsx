import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Typography, Row, Col, Statistic } from "antd";
import Loader from "./Loader";
import millify from "millify";

import { Link } from 'react-router-dom'; 
import Cryptocurrencies from "./Cryptocurrencies";
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const { Title } = Typography;
  const globalStats:any = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="md:mt-4">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="flex justify-between items-center mt-10">
        <Title level={2} className="font-bold">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies  />
      <div className="flex justify-between  items-center border-t-2 border-slate-500gap-2">
        <Title level={2} className="font-bold">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      {/* <News simplified /> */}
    </>
  );
};

export default HomePage;
