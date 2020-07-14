import React, { Fragment } from 'react'

import {withTranslation, WithTranslation} from 'react-i18next'

import './Index.scss'
import { EnterUrl } from '../Components/EnterUrl'
import { fetchBack, fetchBackFile } from '../Utils/Global/function'
import { Choice } from '../Components/Choice'
import { Media } from '../Types/Media'
import { Loading } from '../Components/Modal/Loading'

export interface IndexState {
    url: string,
    medias: Array<Media>
    valid: boolean
    loading: boolean
    fileName: string
}

class Index extends React.Component<WithTranslation, {}, IndexState> {

    state: IndexState = {
        url: "",
        medias: [],
        valid: false,
        loading: false,
        fileName: ""
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let {name, value} = event.target
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))

        if (name === "url"){
            let regexp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/
            if (value.match(regexp)){
                this.setState({valid: true})
            }
        }
    }

    async sendUrlToBack(){
        let response = await fetchBack('youtube/mime',"POST", [], {
            url: this.state.url
        })
        let medias = response['mime']
        let fileName = response['fileName']
        this.setState({medias, fileName})
    }

    async downloadFile(code: string){
        this.setState({loading: true})
        let downloadMedia = await fetchBackFile('youtube/download',"POST", [], {
            code: code,
            url: this.state.url
        })

        if (downloadMedia){
            this.setState({loading: false})
            let a = document.createElement('a')
            document.body.appendChild(a)
            let url = window.URL.createObjectURL(downloadMedia)
            let reader = new FileReader()
            console.log(reader.readAsDataURL(downloadMedia))
            a.href = url
            a.download = this.state.fileName
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
        }
    }

    render(){
        return(
            <Fragment>
                {
                    this.state.medias !== undefined && this.state.medias.length !== 0 
                    ?
                        <Choice medias={this.state.medias} download={(code: string) => this.downloadFile(code)} />
                    :
                        <EnterUrl 
                            handleChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)} 
                            valid={this.state.valid} 
                            url={this.state.url}
                            onClick={() => this.sendUrlToBack()}
                        />
                }
                {
                    this.state.loading
                    ?
                        <Loading />
                    :
                        <Fragment />
                }
            </Fragment>

        )
    }
}

export default withTranslation()(Index)