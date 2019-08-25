import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import { animateHTML } from './components/FadeInOnView.jsx'

ReactDOM.render(
    <App />,
    document.getElementById('react-container')
);

// when things with class hidden are in view, fade them in (used for Schedules)
animateHTML().init();