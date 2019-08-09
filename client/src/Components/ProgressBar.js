
import React, { Component } from 'react'
import Draggable from 'react-draggable';

export default class ProgressBar extends Component {

    state = {
        startPosition : null
    }

    handleStop = (e) => {
        var {startPosition} = this.state
        var {width} = this.props
        if (startPosition){
            this.props.render((e.clientX - startPosition) / width)
        }
    }

    handleStart = (e) => {
        this.setState({startPosition: e.clientX})
    }

    renderProgressBar = () => {
        var {progress, completedBarColor, notCompletedBarColor, width, cursorHeight, barHeight} = this.props
        var progressBarWidth = width - 40
        var circleRadius = cursorHeight / 2
        var barHeight = barHeight || 15
        var completedBarWidth = progressBarWidth * progress
        var notCompletedBarWidth = progressBarWidth - completedBarWidth



        return(
            <div style = {{display: 'flex', flexDirection: 'row'}}>

                <div style = {{width: completedBarWidth, height: barHeight, backgroundColor: completedBarColor}}/>
                <div style = {{width: notCompletedBarWidth, height: barHeight, backgroundColor: notCompletedBarColor}}/>
                    
                    <Draggable
                        axis="x"
                        handle=".handle"
                        defaultPosition={{x: -notCompletedBarWidth, y: -(cursorHeight - barHeight) / 2}}
                        position={{x: -notCompletedBarWidth - 5, y: -(cursorHeight - barHeight) / 2}}
                        bounds={{left: -progressBarWidth - 5, right: -circleRadius}}
                        grid={[1, 25]}
                        scale={1}
                        onStop={this.handleStop}
                        onStart = {this.handleStart}>
                            <div className="handle" style = {{
                                height: cursorHeight, 
                                width: cursorHeight, 
                                borderRadius: cursorHeight, 
                                backgroundColor: 'black'}}/>
                    </Draggable>
            </div>
        )
    }

    render() {
        var {cursorHeight} = this.props
        return (
            <div style = {{
                display: 'flex', 
                flexDirection: 'row', 
                height: cursorHeight,
                alignItems: 'center'}}>

                {this.renderProgressBar()}

            </div>

        )
    }
}