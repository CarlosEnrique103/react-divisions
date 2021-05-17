import { Menu, Button } from "antd";
import { BellFilled, CalendarFilled, DownOutlined } from "@ant-design/icons";
import Logo from "../images/mandü.svg";
import LogoBlack from "../images/mandü.svg";
import "./Navbar.scss";

function Navbar() {
  const { SubMenu } = Menu;
  return (
    <div className="Navbar">
      <Menu mode="horizontal">
        <Menu.Item className="logo">
          <img src={Logo} alt="Logo of Mandu" />
        </Menu.Item>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item className="active-link">Organización</Menu.Item>
        <SubMenu
          key="Divisions"
          title={
            <span className="subMenu">
              Modelos <DownOutlined />
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="Following"
          title={
            <span className="subMenu">
              Seguimiento <DownOutlined />
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item>
          <CalendarFilled />
        </Menu.Item>
        <Menu.Item>
          <BellFilled />
        </Menu.Item>
        <Menu.Item>
          <Button type="danger" shape="circle">
            A
          </Button>
        </Menu.Item>
        <SubMenu
          key="user"
          title={
            <span className="subMenu">
              Administrador <DownOutlined />
            </span>
          }
        >
          <Menu.Item key="profile:1">Profile</Menu.Item>
          <Menu.Item key="profile:2">Logout</Menu.Item>
        </SubMenu>
        <Menu.Item>
          <div className="logo-with-background">
            <img src={LogoBlack} alt="logo" />
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
