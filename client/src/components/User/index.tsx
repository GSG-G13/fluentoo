import React from 'react'
import { Image } from 'antd';
import { UserObjectType, UserComponentPropsType } from '../../utils';

function User({ user, isOnline, selectedUser, setSelectedUser }: UserComponentPropsType) {
    const { userId, userName }: UserObjectType = user;
    let onlineClass = '';
    if (isOnline) {
        onlineClass = 'online';
    }

    return (
        <div className={selectedUser.userId === userId ? `user active ${onlineClass}` : `user ${onlineClass}`} onClick={() => setSelectedUser({ userId: user.userId, userName: user.userName })}>
            <Image
                src='https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?pid=ImgDet&rs=1'
                width={50}
                height={50}
                preview={false}
                alt='user'
            />
            <div>
                <h3>{userName}</h3>
            </div>
        </div>
    )
}

export default User