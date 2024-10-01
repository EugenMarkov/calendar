import { Layout, Typography, Badge, Avatar } from "antd";
import search from "../../../src/assets/icon_search.svg";
import bell from "../../../src/assets/bell.svg";
import support from "../../../src/assets/support_icon.svg";
import arrowDown from "../../../src/assets/arrow_down.svg";
import avatar from "../../../src/assets/avatar.png";

const { Header } = Layout;
const { Text } = Typography;

function MainHeader({ userName = "John Doe" }) {
  return (
    <Header
      style={{
        height: 70,
        background: "#FFF",
        lineHeight: "normal",
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={search} alt="search icon" />
        <Text style={{ fontSize: 13, marginLeft: 10 }}>Search transactions, invoices or help</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={support} alt="support icon" style={{ marginRight: 30 }} />
        <Badge dot={true} color="#FFC06A">
          <img src={bell} alt="bell icon" />
        </Badge>
        <span style={{ height: 28, width: 1, backgroundColor: "#EBEBF2", margin: "0 13px" }} />

        <Text style={{ fontSize: 13, marginRight: 15 }}>{userName}</Text>
        <img src={arrowDown} alt="arrow down icon" style={{ marginRight: 15 }} />
        <Avatar src={avatar} size={38} />
      </div>
    </Header>
  );
}

export default MainHeader;
