import React from 'react'
import { useTranslation } from 'react-i18next'
import { Media } from '../Types/Media'

import './Choice.scss'
import { Button } from './Button'

export interface ChoiceProps{
    medias: Array<Media>
    download: Function
}

export const Choice = ({medias, download} : ChoiceProps) => {
    const {t} = useTranslation()
    return(
        <table>
            <colgroup>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
            </colgroup>
            <thead>
                <tr>
                    <th>{t('_MIME')}</th>
                    <th>{t('_QUALITY')}</th>
                    <th>{t('_TYPE')}</th>
                    <th>{t('_CODEC')}</th>
                    <th>{t('_SIZE')}</th>
                    <th>{t('_RECOMMENDED')}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    medias.map((media, key) => (
                        <tr key={key}>
                            <td>{media.mime}</td>
                            <td>{media.quality}</td>
                            <td>{t(media.type)}</td>
                            <td>{media.codec}</td>
                            <td>{media.size}</td>
                            {
                                media.mime.includes("webm") && media.quality.includes("160k") && media.codec.includes("opus") 
                                ?
                                    <td><img src={"/assets/images/approval.png"} alt={t('_RECOMMENDED')} /></td>
                                :
                                    media.mime.includes("webm") && media.codec.includes("vp9") ?
                                        <td><img src={"/assets/images/approval.png"} alt={t('_RECOMMENDED')} /></td>
                                    :
                                        <td />
                            }
                            <td><Button text="_DOWNLOAD" title="_DOWNLOAD" className="download-button" disabled={false} onClick={() => download(media.code)} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}