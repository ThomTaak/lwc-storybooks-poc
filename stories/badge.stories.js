import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Badge from 'lightning/badge';

buildAndRegisterCustomElement('lightning-badge', Badge);

storiesOf('Badge', module)
    .add('default', () => `
        <div class="slds-p-around_medium">
            <lightning-badge label="Default"></c-badge>
        </div>
    `)
    .add('inverse', () => `
        <div class="slds-p-around_medium">
            <lightning-badge variant="inverse" label="Inverse"></c-badge>
        </div>
    `)
    .add('lightest', () => `
        <div class="slds-p-around_medium">
            <lightning-badge variant="lightest" label="Lightest"></c-badge>
        </div>
    `);
