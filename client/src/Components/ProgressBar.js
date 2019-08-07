
import React, { Component } from 'react'
import Draggable from 'react-draggable';

export default class ProgressBar extends Component {


    handleStop = (e) => {
        this.props.render(e.clientX)
    }

    render() {
        var {width, height,progress, completedBarColor, notCompletedBarColor, cursorColor} = this.props
        var circleRadius = height / 2
        var barHeight = 15
        var completedBarWidth = width * progress
        var notCompletedBarWidth = width - completedBarWidth


        return (
            <div style = {{
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center',
                width: width, 
                height: height}}>

                <div style = {{width: completedBarWidth, height: barHeight, backgroundColor: completedBarColor}}/>
                <div style = {{width: notCompletedBarWidth, height: barHeight, backgroundColor: notCompletedBarColor}}/>
                
                <Draggable
                    axis="x"
                    handle=".handle"
                    defaultPosition={{x: -notCompletedBarWidth, y: 0}}
                    position={{x: -notCompletedBarWidth,y: 0}}
                    bounds={{left: -width + circleRadius, right: -circleRadius}}
                    grid={[1, 25]}
                    scale={1}
                    onStop={this.handleStop}>
                    <div>
                        <div className="handle" style = {{
                            height: height, 
                            width: height, 
                            borderRadius: height, 
                            backgroundColor: 'black'}}/>
                    </div>
                </Draggable>
            </div>
        )
    }
}