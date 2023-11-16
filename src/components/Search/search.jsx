import React from 'react';
import { Input } from 'antd';
import "./search.css"

const { Search } = Input;

const Searching= () => (
  <>
    <Search className='search' type='black' placeholder="input search text" enterButton="Search" size="large" />
  </>
);

export default Searching;