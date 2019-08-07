import React, { Component } from 'react'

import cover from '../cover.jpg'
import YoutubeFooter from '../Components/YoutubeFooter';
import Footer from '../Components/Footer';

import instagram from '../social-media-icons/instagram.svg'
import twitter from '../social-media-icons/twitter.svg'
import soundcloud from '../social-media-icons/soundcloud.svg'
import spotify from '../social-media-icons/spotify.svg'
import itunes from '../social-media-icons/itunes.svg'
import youtube from '../social-media-icons/youtube.svg'



export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
      }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        var currentWidth = this.state.width
        var listPadding = currentWidth > 600 ? 20 : 0
        return (
            <div style = {{}}>
                { currentWidth > 600 ? <img style = {{width: '100%', verticalAlign: 'middle'}} src = {cover} alt="cover photo"/> : null}
                
                <div style = {{position: 'relative'}}>
                    <FeaturedTrack width = {this.state.width}/>
                    <div class = "Background-Color-Black" style = {{height: '700px', padding: 20}}>
                        {currentWidth > 600 ? <h3 style = {{color: 'white'}}>Songs</h3> : <h5 style = {{color: 'white'}}>Songs</h5>}
                        <ul style = {{padding: listPadding}}>
                            <li>
                                <Song 
                                    width = {this.state.width}
                                    youtubeLink = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                                    soundcloudLink = "https://soundcloud.com/skreet2x"
                                    spotifyLink = "https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g"
                                    itunesLink = "https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"/>
                            </li>
                            <li>
                            <Song 
                                    width = {this.state.width}
                                    youtubeLink = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                                    soundcloudLink = "https://soundcloud.com/skreet2x"
                                    spotifyLink = "https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g"
                                    itunesLink = "https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"/>
                            </li>
                        </ul>
                    </div>
                </div>

                <YoutubeFooter 
                    title = "Goodbye" 
                    author = "Post Malone"
                    url = "https://www.youtube.com/watch?v=ba7mB8oueCY"/>
                <Footer/>
            </div>
          );
    }
}

const FeaturedTrack = (props) => {
    var {width, height} = props
    var iconSize = 90
    
    
    if (width > 600){

        var imgWidth = 250
        var imgHeight = 187.5
        var offsetLeft = (imgWidth - iconSize) / 2
        var offsetTop = (imgHeight - iconSize) / 2

        return (
            <div style = {{display: 'flex', flexDirection: 'row'}}>
                <div style = {{width: imgWidth, height: imgHeight}}>
                    <i class="material-icons" style = {{position: 'absolute', top: offsetTop, left: offsetLeft, fontSize: iconSize, color: 'white'}}>play_arrow</i>
                    <img style = {{width: imgWidth, height: imgHeight, verticalAlign: 'middle'}} src = {'https://img.youtube.com/vi/7Auf9rBvNbY/0.jpg'} alt="cover photo"/>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', flex: 1}}>
                    <div style = {{height: 94}}>
                    </div>
                    <div class = "Background-Color-Maroon" style = {{height: 94, padding: 10}}>
                        <h6 style = {{color: 'white'}}>Featured Track</h6>
                        <h4 style = {{color: 'white', padding: 0, margin: 0}}>Upbringing</h4>
                    </div>
                </div>
            </div>
        )
    } else {
        var offsetLeft = (width - iconSize) / 2
        var offsetTop = (width*0.75 - iconSize) / 2
        
        return (
            <div style = {{display: 'flex', flexDirection: 'column'}}>
                <div >
                    <i class="material-icons" style = {{position: 'absolute', top: offsetTop, left: offsetLeft, fontSize: iconSize, color: 'white'}}>play_arrow</i>
                    <img style = {{width: width, verticalAlign: 'middle'}} src = {'https://img.youtube.com/vi/7Auf9rBvNbY/0.jpg'} alt="cover photo"/>
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', flex: 1}}>
                    <div class = "Background-Color-Maroon" style = {{height: 94, padding: 10}}>
                        <h6 style = {{color: 'white'}}>Featured Track</h6>
                        <h4 style = {{color: 'white', padding: 0, margin: 0}}>Upbringing</h4>
                    </div>
                </div>
            </div>
        )
    }
    
}

const Song = (props) => {
    var {youtubeLink, soundcloudLink, spotifyLink, itunesLink, width} = props
    var imgWidth = width > 600 ? 125 : 100
    // '30vw'
    var imgHeight = width > 600 ? 93.75 : 75
    // '22.5vw'
    var iconSize = width > 600 ? 90 : 50
    var offsetLeft = (imgWidth - iconSize) / 2
    var offsetTop = (imgHeight - iconSize) / 2

    var socialMediaIconSize = width > 600 ? 40 : 25

    var flexDir = width > 600 ? flexDir = 'row' : flexDir = 'column'
    return (
        <div style = {{display: 'flex', flexDirection: 'row', padding: 10}}>
    
            <div style = {{width: imgWidth, height: imgHeight, position: 'relative', top: 0, left: 0}}>
                <img style = {{position: 'absolute', top: 0, left: 0, width: imgWidth, height: imgHeight, verticalAlign: 'middle'}} src = {'https://img.youtube.com/vi/7Auf9rBvNbY/0.jpg'} alt="cover photo"/>
                <i class="material-icons" style = {{position: 'relative', top: offsetTop, left: offsetLeft, fontSize: iconSize, color: 'white'}}>play_arrow</i>
            </div>
            <div style = {{display: 'flex', flexDirection: 'column', flex: 1}}>
                <div class = "Background-Color-Maroon" style = {{height: imgHeight, padding: 10, display: 'flex', flexDirection: flexDir, justifyContent: 'space-between'}}>
                    <h4 style = {{color: 'white', padding: 0, margin: 0, fontSize: 10}}>Upbringing</h4>
                    <div style = {{display: 'flex', flexDirection: 'row'}}>

                        <a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={soundcloudLink} target="_blank">
                            <img src = {soundcloud} alt="soundcloud link"/>
                        </a>

                        <a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={youtubeLink} target="_blank">
                            <img src = {youtube} alt="youtube link"/>
                        </a>

                        <a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={spotifyLink} target="_blank">
                            <img src = {spotify} alt="spotify link"/>
                        </a>

                        <a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={itunesLink} target="_blank">
                            <img src = {itunes} alt="itunes link"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
