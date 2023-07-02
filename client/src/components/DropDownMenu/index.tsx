import React from 'react'
import { Select } from 'antd';
const languages = [
    'English', 'Arabic', 'French'
]
function Menu({ name, setLanguage }: any) {

    return (
        <>
            <Select mode='multiple' onChange={(value) => setLanguage(value)
            } placeholder={`${name}`} >
                {languages.map((language) => <Select.Option value={`${language}`}>{language}</Select.Option>)}
            </Select>
        </>
    )
}

export default Menu