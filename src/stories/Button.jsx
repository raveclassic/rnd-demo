import React from 'react';
import cx from 'classnames';
import { themr } from 'react-css-themr';

export const BUTTON = Symbol('BUTTON');

export const RawButton = ({ theme, ...props }) => {
    return (
        <button {...props} className={theme.container}>
            <span className={theme.icon}>I</span>
            {props.children}
        </button>
    )
};

export const Button = themr(BUTTON)(RawButton);