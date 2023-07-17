import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import axios from "axios"
import { DropMenuProps } from '../../utils'

function Options({ placeholder, onchange }: DropMenuProps) {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        const getLanguages: any = async () => {
            const response = await axios.get('/api/languages');
            const lang = response.data.data.map((obj: { name: string; }) => obj.name);
            setLanguages(lang)
        }
        getLanguages();
    }, [])
    return (
        <Select mode='multiple' placeholder={placeholder} onChange={onchange}>
            {languages.map((lang, i) => <Select.Option value={lang} key={i}>{lang}</Select.Option>)}

        </Select>
    )
}

export default Options