import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import Logo from "../assets/img/logo.png"

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { Coin } from "../types";
interface Iprops {
  simplified?: boolean;
}
const Cryptocurrencies = ({ simplified }: Iprops) => {
  const count = simplified ? 10 : 100;
  
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<Coin[] | undefined>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="flex-center-col ">
          <Typography.Title>Search</Typography.Title>
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="mb-2 w-[25%] "
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="min-w-[200px] w-48 h-40" src={currency.iconUrl ? currency.iconUrl : Logo} />}
                hoverable
              >
                <p>Price: {millify(+currency?.price)}</p>
                <p>Market Cap: {millify(+currency?.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
