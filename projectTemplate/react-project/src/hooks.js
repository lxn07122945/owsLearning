import React, { useState } from 'react';

export default function Button () {

    const [ButtonText, setButtonText] = useState('click me', 'please');
    function handleClick () {
        return setButtonText ('thanks, been clicked!') ;
    }
    return  <button  onClick={handleClick}>{ButtonText}</button>;
}