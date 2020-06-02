import React from 'react';
import styled from 'styled-components'

import CheckedIcon from '../../assets/images/checked.svg';

const UsersAvatar = ({ src, checked, send }) => {
    const AvatarWrapper = styled.div`
        min-width: 70px;
        max-width: 71px;
        height: 70px;
        margin: 8px;
        display: ${props => props.send ? `none` : `block`};
    `;
    const AvatarItem = styled.img`
        border-radius: 50%;
        width: 100%;
        height: auto;
    `;
    const CheckedProfile = styled.img`
        display: ${props => props.checked ? `inline` : `none`};
        transform: translate(50px,-20px);
        width: 16px;
        height: auto;
    `;
    return (
        <AvatarWrapper send={send}>
           <AvatarItem src={src} alt="Users avatar" /> 
           <CheckedProfile checked={checked} src={CheckedIcon} />
        </AvatarWrapper>
    );
};

export default UsersAvatar;
