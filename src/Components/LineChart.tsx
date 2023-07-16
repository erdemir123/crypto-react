import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { ChartOptions } from 'chart.js';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'; 

interface Iprops{
    coinHistory:any
    currentPrice:any
    coinName:string
}




const LineChart = ({ coinHistory, currentPrice, coinName }:Iprops) => {
  const coinPrice = [];
  const coinTimestamp = [];
  const { Title } = Typography;
  Chart.register(CategoryScale);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options:ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'category' as 'category',
      }
    }
  };
  


  return (
    <>
      <Row className="flex justify-between px-2 text-slate-400 font-bold">
        <Title level={2} className="">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line  data={data}  options={options}/>
    </>
  );
};

export default LineChart;