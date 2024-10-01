import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout, Menu, Typography } from "antd";
import { ROUTER_PATHS } from "../../routes/router-paths.js";
import home from "../../../src/assets/home.svg";
import calendar from "../../../src/assets/calendar.svg";

const { Sider } = Layout;
const { Text } = Typography;

const menuItems = [
  { label: <Link to={ROUTER_PATHS.home}>Home</Link>, key: ROUTER_PATHS.home, icon: <img src={home} alt="home icon" /> },
  {
    label: <Link to={ROUTER_PATHS.calendar}>Calendar</Link>,
    key: ROUTER_PATHS.calendar,
    icon: <img src={calendar} alt="calendar icon" />,
  },
];

const linkPathExtractor = array => {
  return array.filter(item => location.pathname.includes(item.key)).map(linkObject => linkObject.key);
};

function SideMenu() {
  const [selectedItems, setSelectedItem] = useState(() => linkPathExtractor(menuItems));
  const onClickMenu = ({ key }) => {
    setSelectedItem([key]);
  };

  useEffect(() => {
    if (!!linkPathExtractor(menuItems).length && location.pathname !== selectedItems[0]) {
      setSelectedItem([]);
    }
  }, [location.pathname]);

  return (
    <Sider width={260}>
      <div style={{ height: 70, display: "flex", alignItems: "center", padding: 20, background: "#4D4F5C" }}>
        <Text style={{ color: "#fff", fontWeight: 700 }}>IMPEKABLE</Text>
      </div>
      <Menu theme="dark" selectedKeys={selectedItems} mode="inline" items={menuItems} onClick={onClickMenu} />
    </Sider>
  );
}

export default SideMenu;
