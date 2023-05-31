import React from 'react';
import { Header } from 'ui';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <Header text="Welcome to Meteor!"/>
    <Hello/>
    <Info/>
  </div>
);
