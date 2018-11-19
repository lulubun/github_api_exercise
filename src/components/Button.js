import React from "react";


const Button = (props) => {
    return(
        <button
            onClick={props.buttonFunction}
            style={{
                color: '#00241B',
                backgroundColor: props.disabled ? '#5C736D' : '#65B891',
                borderRadius: '4px',
                MozBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                WebkitBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                margin: '10px',
            }}
            disabled={props.disabled}
        >
            {props.buttonTitle}
        </button>
    )
}

export default Button