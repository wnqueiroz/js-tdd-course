import React from 'react';
import Component from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with lyef name', () => (
        <Component name="lyef" />
    ))
    .add('with another name', () => (
        <Component name="another" />
    ))
    .add('with TDD name', () => (
        <Component name="TDD" />
    ));
