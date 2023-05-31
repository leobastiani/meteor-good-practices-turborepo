import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import { Header } from 'ui';

export const App = () => (
  <div>
    <Header text="Welcome to Meteor!"/>
    <Hello />
    <Info />
  </div>
);
