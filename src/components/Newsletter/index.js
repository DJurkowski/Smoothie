import React from 'react';
import useForm from '../../utils/hooks/useForm';
import validateForm from '../../utils/hooks/validateForm';
import { NewsletterContainer, NewsletterHeader, HeaderSpecial, FormWrapper, FormItem, FormLabel, FormInput, FormButton, ErrorMessage } from './NewsletterElements';

const Newsletter = () => {

    const { handleChange, values, handleSubmit, errors } = useForm(validateForm);

    return (
        <NewsletterContainer id="newsletter">
            <NewsletterHeader>Sign up for out <HeaderSpecial>Newsletter</HeaderSpecial></NewsletterHeader>
            <FormWrapper onSubmit={handleSubmit}>
            <FormItem>
                <FormLabel htmlFor="username">Name</FormLabel>
                    <FormInput
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        value={values.username}
                        onChange={handleChange}
                    ></FormInput>
                    {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    ></FormInput>
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormItem>
                <FormButton type="submit">
                    Send
                </FormButton>
            </FormWrapper>
        </NewsletterContainer>
    );
};

export default Newsletter;
