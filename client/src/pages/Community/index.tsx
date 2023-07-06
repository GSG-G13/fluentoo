import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Menu, UserCard } from '../../components';
import { Pagination } from 'antd';
import axios from 'axios';
import './style.modules.css'
import { Empty } from 'antd';
function Community() {
  const [name, setName] = useState<string>('')
  const [spokenLanguages, setSpokenLanguages] = useState<string>('')
  const [practiceLanguages, setPracticeLanguages] = useState<string>('')
  const [data, setData] = useState<Array<Object>>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8)
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPosts = data.slice(indexOfFirstUser, indexOfLastUser);




  const onchange = (page: any) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response =
        await axios.get(`/api/v1/search?name=${name}&spokenLanguages=${spokenLanguages}&practiceLanguages=${practiceLanguages}`);
      setData(response.data.data)
      setCurrentPage(1)
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
      <div className='community-cards'>
        {currentPosts.length ? currentPosts.map((user, index) =>
          <UserCard data={user} key={index} />
        ) : <Empty className='not-found' description={'user not found'} />}

      </div>
      <div className='pagination'>
        <Pagination defaultCurrent={currentPage} defaultPageSize={usersPerPage} total={data.length} onChange={onchange} />
      </div>

    </div>
  )
}

export default Community