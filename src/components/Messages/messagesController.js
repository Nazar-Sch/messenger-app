import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment'

import { 
    MessagesWrapper,
    MessagesHeader,
    ContactsName,
    MessagesMain,
    Message,
    MessageData,
    TextContainer,
    TextContainerMessage,
    DateContainer,
} from './messagesView'
import { contactsInfo, id } from '../../redux/selectors/rootSelectors';
import MessagesForm from './messagesFormController';
import UsersAvatar from "../usersAvatar";

const Messages = (props) => {
    const selectedId = useSelector(id);
    const contacts = useSelector(contactsInfo);

    const activeDialog = () => {
        const active = contacts.find(user => user.id === selectedId);        
        return (
            active ? 
                     <>
                        <MessagesHeader>
                            <UsersAvatar src={active.avatar} checked={active.checkedProfile} />
                            <ContactsName>{active.name}</ContactsName>
                        </MessagesHeader>
                        <MessagesMain>
                                <MessageData>
                                    {active.messagesList.map(item => (
                                        <Message>
                                            <UsersAvatar src={active.avatar} send={item.sent} />
                                            <TextContainer send={item.sent}>
                                                    <TextContainerMessage send={item.sent}>{item.message}</TextContainerMessage>
                                                    <DateContainer>{moment(item.date).format('l, LT')}</DateContainer>
                                            </TextContainer>
                                        </Message>
                                    ))}
                                </MessageData>
                        </MessagesMain>
                        <MessagesForm />
                    </> : ''
        )        
    }
    return (
        <MessagesWrapper>
            {activeDialog()}
        </MessagesWrapper>
    );
};

export default Messages;
