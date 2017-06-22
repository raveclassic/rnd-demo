import React from 'react';
import { Button } from './Button';

import { themr, themeable } from 'react-css-themr';
import css from './Form.css';
import submit from './FormSubmit.css';

const buttonTheme = {
    icon: css.icon
};

export const RawForm = ({ theme }) => (
    <form className={theme.container}>
        <Button theme={theme.Submit}>Submit</Button>
    </form>
);

const theme = themeable(css, {
    Submit: submit
});

export const Form = themr(Symbol(), theme)(RawForm);