import React, { forwardRef } from "react";

const Input = forwardRef(({ id, label, ...props }, ref) => {
    return (
        <p className='control'>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} ref={ref} required {...props}/>
        </p>
    )
});

export default Input