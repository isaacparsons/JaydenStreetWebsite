import React from 'react'

const QuantitySelector = (props) => {
    var {addOne, subtractOne, value} = props
    return (
        <div style = {{display: 'flex', alignItems: 'center'}}>
            <i onClick = {subtractOne} class="material-icons">remove_circle_outline</i>
            <h6 style = {{fontSize: 20, padding: 3}}>{value}</h6>
            <i onClick = {addOne} class="material-icons">add_circle_outline</i>
        </div>
    )
}

export default QuantitySelector
