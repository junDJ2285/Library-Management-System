// import React, { useState } from 'react';
// import { Button, Form, Input, Modal } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';

// const Authors= () => {
//     const dispatch = useDispatch()
//     const authorlist = useSelector((s)=> s.Authors)
// const onFinish = (values) => {
//     console.log('Success:', values);
//     dispatch()
    
//   };
  
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
  

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };


//   const handleCancel = () => {
//       setIsModalOpen(false);
//   };

//   return (
//     <div className='model'>
//        <div>
//         <button>Authors</button>
//        <Button type="primary" onClick={showModal}>
//         Add Author
//       </Button>
//        </div>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
//        <Form
//     name="basic"
//     labelCol={{ span: 8 }}
//     wrapperCol={{ span: 16 }}
//     style={{ maxWidth: 600 }}
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[{ required: true, message: 'Please input your username!' }]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
        
//       </Modal>
//           </div>
    
//   );
// };

// export default Authors;