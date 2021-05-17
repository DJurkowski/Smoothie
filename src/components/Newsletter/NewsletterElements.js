import styled from 'styled-components';
import { hoverColor, mainColor, secondFontFamily } from '../../utils/globalStyles/globalStyles';

export const NewsletterContainer = styled.div`
    height: auto;
    padding: 0 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NewsletterHeader = styled.h2`
    text-align: center;
    font-size: 3rem;
    color: #000;
    margin-bottom: 64px;
`;

export const HeaderSpecial = styled.span`
    font-family: 'Caveat', cursive;
    font-size: 4rem;
    color: ${mainColor};
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 60px 40px;
    background: #fff;
    box-shadow: 0px 0px 7px 10px rgba(246, 83, 83, 0.25);
    border-radius: 20px;
    min-width: 500px;
    width: fit-content;

    @media screen and (max-width: 610px) {
        max-width: 400px;
        min-width: 400px;
    }

    @media screen and (max-width: 530px) {
        max-width: 300px;
        min-width: 300px;
    }
`;
export const FormItem = styled.div`
    width: 100%;
    margin-bottom: 20px;

    @media screen and (max-width: 610px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media screen and (max-width: 320px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
    margin-left: 15px;
    color: #2f2e41;

    @media screen and (max-width: 530px) {
        align-self: flex-start;
    }
`;

export const FormInput = styled.input`
    display: block;
    outline: none;
    padding: 0 1rem;
    border-radius: 50px;
    height: 50px;
    width: 100%;
    border: 2px solid ${mainColor};
    color: #000;
    background: #fff;

    &::placeholder {
        color: #898886;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #898886;
    }

    &::-ms-input-placeholder {
        color: #898886;
    }

    @media screen and (max-width: 320px) {
        max-width: 200px;
        min-width: 200px;
    }
`;
export const FormButton = styled.button`
    border-radius: 50px;
    margin-right: 7px;
    background: ${mainColor};
    white-space: nowrap;
    padding: 5px 2rem;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    font-family: ${secondFontFamily};
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    align-self: flex-end;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${hoverColor};
        color:  #fff;
    }

    @media screen and (max-width: 530px) {
        align-self: flex-end;
    }
`;

export const ErrorMessage = styled.p`
    color: rgba(217, 43, 43, 1);
    font-weight: bold;
    margin: 10px 0 0 16px;

`;