import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/app.js';
import webpackLogo from '@/images/webpack-logo.svg';

import AppHoc1 from '@/components/pagesHoc1/AppHoc1';

import CounterA from '@/components/CounterA.js';
import CounterB from '@/components/CounterB';
import CounterC from '@/components/CounterC';

// Test import of styles
import '@/styles/index.scss'




const container = document.getElementById('root');
const root = createRoot(container);
/* 
root.render(
    <>
        <CounterA app="CounterA" />
        <CounterB app="CounterB" />
        <CounterC app="CounterC" />
    </>);
 */

root.render(
    <>
        <AppHoc1/>
    </>);
