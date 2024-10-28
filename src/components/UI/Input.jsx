import React from 'react'

const Input = ({ id, label, ...props }) => {
    return (
        <section>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </section>
    )
}

export default Input