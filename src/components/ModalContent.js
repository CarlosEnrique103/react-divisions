import { useState } from 'react'
import {  Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
function ModalContent({children, division, visible}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="Modal">
      <Button type="primary" size="small" shape="circle" icon={<PlusOutlined />} onClick={showModal}>
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </div>
  )
}

export default ModalContent;