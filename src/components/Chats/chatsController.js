import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { 
    ChatsWrapper, 
    ChatsHeading,
    ChatContainer,
    TextContainer,
    ContactsName,
    MessageContainer,
    DateContainer,
    TextContainerTop,
    ChatsMain,
    NotFound,
} from './chatsView';
import Search from '../Search';
import UsersAvatar from "../usersAvatar";
import { contactsInfo } from "../../redux/selectors/rootSelectors";
import { selectedId } from '../../redux/actions/rootActions';

const Chats = () => {
    const contacts = useSelector(contactsInfo);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const filterByName = () => {
        const serachedValue = searchValue.toLowerCase();
        return contacts.filter(item => item.name.toLowerCase().includes(serachedValue))
    }
 
    const ContactsWrapper = () => (
        <>
            {filterByName().length ? filterByName().map(item => (
                <ChatContainer onClick={() => dispatch(selectedId(item.id))}>
                    <UsersAvatar src={item.avatar} checked={item.checkedProfile} />
                    <TextContainer>
                        <TextContainerTop>
                            <ContactsName>{item.name}</ContactsName>
                            <DateContainer>{moment(item.messagesList[item.messagesList.length - 1].date).format("MMM D, YYYY")}</DateContainer>
                        </TextContainerTop>
                        <MessageContainer>{item.messagesList[item.messagesList.length - 1].message}</MessageContainer>
                    </TextContainer>
                </ChatContainer>   
            )) : 
            <NotFound>Not found</NotFound>}
        </>
    )

    return (
        <ChatsWrapper>
            <Search value={searchValue} handleValue={handleSearchValue}/>
            <ChatsMain>
                <ChatsHeading>Chats</ChatsHeading>
                <ContactsWrapper />
            </ChatsMain>
        </ChatsWrapper>
    );
};

export default Chats;
