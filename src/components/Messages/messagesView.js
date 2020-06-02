import styled  from 'styled-components'

export const MessagesWrapper = styled.div`
    max-width: 65vw;
    width: 100%;
    border-left: 1px solid #E5E5E5;
    height: 100vh;
`; 
export const MessagesHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #E5E5E5;
    background-color: #F5F5F5;
    height: 12vh;
`; 
export const ContactsName = styled.div`
    font-size: 20px;
`; 
export const MessagesMain = styled.div`
    position: relative;
    height: 68vh;
    overflow-y : auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
        background:  #5C5C5C;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #3C4154;
    }
`; 
export const Message = styled.div`
    display: flex;
    padding-right: 15px;
    padding-top: 20px;
`; 
export const MessageData = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`; 
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: ${props => props.send ? `flex-end` : `flex-start`};
`; 
export const TextContainerMessage = styled.div`
    padding-top: 17px;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 17px;
    margin-top: 10px;
    color: ${props => props.send ? `#3C4154` : `#EAEAEA`};
    background-color: ${props => props.send ? `#E5E5E5` : `#3C4154`};
    border-radius: 25px;
    font-size: 18px;
`; 
export const DateContainer = styled.div`
    color: #5C5C5C;
    opacity: 0.8;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
`; 

















