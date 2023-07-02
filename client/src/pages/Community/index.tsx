import React, { useEffect, useState } from 'react'
import { Col, Row, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import UserCard from '../../components/Card';
import Menu from '../../components/DropDownMenu';
import axios from 'axios';
import './style.modules.css'


function Community() {
  const [name, setName] = useState<string>('')
  const [spokenLanguages, setSpokenLanguages] = useState<string>('')
  const [practiceLanguages, setPracticeLanguages] = useState<string>('')
  const [data, setData] = useState<Array<Object>>([])
  useEffect(() => {
    const fetchData = async () => {
      const response =
        await axios.get(`/api/v1/search?name=${name}&spokenLanguages=${spokenLanguages}&practiceLanguages=${practiceLanguages}`);
      setData(response.data.data)
    }
    fetchData();
  }, [name, spokenLanguages, practiceLanguages])

  return (
    <div className='community'>
      <div className='header'>
        <Input size="large" placeholder="search for a friend" prefix={<SearchOutlined />}
          onChange={(e) => setName(e.target.value)} />
        <div className='filter'>
          <Menu name={'native language'} setLanguage={setSpokenLanguages} />
          <Menu name={'practice language'} setLanguage={setPracticeLanguages} />
        </div>

      </div>
      <Row gutter={16} >
        {data.map((user) =>
          <UserCard data={user} />
        )}

      </Row>
    </div>
  )
}

export default Community