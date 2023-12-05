import { createTheme } from "@mantine/core";

import {Inter} from 'next/font/google'  
const inter = Inter({subsets: ['latin']})

export const theme = createTheme({
  primaryColor: 'deepBlue',
  colors: {
    'deepBlue': [
    '#ebf5ff',
    '#d5e7fa',
    '#a5cef7',
    '#72b4f6',
    '#4e9df5',
    '#3b90f5',
    '#3289f6',
    '#2776dc',
    '#1c69c4',
    '#005aad'
  ]
  },
  fontFamily: 'Noto Sans, sans-serif',
        fontFamilyMonospace: 'Noto Sans, sans-serif',
        headings: { fontFamily: 'Noto Sans, sans-serif' },
  });
