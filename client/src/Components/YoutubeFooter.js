import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import ProgressBar from './ProgressBar';

export default class YoutubeFooter extends Component {

    state = {
        playing : false,
        progress : 0.01,
        volume : 0.5
    }

    togglePlaying = () => {
        this.setState({playing: !this.state.playing})
    }

    progressBarDragged = (x) => {
        var progress = (x - 300) / 500
        this.setState({progress})
        this.player.seekTo(progress, 'fraction')

    }

    updateSongProgress = (e) => {
        this.setState({progress: e.played})
    }

    updateSongDuration = (e) => {
        this.setState({songDuration: e})
    }

    updateVolume = () => {

    }


    ref = player => {
        this.player = player
    }

    render() {
        var {title, author, url} = this.props
        var {progress, playing, volume} = this.state
        var playPause = playing ? 'pause' : 'play_arrow'
        return (
            <div style = {{
                height: 150, 
                width: '100%', 
                backgroundColor: '#b5b5b5', 
                position: 'fixed', 
                bottom: 0,
                display: 'flex',
                flexDirection: 'row'}}>

                <ReactPlayer 
                    ref={this.ref}
                    url={url}
                    width = {250}
                    height = {150}
                    playing = {playing}
                    volume = {volume}
                    onDuration = {this.updateSongDuration}
                    onProgress = {this.updateSongProgress}/>

                <div style = {{padding: 20}}>
                    <h5>{title}</h5>
                    <h6>{author}</h6>
                </div>

                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center',position: 'relative', top: -7.6, width: 500}}>   
                    <ProgressBar 
                        width = {500} 
                        height = {30} 
                        progress = {progress}
                        completedBarColor = "#5e5e5e"
                        notCompletedBarColor = "#8f8f8f"
                        cursorColor = "#fff"
                        render = {(x) => this.progressBarDragged(x)}/>
                    <div style = {{
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        width: '100%'}}>

                        <i onClick = {this.togglePlaying} style = {{fontSize: 100}} class="material-icons">{playPause}</i>

                        <ProgressBar 
                            width = {100} 
                            height = {20} 
                            progress = {volume}
                            completedBarColor = "#5e5e5e"
                            notCompletedBarColor = "#8f8f8f"
                            cursorColor = "#fff"
                            render = {(x) => this.updateVolume(x)}/>
                    </div>
                </div>
                
            </div>
        )
    }
}
