import { Tabs, Button } from 'antd';
import { PlusOutlined, VerticalAlignTopOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import TableContent from './TableContent';
import './Header.scss';

function Header() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="Header">
      <div className="Header-title">
        <h2>Organización</h2>
        <div className="Header-buttons">
          <Button type="primary" size="middle" icon={<PlusOutlined /> }/>
          <Button  size="middle" icon={<VerticalAlignTopOutlined />}  />
          <Button  size="middle" icon={<VerticalAlignBottomOutlined />}  />
        </div>
      </div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Divisiones" key="1">
          <TableContent />
        </TabPane>
        <TabPane tab="Collaboradores" key="2">
          Liste de  colaboradores
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Header;
