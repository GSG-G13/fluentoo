import React, { useState } from 'react'
import axios from 'axios';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps, UploadChangeParam } from 'antd/es/upload/interface';
import { Upload } from 'antd'
import { UploadImageProps } from '../../utils'
function UploadImage({ avatar, setAvatar }: UploadImageProps) {
    const [loading, setLoading] = useState(false);
    const handleChange: UploadProps['onChange'] = async (info: UploadChangeParam<UploadFile>) => {
        const data = await axios.get('/api/s3url')
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            setLoading(false);
        }
        await axios.put(data.data, info.file.originFileObj, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        const imageUrl = data.data.split('?')[0]
        setAvatar(imageUrl)
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            onChange={handleChange}
            accept={"image/jpeg, image/png"}
        >
            {avatar ? <img src={avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : uploadButton}
        </Upload>
    )
}

export default UploadImage