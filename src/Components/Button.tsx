import React from 'react'
import { useTranslation } from 'react-i18next'

import './Button.scss'

export interface ButtonProps {
    text: string,
    title: string,
    className: string,
    disabled: boolean,
    onClick: Function
}

export const Button = ({text, title, className, disabled, onClick} : ButtonProps) => {
    const {t} = useTranslation()

    return(
        <button onClick={() => onClick()} className={className} title={t(title)} disabled={disabled}>{t(text)}</button>
    )

}