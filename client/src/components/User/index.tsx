import React from 'react'
interface OnlineUsersObjectType {
    userId: number;
    userName: string;
}
interface SetSelectedUserType {
    user: OnlineUsersObjectType;
    selectedUser: OnlineUsersObjectType;
    setSelectedUser: (selectedUser: OnlineUsersObjectType) => void;
}

function User({ user, selectedUser, setSelectedUser }: SetSelectedUserType) {
    const { userId, userName }: OnlineUsersObjectType = user;

    return (
        <div className={selectedUser.userId === userId ? "user active" : "user"} onClick={() => setSelectedUser({ userId: user.userId, userName: user.userName })}>
            <img src='https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?pid=ImgDet&rs=1' width={50} height={50} />
            <div>
                <h3>{userName}</h3>
                <p>Online</p>
            </div>
        </div>
    )
}

export default User