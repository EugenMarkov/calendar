import { BrowserRouter } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import { theme } from "./styles/theme.js";
import { MainRoutes } from "../src/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <Layout style={{ minHeight: "100vh", width: "100%" }}>
          <MainRoutes />
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
