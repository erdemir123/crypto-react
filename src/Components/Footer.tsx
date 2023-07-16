import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#001529] flex flex-col p-5 items-center sticky bottom-0 left-0">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2021
        <Link to="/">Cryptoverse Inc.</Link> <br />
        All Rights Reserved.
         <br />
        <a href="https://www.linkedin.com/in/sad%C4%B1k-erdemir/" target="_blank">@Sadık ERDEMİR</a>
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
