import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Media } from '../Types/Media'

import './Choice.scss'
import { Button } from './Button'

export interface ChoiceProps{
    medias: Array<Media>
    download: Function
    reset: Function
}

export const Choice = ({medias, download, reset} : ChoiceProps) => {
    const {t} = useTranslation()
    return(
        <Fragment>
            <Button disabled={false} text="_NEW_DOWNLOAD" title="_NEW_DOWNLOAD" onClick={() => reset()} className="download-button new-conversion-top" />
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
                                    media.mime.includes("webm") && (media.quality.includes("160k") || media.codec.includes("160k")) && media.codec.includes("opus") 
                                    ?
                                        <td><img src={"/assets/images/approval.png"} alt={t('_RECOMMENDED')} /></td>
                                    :
                                        media.mime.includes("webm") && media.codec.includes("vp9") ?
                                            <td><img src={"/assets/images/approval.png"} alt={t('_RECOMMENDED')} /></td>
                                        :
                                            <td />
                                }
                                <td><Button text="_DOWNLOAD" title="_DOWNLOAD" className="download-button" disabled={false} onClick={() => download(media.code, media.mime)} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Button disabled={false} text="_NEW_DOWNLOAD" title="_NEW_DOWNLOAD" onClick={() => reset()} className="download-button new-conversion-bottom" />
        </Fragment>
    )
}