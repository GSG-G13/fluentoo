import React from 'react'
import { Select } from 'antd';
import { QuizDropMenuProps } from '../../utils'

function Menu({ languages, setLanguage }: QuizDropMenuProps) {
    return (
        <>
            <Select
                onChange={(value) => setLanguage(value)}
                defaultValue={`${languages[0][0].toUpperCase()}${languages[0].slice(1).toLowerCase()}`}
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