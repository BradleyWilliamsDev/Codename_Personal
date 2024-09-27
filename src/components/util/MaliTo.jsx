import React from 'react';
import { Link } from "react-router-dom";

function MaliTo(props) {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = props.mailTo;
                e.preventDefault();
            }}
        >
            {props.label}
        </Link>
    );
}

export default MaliTo