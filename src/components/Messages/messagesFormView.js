import styled from 'styled-components'

import SendIcon from '../../assets/images/sendIcon.svg'

export const InputWrapper = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    border-top: 2px solid #E5E5E5;
    background-color: #F5F5F5;
    justify-content: center;
    align-items: center;
    height: 20vh;
`; 
export const InputTypeForm = styled.form`
    display: flex;
    justify-content: space-between;
    width: 90%;
    background-color: white;
    border: 1px solid #E5E5E5;
    border-radius: 25px;
    `; 
export const InputType = styled.input`
    border-radius: inherit;
    padding: 20px;
    font-size: 20px;
    width: 90%;
    border: 0;
`; 
export const SendButton = styled.div`
    background-image: url(${SendIcon});
    border: 0;
    width: 10%;
    opacity: 0.8;
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    cursor: pointer;
    transition: .4s;
    &:hover {
        transform: scale(1.2) 
    }
`; 




