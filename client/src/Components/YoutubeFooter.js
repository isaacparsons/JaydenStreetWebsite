import React, { Component } from 'react'

import ReactPlayer from 'react-player';
import ProgressBar from './ProgressBar';

export default class YoutubeFooter extends Component {

    state = {
        playing : false,
        progress : 0,
        volume : 0.5,
        screenWidth : null

    }

    onResize = (e) => {
        this.setState({screenWidth: e.target.innerWidth})
    }

    componentDidUpdate(prevProps){
        if (prevProps.url != this.props.url){
            this.setState({...this.state, playing: true, progress: 0})
        }
    }

    togglePlaying = () => {
        this.setState({playing: !this.state.playing})
    }

    progressBarDragged = (e) => {
        var newProgress = this.state.progress + e

        if(newProgress > 1){
            newProgress = 1
        } else if(newProgress < 0){
            newProgress = 0
        }
        this.setState({progress: newProgress})
        this.player.seekTo(newProgress, 'fraction')

    }

    updateSongProgress = (e) => {
        this.setState({progress: e.played})
    }

    updateSongDuration = (e) => {
        this.setState({songDuration: e})
    }

    updateVolume = (e) => {
        var newVolume = this.state.volume + e

        if(newVolume > 1){
            newVolume = 1
        } else if(newVolume < 0){
            newVolume = 0
        }
        this.setState({volume: newVolume})
    }


    ref = player => {
        this.player = player
    }

    desktopLayout = () => {
        var {title, author, url} = this.props
        var {progress, playing, volume} = this.state
        var playPause = playing ? 'pause' : 'play_arrow'

        var height = 150
        var playerWidth = 250
        var detailsTextWidth = 140
        var cursorHeightSong = 30
        var cursorHeightVolume = 20
        var currentWidth = this.state.screenWidth || window.innerWidth
        var progressBarContainerWidth = currentWidth - playerWidth - detailsTextWidth
        var volumeContainerWidth = progressBarContainerWidth * 0.4

        return (
            <div style = {{
                height: height, 
                width: '100%', 
                backgroundColor: '#b5b5b5', 
                position: 'fixed', 
                bottom: 0,
                display: 'flex',
                flexDirection: 'row'}}>

                <div style = {{width: playerWidth, height: height}}>
                    <ReactPlayer 
                        ref={this.ref}
                        url={url}
                        width = {playerWidth}
                        height = {height}
                        playing = {playing}
                        volume = {volume}
                        onDuration = {this.updateSongDuration}
                        onProgress = {this.updateSongProgress}/>
                </div>
                    

                <div style = {{padding: 20, width: detailsTextWidth}}>
                    <h5>{title}</h5>
                    <h6>{author}</h6>
                </div>

                <div style = {{
                    display: 'flex', 
                    flex: 1,
                    flexDirection: 'column',
                    }}>   

                    <ProgressBar 
                        cursorHeight = {cursorHeightSong}
                        width = {progressBarContainerWidth}
                        progress = {progress}
                        completedBarColor = "#5e5e5e"
                        notCompletedBarColor = "#8f8f8f"
                        cursorColor = "#fff"
                        render = {(x) => this.progressBarDragged(x)}/>

                    <div style = {{
                        display: 'flex', 
                        flex: 1,
                        width: '100%',
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'}}>

                        <i onClick = {this.togglePlaying} style = {{fontSize: 100}} class="material-icons">{playPause}</i>

                        <div style = {{width: '30%'}}>
                            <ProgressBar 
                                barHeight = {10}
                                cursorHeight = {cursorHeightVolume}
                                width = {volumeContainerWidth}
                                progress = {volume}
                                completedBarColor = "#5e5e5e"
                                notCompletedBarColor = "#8f8f8f"
                                cursorColor = "#fff"
                                render = {(x) => this.updateVolume(x)}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

    mobileLayout = () => {
        var {title, author, url} = this.props
        var {progress, playing, volume} = this.state
        var playPause = playing ? 'pause' : 'play_arrow'

        var playerWidth = 0
        var playerHeight = 0

        var height = 150
        var detailsTextWidth = 140
        var cursorHeightSong = 30
        var cursorHeightVolume = 20
        var progressBarContainerWidth = window.innerWidth - detailsTextWidth
        var volumeContainerWidth = progressBarContainerWidth * 0.5

        return (
            <div style = {{
                height: height, 
                width: '100%', 
                backgroundColor: '#b5b5b5', 
                position: 'fixed', 
                bottom: 0,
                display: 'flex',
                flexDirection: 'row'}}>

                <div style = {{width: playerWidth, height: height}}>
                    <ReactPlayer 
                        ref={this.ref}
                        url={url}
                        width = {playerWidth}
                        height = {height}
                        playing = {playing}
                        volume = {volume}
                        onDuration = {this.updateSongDuration}
                        onProgress = {this.updateSongProgress}/>
                </div>

                <div style = {{padding: 20, width: detailsTextWidth}}>
                    <h5>{title}</h5>
                    <h6>{author}</h6>
                </div>

                <div style = {{
                    display: 'flex', 
                    flex: 1,
                    flexDirection: 'column',
                    }}>   

                    <ProgressBar 
                        cursorHeight = {cursorHeightSong}
                        width = {progressBarContainerWidth}
                        progress = {progress}
                        completedBarColor = "#5e5e5e"
                        notCompletedBarColor = "#8f8f8f"
                        cursorColor = "#fff"
                        render = {(x) => this.progressBarDragged(x)}/>

                    <div style = {{
                        display: 'flex', 
                        flex: 1,
                        width: progressBarContainerWidth,
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'}}>

                        <i onClick = {this.togglePlaying} style = {{fontSize: 100}} class="material-icons">{playPause}</i>

                        <ProgressBar 
                            barHeight = {10}
                            cursorHeight = {cursorHeightVolume}
                            width = {volumeContainerWidth}
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


    render() {

        window.addEventListener("resize", this.onResize);
        var currentWidth = this.state.screenWidth || window.innerWidth

        var {isVisible} = this.props

        if(isVisible){
            if(currentWidth > 600){
                return this.desktopLayout()
            } else {
                return this.mobileLayout()
            }
        } else return null
    }
}
