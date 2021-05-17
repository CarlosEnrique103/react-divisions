import { useState } from 'react'
import {  Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { fetchDivisions } from '../features/division/divisionSlice';
function ModalContent({children, title="Basic Model"}) {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(fetchDivisions());
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="Modal">
      <Button type="primary" size="small" shape="circle" icon={<PlusOutlined />} onClick={showModal}>
      </Button>
      <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </div>
  )
}

export default ModalContent;