import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'react-css-themr';
import { Button, BUTTON } from './Button';
import { Form } from './Form';
import buttonCss from './Button.css';

const theme = {
	[BUTTON]: buttonCss
};

storiesOf('RND.JS', module)
	.add('Button', () => (
		<ThemeProvider theme={theme}>
			<Button>Click me</Button>
		</ThemeProvider>
	))
	.add('Form', () => (
		<ThemeProvider theme={theme}>
			<Form></Form>
		</ThemeProvider>

	))