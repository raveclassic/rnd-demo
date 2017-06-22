import React from 'react';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import { Icon } from './Icon.jsx';

export const BUTTON = Symbol('BUTTON');

export const RawButton = ({ theme, ...props }) => {
    return (
        <button {...props} className={theme.container}>
            <Icon className={theme.icon} />
            {props.children}
        </button>
    )
};

export const Button = themr(BUTTON)(RawButton);