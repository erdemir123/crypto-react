import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import icon from "../assets/img/logo.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { navTabs } from "../tabs/navTabs";
import { InavTabs } from "../types";
interface Iprops {
  activeMenu: boolean;
  setActiveMenu: (activeMenu: boolean) => void;
  screenSize:number
}

const Navbar = ({ activeMenu, setActiveMenu,screenSize }: Iprops) => {
  return (
    <>
      {(activeMenu) && (
        <div className={`${screenSize > 800 && "  flex  justify-start flex-col w-[300px] h-screen bg-slate-500 z-index-50"} ${screenSize < 800 && "flex  justify-center flex-col w-[100vw] h-screen bg-slate-500 "} bg-[rgb(0, 21, 41)]`}>
          <div
            className="flex justify-start"
          >
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo text-black">
              <Link to="/" className="text-slate-500">Cryptoverse</Link>
            </Typography.Title>
          </div>
          <div className="flex-1 w-full h-full flex gap-4 flex-col mt-20">
            
              {navTabs.map((item: InavTabs, index) => (
                <div className="text-white flex justify-start items-center  text-2xl gap-2">
                  <item.icon className="text-2xl"/>
                  <Link to={`/${item.name}`} className="text-decoration-none text-white mt-2 " onClick={()=>`${screenSize < 800 && setActiveMenu(!activeMenu)}`}>{item.name}</Link>
                </div>
              ))}
            
          </div>
        </div>
      )}
      <Button
          className="fixed top-2 right-2 bg-slate-500 z-50"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined className="text-white"/>
        </Button>
    </>
  );
};

export default Navbar;
