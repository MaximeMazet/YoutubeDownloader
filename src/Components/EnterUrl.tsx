import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './Button'

export interface EnterUrlProps {
    handleChange: Function,
    onClick: Function,
    url: string,
    valid: boolean
}


export const EnterUrl = ({handleChange, url, valid, onClick} : EnterUrlProps) => {
    const {t} = useTranslation()
    return(
        <section id="section-user-space">
            <article id="article-user-space">
                <label>{t('_INPUT_URL')}</label>
                <input value={url} name="url" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} />
                <Button onClick={() => onClick()} disabled={!valid} text="_BUTTON_DOWNLOAD" title={valid ? '_CLICK_TO_DOWNLOAD' : '_LINK_INVALID'} className="valid-url-button" />
            </article>
        </section>
    )
}