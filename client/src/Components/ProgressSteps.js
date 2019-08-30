import React, { Component } from 'react'
import posed from 'react-pose';


const Box = posed.div({
    notCompleted : {width : 0},
    completed: {width: 100, transition: { duration: 1000 }}
});


export default class ProgressSteps extends Component {

    state = {
        isCompleted: false
    }

    handlePress = () => {
        this.setState({isCompleted: true})
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({ isCompleted: !this.state.isCompleted });
        }, 1000);
      }

    circle = () => {
        var circleColor = '#737ec9'
        var {steps} = this.props

        var circleRadius = 25
        var circleHeight = circleRadius * 2
        var rectHeight = 20
        var rectWidth = 300
        var rectOffsetY = (circleHeight - rectHeight) / 2


        var svgElements = []
        for (let i = 0; i < steps - 1; i++){
            var circleOffsetX = (i*2 + 1)*circleRadius + i*rectWidth
            var rectOffsetX = ((i+1)*2)*circleRadius + i*rectWidth - 5*(i+1)
            svgElements.push(
                <g>
                    <circle cx={circleOffsetX} cy={circleRadius} r={circleRadius} fill={circleColor} />
                    <rect x = {rectOffsetX} y = {rectOffsetY} width={rectWidth} height={rectHeight} fill={circleColor} />
                </g>)
        }
        svgElements.push( 
            <circle cx={(steps*2 - 1)*circleRadius + rectWidth* (steps - 1)} cy={circleRadius} r={circleRadius} fill={circleColor} />)

        return (
            <svg width = "750">
                {svgElements}
            </svg>)
       }

    render() {
        return (
            <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1}}>
                {/* <Box 
                    style = {{height: 50, backgroundColor: 'black'}} 
                    pose={this.state.isCompleted ? 'completed' : 'notCompleted'}
                /> */}
                {this.circle()}
            </div>
        )
    }
}
