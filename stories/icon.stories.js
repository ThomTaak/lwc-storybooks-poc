import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Icon from 'lightning/icon';

buildAndRegisterCustomElement('lightning-icon', Icon);

storiesOf('Icon', module)
    .add('action', () => `
        <div class="slds-p-around_medium">
            <lightning-icon icon-name="action:approval"></c-icon>
            <lightning-icon icon-name="action:back"></c-icon>
            <lightning-icon icon-name="action:call"></c-icon>
        <div class="slds-p-around_medium">
    `)
    .add('doctype', () => `
        <div class="slds-p-around_medium">
            <lightning-icon icon-name="doctype:ai"></c-icon>
            <lightning-icon icon-name="doctype:excel"></c-icon>
            <lightning-icon icon-name="doctype:folder"></c-icon>
        <div class="slds-p-around_medium">
    `)
    .add('standard', () => `
        <div class="slds-p-around_medium">
            <lightning-icon icon-name="standard:account"></c-icon>
            <lightning-icon icon-name="standard:address"></c-icon>
            <lightning-icon icon-name="standard:all"></c-icon>
        <div class="slds-p-around_medium">
    `)
    .add('utitlity', () => `
        <div class="slds-p-around_medium">
            <lightning-icon icon-name="utility:activity"></c-icon>
            <lightning-icon icon-name="utility:alert"></c-icon>
            <lightning-icon icon-name="utility:emoji"></c-icon>
        <div class="slds-p-around_medium">
    `);
