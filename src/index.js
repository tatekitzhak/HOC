import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/app.js';

// Test import of a JavaScript module
import { example } from '@/js/example'
import {higher_order_unctions} from '@/js/hof'
// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'




const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

