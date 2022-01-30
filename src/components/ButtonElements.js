import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    //background: ${({primary})=>(primary ? '#814CFF':'#010606')};
    background: ${({primary})=>(primary ? '#814CFF':'#814CFF')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=>(dark ? '#fff':'#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-stretch: expanded;
    font-weight: 300;
    border-style: solid;
    border-color: ${({primary})=>(primary ? '#814CFF':'#814CFF')};
    border-width: 1px;

    &:hover {
        transition: all 0.2s ease-in-out;
        //background: ${({primary})=>(primary ? '#fff' : '#814CFF')};
        background: ${({primary})=>(primary ? '#fff' : '#fff')};
        //color: ${({dark})=>(dark ? '#814cff':'#fff')};
        color: ${({dark})=>(dark ? '#814cff':'#814cff')};
        border-color: ${({primary})=>(primary ? '#814CFF':'#814CFF')};
    }
`

export const ButtonViolet = styled(Link)`
    border-radius: 50px;
    //background: ${({primary})=>(primary ? '#814CFF':'#010606')};
    background: ${({primary})=>(primary ? '#814CFF':'#814CFF')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=>(dark ? '#fff':'#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-stretch: expanded;
    font-weight: 300;
    border-style: solid;
    border-color: ${({primary})=>(primary ? '#814CFF':'#814CFF')};
    border-width: 1px;

    &:hover {
        transition: all 0.2s ease-in-out;
        //background: ${({primary})=>(primary ? '#fff' : '#814CFF')};
        background: ${({primary})=>(primary ? '#fff' : '#fff')};
        //color: ${({dark})=>(dark ? '#814cff':'#fff')};
        color: ${({dark})=>(dark ? '#814cff':'#814cff')};
        border-color: ${({primary})=>(primary ? '#814CFF':'#814CFF')};
    }
`

export const ButtonDiaphanous = styled(Link)`
    border-radius: 50px;
    //background: ${({primary})=>(primary ? '#814CFF':'#010606')};
    background: ${({primary})=>(primary ? '#e1e9ff':'#814cff')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=>(dark ? '#814cff':'#e1e9ff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none;
    //border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-stretch: expanded;
    font-weight: 300;
    padding-left: 84px;
    padding-right: 84px;
    margin-right: 30px;
    border-style: solid;
    border-color: ${({dark})=>(dark ? '#814cff':'#e1e9ff')};
    border-width: 1px;

    &:hover {
        transition: all 0.2s ease-in-out;
        //background: ${({primary})=>(primary ? '#fff' : '#814CFF')};
        background: ${({primary})=>(primary ? '#814cff' : '#e1e9ff')};
        //color: ${({dark})=>(dark ? '#814cff':'#fff')};
        color: ${({dark})=>(dark ? '#e1e9ff':'#814cff')};
        border-color: ${({dark})=>(dark ? '#e1e9ff':'#814cff')};
    }
`

export const ButtonDiaphanousInv = styled(Link)`
    border-radius: 50px;
    //background: ${({primary})=>(primary ? '#814CFF':'#010606')};
    background: ${({primary})=>(primary ? '#814cff':'#e1e9ff')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=>(dark ? '#e1e9ff':'#814cff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none;
    //border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-stretch: expanded;
    font-weight: 300;
    padding-left: 64px;
    padding-right: 64px;
    margin-right: 30px;
    border-style: solid;
    border-color: ${({dark})=>(dark ? '#e1e9ff':'#814cff')};
    border-width: 1px;

    &:hover {
        transition: all 0.2s ease-in-out;
        //background: ${({primary})=>(primary ? '#fff' : '#814CFF')};
        background: ${({primary})=>(primary ? '#e1e9ff' : '#814cff')};
        //color: ${({dark})=>(dark ? '#814cff':'#fff')};
        color: ${({dark})=>(dark ? '#814cff':'#e1e9ff')};
        border-color: ${({dark})=>(dark ? '#814cff':'#e1e9ff')};
    }
`

export const ButtonGray = styled(Link)`
    border-radius: 50px;
    //background: ${({primary})=>(primary ? '#814CFF':'#010606')};
    background: ${({primary})=>(primary ? '#9292a6':'#9292a6')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=>(dark ? '#e1e9ff':'#e1e9ff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-stretch: expanded;
    font-weight: 300;
    padding-left: 64px;
    padding-right: 64px;

    &:hover {
        transition: all 0.2s ease-in-out;
        //background: ${({primary})=>(primary ? '#fff' : '#814CFF')};
        background: ${({primary})=>(primary ? '#e1e9ff' : '#e1e9ff')};
        //color: ${({dark})=>(dark ? '#814cff':'#fff')};
        color: ${({dark})=>(dark ? '#814cff':'#814cff')};
    }
`