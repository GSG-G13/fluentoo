import React, { useEffect, useState } from 'react'
import { Col, Row, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UserCard from '../../components/Card';
import axios from 'axios';
import './style.modules.css'
import Menu from '../../components/DropDownMenu';
function Community() {
  const [name, setName] = useState('')
  const [spokenLanguages, setSpokenLanguages] = useState('')
  const [practiceLanguages, setPracticeLanguages] = useState('')
  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/v1/search?name=${name}&spokenLanguages=${'French'}&practiceLanguages=${'Spanish'}`);
      setData(response.data.data)

    }

    fetchData();
  }, [name])

  return (
    <div className='community'>
      <div className='header'>
        <Input size="large" placeholder="large size" prefix={<SearchOutlined />} onChange={(e) => setName(e.target.value)} />
        <Menu />
      </div>
      <Row gutter={16} >
        <Col xs={24} sm={16} md={12} lg={7} xl={8}>
          {data.map((user)=><UserCard data={user}/>)}
          
        </Col>
      </Row>
    </div>
  )
}

export default Community