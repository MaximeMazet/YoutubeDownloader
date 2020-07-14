import React from 'react'
import { useTranslation } from 'react-i18next'

import './Loading.scss'

export const Loading = () => {
    const {t} = useTranslation()
    return(
        <section className="loading-modal">
            <img src="/assets/images/loading.gif" alt="Loading" />
            <p>{t('_WORKING_LOADING')}</p>
        </section>
    )
}