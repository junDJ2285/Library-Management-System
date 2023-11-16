import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import "./book.css"
import { addBooks, updateBooks,deleteBook } from '../../store/libraryreducer';


const Books = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    const bookslist = useSelector((s) => s.books)

    // console.log(bookslist)
    const onFinish = (values) => {
        // console.log('Success:', values);
        if(values.id){

            dispatch(updateBooks(values))
        }else{
            
            dispatch(addBooks(values))
        }
        setIsModalOpen(false)

    };
    const showModal = () => {
        setIsModalOpen(true);
    };


    const handleCancel = () => {
        setIsModalOpen(false);

    };
    const ondelete =  (id)=>{
       dispatch(deleteBook(id))
    }
    
const onEdit = (values)=>{
    showModal(true)
    
    // dispatch(updateBooks(values))
}
    return (
        <div className='model'>
            <div className='books-head'>
                <button>Books</button>
                <Button type="primary" onClick={showModal}>
                    Add Books
                </Button>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="on"
                >
                    <Form.Item
                        label="Title"
                        name="Title"
                        rules={[{ required: true, message: 'Please input your Book Name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Author"
                        name="Author"
                        rules={[{ required: true, message: 'Please input your Author name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Shelves"
                        name="Shelves"
                        rules={[{ required: true, message: 'Please input your Author name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
            <div>
                <div className='todo-container'>

                    {bookslist.map((t) => {
                        return <div key={t.id} className='todo-card'>
                            <div className='todo-card-left'>
                                <p>Book :{t.Title}</p>
                                <p> Author:{t.Author}</p>
                                <p> Shelves{t.Shelves}</p>
                                <p> id {t.id}</p>
                            </div>

                            <div className='todo-card-right'>
                                <Button type="primary" onClick={()=>onEdit(t.id, t)}>
                                    Edit
                                </Button>
                                <Button type="primary" onClick={()=> ondelete(t.id)} >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    })}



                </div>
            </div>
        </div>

    );
};

export default Books;