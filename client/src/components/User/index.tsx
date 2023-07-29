import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { UserObjectType, UserComponentPropsType } from '../../utils';
import axios from 'axios';

function User({ user, isOnline, selectedUser, setSelectedUser }: UserComponentPropsType) {
    const { userId, userName }: UserObjectType = user;
    const [userImage, setUserImage] = useState<string>('https://scihospital.com/public/assets/images/doctors/user.png')

    let onlineClass = '';
    if (isOnline) {
        onlineClass = 'online';
    }

    useEffect(() => {
        (async function () {
            const { data: contactData } = await axios.get(`/api/profile/${user.userId}`);
            if (contactData.data.avatar) {
                setUserImage(contactData.data.avatar);
            }
        })()
    })

    return (
        <div className={selectedUser.userId === userId ? `user active ${onlineClass}` : `user ${onlineClass}`} onClick={() => setSelectedUser({ userId: user.userId, userName: user.userName, avatar: userImage })}>
            <Link to={`/profile/${user.userId}`}>
                <Image
                    src={userImage}
                    width={50}
                    height={50}
                    preview={false}
                    style={{ borderRadius: '50%', objectFit: 'contain' }}
                    alt='user'
                />
            </Link>
            <div>
                <h3>{userName}</h3>
            </div>
        </div>
    )
}

export default User