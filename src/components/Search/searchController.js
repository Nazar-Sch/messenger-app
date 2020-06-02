import React from 'react';

import {
    SearchWrapper,
    SearchInput,
    InputField,
    SearchIcon,
} from './searchView'
import searchIconLink from '../../assets/images/searchIcon.svg';
import UsersAvatarImg from '../../assets/images/webp/me.webp';
import UsersAvatar from "../usersAvatar";

const Search = ({ value, handleValue }) => {
    return (
        <SearchWrapper>
            <UsersAvatar src={UsersAvatarImg} checked={true} />
            <InputField>
                <SearchIcon src={searchIconLink} href="Search icon" />
                <SearchInput 
                    placeholder="Search or start new chat"
                    value={value}
                    onChange={handleValue}
                />
            </InputField>
        </SearchWrapper>
    );
};

export default Search;
