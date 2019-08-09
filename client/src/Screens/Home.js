import React, { Component } from 'react'

import cover from '../cover.jpg'

import soundcloud from '../social-media-icons/soundcloud.svg'
import spotify from '../social-media-icons/spotify.svg'
import itunes from '../social-media-icons/itunes.svg'
import youtube from '../social-media-icons/youtube.svg'
import YoutubeFooterContext from '../Context/YoutubeFooterContext';


export default class Home extends Component {
    static contextType = YoutubeFooterContext;
    
    state = {
        screenWidth : null
    }
    
    onResize = (e) => {
        this.setState({screenWidth: e.target.innerWidth})
    }

    render() {

        window.addEventListener("resize", this.onResize);


        var value = this.context
        var {updateYoutubeFooter} = value

        var currentWidth = this.state.screenWidth || window.innerWidth

        if(currentWidth > 600){
            return(
                <div class = "Background-Color-Black">
                    <img style = {{width: '100%', verticalAlign: 'middle'}} src = {cover} alt="cover photo"/>
                    <div style = {{position: 'relative', top: -150}}>
                        <FeaturedTrack 
                            width = {currentWidth}
                            url = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                            trackName = "Upbringing"/>
                        <div class = "Background-Color-Black" style = {{minHeight: '700px', padding: 20}}>
                            <h3 style = {{color: 'white'}}>Songs</h3>
                            {/* <ul style = {{padding: 20}}>
                                <li>
                                    <Song 
                                        updateYoutubeFooter = {updateYoutubeFooter}
                                        title = "Upbringing"
                                        author = "Skreet2x"
                                        width = {currentWidth}
                                        youtubeLink = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                                        soundcloudLink = "https://soundcloud.com/skreet2x"
                                        spotifyLink = "https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g"
                                        itunesLink = "https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"/>
                                </li>
                                <li>
                                <Song 
                                        updateYoutubeFooter = {updateYoutubeFooter}
                                        title = "Upbringing"
                                        author = "Skreet2x"
                                        width = {currentWidth}
                                        youtubeLink = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                                        soundcloudLink = "https://soundcloud.com/skreet2x"
                                        spotifyLink = "https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g"
                                        itunesLink = "https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"/>
                                </li>
                            </ul> */}
                            <SongList
                                updateYoutubeFooter = {updateYoutubeFooter}
                                width = {currentWidth}/>
                        </div>
                    </div>
            </div>
            )
        } else {
            return (
                <div style = {{}}>
                    <div>
                        <FeaturedTrack 
                            width = {currentWidth}
                            url = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                            trackName = "Upbringing"
                        />
                        <div class = "Background-Color-Black" style = {{height: '700px', padding: 20}}>
                            <h5 style = {{color: 'white'}}>Songs</h5>
                            <ul style = {{padding: 0}}>
                                <li>
                                    <Song 
                                        width = {currentWidth}
                                        updateYoutubeFooter = {updateYoutubeFooter}
                                        title = "Upbringing"
                                        author = "Skreet2x"
                                        youtubeLink = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                                        soundcloudLink = "https://soundcloud.com/skreet2x"
                                        spotifyLink = "https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g"
                                        itunesLink = "https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"/>
                                </li>
                                <li>
                                <Song 
                                        width = {currentWidth}
                                        updateYoutubeFooter = {updateYoutubeFooter}
                                        title = "Upbringing"
                                        author = "Skreet2x"
                                        youtubeLink = "https://www.youtube.com/watch?v=7Auf9rBvNbY"
                                        soundcloudLink = "https://soundcloud.com/skreet2x"
                                        spotifyLink = "https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g"
                                        itunesLink = "https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const FeaturedTrack = (props) => {
    var {width, height, url, trackName} = props
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
                        <h4 style = {{color: 'white', padding: 0, margin: 0}}>{trackName}</h4>
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
                        <h4 style = {{color: 'white', padding: 0, margin: 0}}>{trackName}</h4>
                    </div>
                </div>
            </div>
        )
    }
    
}

var songListArr = [
    {
        title : "Upbringing",
        author : "Skreet2x",
        youtubeLink: "https://www.youtube.com/watch?v=7Auf9rBvNbY",
        soundcloudLink: "https://soundcloud.com/skreet2x",
        spotifyLink : "https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g",
        itunesLink : "https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs"
    },
    {
        title : "Pain",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=R5goCL8yzZo&list=OLAK5uy_mM9EbEPB6w1tWrGeBxWaLiJtuZZ560VsU&index=1"
    },
    {
        title : "Upbringing",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=srTt6Fpiy8o&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw"
    },
    {
        title : "San Marino",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=Bq21zfNIr1A&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=2"
    },
    {
        title : "Nights Like This (feat. Ace TG)",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=9_HB50ROwHE&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=3"
    },
    {
        title : "Pain to Passion",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=-XdjRFMzlOc&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=4"
    },
    {
        title : "In the End",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=_Rt2Pj7s7Pg&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=5"
    },
    {
        title : "Insomniac (feat. Gohnrapz)",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=3fFlHbMNy0E&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=6"
    },
    {
        title : "Myself",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=bk-_6JiXtSU&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=7"
    },
    {
        title : "Gold Roses",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=dFtHxx96vHs&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=8"
    },
    {
        title : "Dying (feat. Suprr)",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=3fFlHbMNy0E&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=9"
    },
    {
        title : "Love Letter (feat. Sentient)",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=3fFlHbMNy0E&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=10"
    },
    {
        title : "On the Road (feat. Latjoorawa)",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=3fFlHbMNy0E&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=11"
    },
    {
        title : "In This Hoe (feat. Jones)",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=3fFlHbMNy0E&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=12"
    },
    {
        title : "Stick Up (feat. 812lex)",
        author : "Skreet2x",
        youtubeLink : "https://www.youtube.com/watch?v=3fFlHbMNy0E&list=OLAK5uy_lLgGBNdCT0-eC5OO0EzBonWWLjCbNwczw&index=13"
    },
]


const SongList = (props) => {
    var {updateYoutubeFooter, currentWidth } = props
    var listPadding = currentWidth > 600 ? 20 : 0
    return(
        <ul style = {{padding: listPadding}}>
            {songListArr.map((song) =>{
                var {title, author, youtubeLink, soundcloudLink, spotifyLink,  itunesLink} = song
                return(
                    <li>
                        <Song 
                            updateYoutubeFooter = {updateYoutubeFooter}
                            title = {title}
                            author = {author}
                            width = {currentWidth}
                            youtubeLink = {youtubeLink}
                            soundcloudLink = {soundcloudLink}
                            spotifyLink = {spotifyLink}
                            itunesLink = {itunesLink}/>
                    </li>)
            })}
        </ul>)
}


const Song = (props) => {
    var {youtubeLink, soundcloudLink, spotifyLink, itunesLink, width, updateYoutubeFooter, title, author} = props
    var imgWidth = width > 600 ? 125 : 100
    var imgHeight = width > 600 ? 93.75 : 75
    var iconSize = width > 600 ? 90 : 50
    var offsetLeft = (imgWidth - iconSize) / 2
    var offsetTop = (imgHeight - iconSize) / 2

    var socialMediaIconSize = width > 600 ? 40 : 25

    var flexDir = width > 600 ? flexDir = 'row' : flexDir = 'column'
    var songFontSize = width > 600 ? 30 : 20


    var videoIdRegEx = /(v=[A-Za-z0-9\_-]+)/
    var result = videoIdRegEx.exec(youtubeLink);
    var videoId = result[0].slice(2)
    var thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`

    return (
        <div style = {{display: 'flex', flexDirection: 'row', padding: 10}}>
    
            <div style = {{width: imgWidth, height: imgHeight, position: 'relative', top: 0, left: 0}}>
                <img style = {{position: 'absolute', top: 0, left: 0, width: imgWidth, height: imgHeight, verticalAlign: 'middle'}} src = {thumbnailUrl} alt="cover photo"/>
                <i onClick = {() => updateYoutubeFooter({
                    url: youtubeLink,
                    title: title,
                    author: author,
                    isVisible: true
                })} class="material-icons" style = {{position: 'relative', top: offsetTop, left: offsetLeft, fontSize: iconSize, color: 'white'}}>play_arrow</i>
            </div>
            <div style = {{display: 'flex', flexDirection: 'column', flex: 1}}>
                <div class = "Background-Color-Maroon" style = {{height: imgHeight, padding: 10, display: 'flex', flexDirection: flexDir, justifyContent: 'space-between'}}>
                    <h4 style = {{color: 'white', padding: 0, margin: 0, fontSize: songFontSize}}>{title}</h4>
                    <div style = {{display: 'flex', flexDirection: 'row'}}>

                        {soundcloudLink ? <a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={soundcloudLink} target="_blank">
                            <img src = {soundcloud} alt="soundcloud link"/>
                        </a> : null}

                        {youtubeLink ? <a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={youtubeLink} target="_blank">
                            <img src = {youtube} alt="youtube link"/>
                        </a>: null}

                        {spotifyLink ?<a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={spotifyLink} target="_blank">
                            <img src = {spotify} alt="spotify link"/>
                        </a>: null}

                        {itunesLink ? <a style = {{width: socialMediaIconSize, height: socialMediaIconSize, margin: 5}} href={itunesLink} target="_blank">
                            <img src = {itunes} alt="itunes link"/>
                        </a>: null}
                    </div>
                </div>
            </div>
        </div>
    )
}
