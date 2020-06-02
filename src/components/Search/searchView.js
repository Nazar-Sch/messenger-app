import styled from 'styled-components'

export const SearchWrapper = styled.div`
    padding: 15px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #F5F5F5;
    border-bottom: 2px solid #E5E5E5;
`;

export const InputField = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #E5E5E5;
    border-radius: 20px;
    background-color: #fff;
    margin-top: 20px;
`;
export const SearchIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    margin: 7px;
`;

export const SearchInput = styled.input`
    background-color: transparent;
    border: 0;
    font-size: 16px;
    width: 90%;
    padding-top: 7px;
    padding-bottom: 7px;
    &:focus {
        outline: none;
    }
`;

