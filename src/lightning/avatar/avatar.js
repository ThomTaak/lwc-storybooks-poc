import { LightningElement, api, track } from 'lwc';
import { classSet } from 'lightning/utils';
import { classListMutation, normalizeString } from 'lightning/utilsPrivate';
import { computeSldsClass } from 'lightning/iconUtils';

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'square';

export default class cAvatar extends LightningElement {
    @api alternativeText = '';

    @api fallbackIconName;

    @api initials;

    @track _size = DEFAULT_SIZE;
    @track _src = '';
    @track _variant = DEFAULT_VARIANT;

    @api get size() {
        return this._size;
    }
    set size(value) {
        this._size = normalizeString(value, {
            fallbackValue: DEFAULT_SIZE,
            validValues: ['x-small', 'small', 'medium', 'large']
        });

        this.updateClassList();
    }

    @api get src() {
        return this._src;
    }
    set src(value) {
        this._src = (typeof value === 'string' && value.trim()) || '';
    }

    @api get variant() {
        return this._variant;
    }
    set variant(value) {
        this._variant = normalizeString(value, {
            fallbackValue: DEFAULT_VARIANT,
            validValues: ['circle', 'square']
        });

        this.updateClassList();
    }

    connectedCallback() {
        this.updateClassList();
    }

    updateClassList() {
        const size = this._size;
        const variant = this._variant;
        const classes = classSet('slds-avatar')
            .add({
                'slds-avatar_x-small': size === 'x-small',
                'slds-avatar_small': size === 'small',
                'slds-avatar_medium': size === 'medium',
                'slds-avatar_large': size === 'large'
            })
            .add({
                'slds-avatar_circle': variant === 'circle'
            });

        classListMutation(this.classList, classes);
    }

    get computedInitialsClass() {
        return classSet('slds-avatar__initials')
            .add(computeSldsClass(this.fallbackIconName))
            .toString();
    }

    get showInitials() {
        return !this._src && this.initials;
    }

    get showIcon() {
        return !this._src && !this.initials;
    }

    handleImageError(event) {
        // eslint-disable-next-line no-console
        console.warn(
            `<lightning-avatar> Image with src="${event.target.src}" failed to load.`
        );

        this._src = '';
    }
}
