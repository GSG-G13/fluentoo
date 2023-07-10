import React from 'react'
import { Select } from 'antd';
import { DropMenuProps } from '../../utils'

function Menu({ languages, selectMode, name, setLanguage }: DropMenuProps) {
    return (
        <>
            <Select
                {...(selectMode ? { mode: selectMode } : {})}
                onChange={(value) => setLanguage(value)}
                defaultValue={`${languages[0][0].toUpperCase()}${languages[0].slice(1).toLowerCase()}`}
                placeholder={`${name}`}
            >
                {languages?.map((language, i) => (
                    <Select.Option
                        key={i}
                        value={`${language.toLowerCase()}`}
                    >
                        {`${language[0].toUpperCase()}${language.slice(1).toLowerCase()}`}
                    </Select.Option>
                ))}
            </Select>
        </>
    )
}

export default Menu