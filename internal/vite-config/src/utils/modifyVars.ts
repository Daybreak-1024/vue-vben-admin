import { resolve } from 'node:path';

import { generate } from '@ant-design/colors';
// @ts-ignore: typo
import { getThemeVariables } from 'ant-design-vue/dist/theme';

export const primaryColor = '#0077EE';

function generateAntColors(color: string, theme: 'default' | 'dark' = 'default') {
  return generate(color, {
    theme,
  });
}

/**
 * less global variable
 */
export function generateModifyVars() {
  const palettes = generateAntColors(primaryColor);
  const primary = palettes[5];

  const primaryColorObj: Record<string, string> = {};

  for (let index = 0; index < 10; index++) {
    primaryColorObj[`primary-${index + 1}`] = palettes[index];
  }

  const modifyVars = getThemeVariables();
  return {
    ...modifyVars,
    // reference:  Avoid repeated references
    hack: `${modifyVars.hack} @import (reference) "${resolve('src/design/config.less')}";`,

    // 米度规范定制
    // >>> Primary
    'primary-color': primary,
    'primary-color-hover': '#3d99f5',
    'primary-color-active': '#0058cd',
    'primary-color-deprecated-bg': '#b2d6f9',
    'primary-color-deprecated-border': '#e5f1fd',

    'info-color': primary,
    'info-color-deprecated-bg': '#e5f1fd',
    'info-color-deprecated-border': '#b2d6f9',

    'processing-color': primary,
    // >>> Success
    'success-color': '#13bd6e', //  Success color
    'success-color-hover': '#59d099',
    'success-color-active': '#009e54',
    'success-color-deprecated-bg': '#e7f8f0',
    'success-color-deprecated-border': '#89deb6',

    // >>> Warning
    'warning-color': '#e37b21', //   Warning color
    'warning-color-hover': '#fda251',
    'warning-color-active': '#ca6e1d',
    'warning-color-deprecated-bg': '#fef3e9',
    'warning-color-deprecated-border': '#fed0a8',
    // >>> Error
    'error-color': '#e34d59', //  False color
    'error-color-hover': '#f36d78', //  False color
    'error-color-active': '#c9353f', //  False color
    'error-color-deprecated-bg': '#fdecee', //  False color
    'error-color-deprecated-border': '#f8b9be', //  False color

    //'border-color-base': '#EEEEEE',
    'font-size-base': '14px', //  Main font size
    'border-radius-base': '2px', //  Component/float fillet
    'link-color': primary, //   Link color
    'app-content-background': '#fafafa', //   Link color

    'text-color': 'rgba(0, 0, 0, 0.90)',
    'text-color-secondary': 'rgba(0, 0, 0, 0.6)',

    //primary
    'primary-1': '#FAFAFA',
    'primary-2': '#CCE4FC',
    'primary-3': '#B2D6F9',
    'primary-4': '#99C9F8',
    'primary-5': '#7FBBF6',
    'primary-6': '#3D99F5',
    'primary-7': '#0077EE',
    'primary-8': '#0068D1',
    'primary-9': '#0058CD',
    'primary-10': '#01369E',
    //...primaryColorObj

    //red
    'red-1': '#FDECEE',
    'red-2': '#F9D7D9',
    'red-3': '#F8B9BE',
    'red-4': '#F78D94',
    'red-5': '#F36D78',
    'red-6': '#E34D59',
    'red-7': '#C9353F',
    'red-8': '#B11F26',
    'red-9': '#951114',
    'red-10': '#680506',

    //orange
    'orange-1': '#FEF3E9',
    'orange-2': '#FFE8D3',
    'orange-3': '#FED0A8',
    'orange-4': '#FEB97C',
    'orange-5': '#FDA251',
    'orange-6': '#E37B21',
    'orange-7': '#CA6E1D',
    'orange-8': '#B0580A',
    'orange-9': '#8C4100',
    'orange-10': '#6A3100',

    //yellow
    'yellow-1': '#FFFFE5',
    'yellow-2': '#FFFFC0',
    'yellow-3': '#FFFF99',
    'yellow-4': '#FFFF4D',
    'yellow-5': '#F8F800',
    'yellow-6': '#E8E801',
    'yellow-7': '#C5C502',
    'yellow-8': '#A2A200',
    'yellow-9': '#787801',
    'yellow-10': '#4D4D00',

    //green
    'green-1': '#E7F8F0',
    'green-2': '#B8EBD3',
    'green-3': '#89DEB6',
    'green-4': '#59D099',
    'green-5': '#13BD6E',
    'green-6': '#009E54',
    'green-7': '#038247',
    'green-8': '#006838',
    'green-9': '#00532C',
    'green-10': '#01391E',

    'border-color-base': '#D9D9D9',

    //table 米度规范定制
    'table-padding-vertical': '12px',
    'table-row-hover-bg': 'rgba(0, 102, 214, 0.06)',
    'table-selected-row-bg': '#FAFAFA',
    // 'table-border-color': 'transparent',

    // ...primaryColorObj,
    'input-border-color': 'rgba(0,0,0,0.15)',

    'item-hover-bg': 'rgba(0, 102, 214, 0.06)',

    //form
    'label-required-color': '#C9353F',
    'label-color': 'rgba(0,0,0,0.6);',
  };
}
