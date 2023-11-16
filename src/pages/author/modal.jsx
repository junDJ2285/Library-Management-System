import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

const Modals= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = (values) => {
    console.log(values)
    
    setIsModalOpen(false);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='model'>
      <Button type="primary" onClick={showModal}>
        Add Author
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p><Input placeholder='Author'/></p>
        <p><Input placeholder='Author Email'/></p>
        
      </Modal>
          </div>
    
  );
};

export default Modals;