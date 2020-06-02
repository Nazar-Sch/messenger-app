import styled from 'styled-components'

export const ChatsWrapper = styled.div`
    max-width: 35vw;
    width: 100%;
    min-width: 280px;
`;
export const ChatsMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 76.5vh;
    overflow-y : auto;
    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
        background: #E5E5E5;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
export const ChatsHeading = styled.h1`
    font-size: 32px;
    color: #86C4D3;
    padding-top: 45px;
    padding-bottom: 45px;
    padding-left: 10px;
`;
export const ChatContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 2px solid #E5E5E5;
    cursor: pointer;
    &:hover {
        background-color: #F5F5F5;
    }
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;
export const TextContainerTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
`;
export const ContactsName = styled.div`
    font-size: 20px;
    color: #3D3D3D;
    color: black;
`;
export const MessageContainer = styled.div`
    font-size: 16px;
    color: #5C5C5C;
    max-width: 315px;
    line-height: 1.2;
`;
export const DateContainer = styled.span`
    font-size: 15px;
    opacity: 0.9;
    color: #3C4154;
    place-content: flex-end;
    color: black;
    padding-right: 10px;
`;
export const NotFound = styled.div`
    text-align: center;
    width: 100%;
    font-size: 20px;
`;
