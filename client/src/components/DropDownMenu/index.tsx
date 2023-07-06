import React from 'react'
import { Select } from 'antd';
import { DropMenuProps } from '../../utils'
const languages = [
    'English', 'Arabic', 'French'
]
function Menu({ name, setLanguage }: DropMenuProps) {

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