import React, {} from 'react';
import { Title, StyledCounter } from '../../assets/styles/app.styles';

import TimeInput from './TimeInput';


const Countdown = () => {
    return (
    <StyledCounter>
        <Title>Countdown</Title>
        <TimeInput/>
    </StyledCounter>
    )

}
export default Countdown