import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Avatar from 'lightning/avatar';

buildAndRegisterCustomElement('lightning-avatar', Avatar);

storiesOf('Avatar', module)
    .add('with initials', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <lightning-avatar initials="RG" fallback-icon-name="custom:custom92"></lightning-avatar>
        </div>
    `)
    .add('with image', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <lightning-avatar src="assets/images/avatar1.jpg"></lightning-avatar>
        </div>
    `)
    .add('with icon', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <lightning-avatar fallback-icon-name="standard:account"></lightning-avatar>
        </div>
    `)
    .add('variants', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <lightning-avatar variant="circle" src="assets/images/avatar1.jpg"></lightning-avatar>
            <lightning-avatar variant="square" src="assets/images/avatar1.jpg"></lightning-avatar>
        </div>
    `);

