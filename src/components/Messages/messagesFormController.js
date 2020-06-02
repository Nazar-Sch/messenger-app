import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputWrapper, InputTypeForm, InputType, SendButton } from './messagesFormView';
import { sendMessageAction, getJoke } from '../../redux/actions/rootActions';
import { id } from '../../redux/selectors/rootSelectors';

const MessagesForm = () => {
    const [typedText, setTypedText] = useState('');
    const handleTypedText = (e) => {
        setTypedText(e.target.value)
    }
    const selectedId = useSelector(id);
    const dispatch = useDispatch();
    const sendMessage = (e) => {
        if (!typedText) return;
        dispatch(sendMessageAction(typedText, selectedId))
        dispatch(getJoke(selectedId))
        setTypedText('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault()
            sendMessage()
        }
      }

    return (
        <InputWrapper>
            <InputTypeForm>
                <InputType 
                    placeholder='Type your message'
                    value={typedText}
                    onChange={handleTypedText}
                    onKeyPress={handleKeyPress}
                />
                <SendButton 
                    onClick={() => sendMessage()}
                    onKeyPress={() => handleKeyPress()}
                />
            </InputTypeForm>
        </InputWrapper>
    );
};

export default MessagesForm;