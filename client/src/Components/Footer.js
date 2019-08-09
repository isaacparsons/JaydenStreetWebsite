import React from 'react'
import instagram from '../social-media-icons/instagram.svg'
import twitter from '../social-media-icons/twitter.svg'
import soundcloud from '../social-media-icons/soundcloud.svg'
import spotify from '../social-media-icons/spotify.svg'
import itunes from '../social-media-icons/itunes.svg'
import youtube from '../social-media-icons/youtube.svg'


export default function Footer() {
    var iconHeight = 50
    return (
        <div>
            <div style = {{
                display: 'flex', 
                flexDirection: 'row', 
                height: 200, 
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '10%',
                paddingRight: '10%',
                
            }}
                
                class="Background-Color-Maroon"
                >

                <a style = {{width: iconHeight, height: iconHeight}} href="https://www.instagram.com/skreet2x/" target="_blank">
                    <img src = {instagram} alt="instagram link"/>
                </a>

                <a style = {{width: iconHeight, height: iconHeight}} href="https://twitter.com/Skreet2x" target="_blank">
                    <img src = {twitter} alt="twitter link"/>
                </a>

                <a style = {{width: iconHeight, height: iconHeight}} href="https://soundcloud.com/skreet2x" target="_blank">
                    <img src = {soundcloud} alt="soundcloud link"/>
                </a>

                <a style = {{width: iconHeight, height: iconHeight}} href="https://www.youtube.com/user/R8Rewindz/videos" target="_blank">
                    <img src = {youtube} alt="youtube link"/>
                </a>

                <a style = {{width: iconHeight, height: iconHeight}} href="https://open.spotify.com/artist/7onY9SwotyBa1fkkjCT0lY?si=NaAcIMPJQXOOObPWitSc5g" target="_blank">
                    <img src = {spotify} alt="spotify link"/>
                </a>

                <a style = {{width: iconHeight, height: iconHeight}} href="https://music.apple.com/us/artist/skreet/1446391482#see-all/top-songs" target="_blank">
                    <img src = {itunes} alt="itunes link"/>
                </a>
            </div>
            <div style = {{width: '100%', height: 50, backgroundColor: '#3b0100'}}></div>
        </div>

    )
}
