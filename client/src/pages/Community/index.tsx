import React, { useEffect, useState } from 'react'
import { Input, Pagination, Empty } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { UserCard, Options } from '../../components';
import axios from 'axios';
import './style.modules.css'
import { useAuthContext } from '../../context/AuthContext';
function Community() {
  const { user } = useAuthContext();
  const [name, setName] = useState<string>('')
  const [spokenLanguages, setSpokenLanguages] = useState<string>('')
  const [practiceLanguages, setPracticeLanguages] = useState<string>('')
  const [data, setData] = useState<Array<Object>>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8)
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPosts = data.slice(indexOfFirstUser, indexOfLastUser);
  const loggedInUserId = user.userId;

  const onchange = (page: any) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response =
        await axios.get(`/api/search?name=${name}&spokenLanguages=${spokenLanguages}&practiceLanguages=${practiceLanguages}`);
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
          <Options onchange={(value: string) => setSpokenLanguages(value)
          } placeholder={'Spoken languages'} />
          <Options onchange={(value: string) => setPracticeLanguages(value)
          } placeholder={'Practice languages'} />
        </div>
      </div>
      <div className='community-cards'>
        {currentPosts.length ? (
          currentPosts
            .filter((user) => user.id !== loggedInUserId) 
            .map((user, index) => <UserCard data={user} key={index} />)
        ) : <Empty className='not-found' description={'user not found'} />}

      </div>
      <div className='pagination'>
        <Pagination defaultCurrent={currentPage} defaultPageSize={usersPerPage} total={data.length} onChange={onchange} />
      </div>
    </div>
  )
}

export default Community