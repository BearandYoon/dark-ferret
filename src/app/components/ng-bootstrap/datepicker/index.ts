import {NgbdDatepickerAdapterComponent} from './adapter/datepicker-adapter';
import {NgbdDatepickerBasicComponent} from './basic/datepicker-basic';
import {NgbdDatepickerConfigComponent} from './config/datepicker-config';
import {NgbdDatepickerI18nComponent} from './i18n/datepicker-i18n';
import {NgbdDatepickerDisabledComponent} from './disabled/datepicker-disabled';
import {NgbdDatepickerPopupComponent} from './popup/datepicker-popup';
import {NgbdDatepickerCustomdayComponent} from './customday/datepicker-customday';
import {NgbdDatepickerMultipleComponent} from './multiple/datepicker-multiple';
import {NgbdDatepickerCalendarsComponent, NgbdIslamicCivilComponent, NgbdIslamicUmalquraComponent} from './calendars/datepicker-calendars';
import {NgbdDatepickerRangeComponent} from './range/datepicker-range';

export const DATEPICKER_DIRECTIVES = [
  NgbdDatepickerBasicComponent, NgbdDatepickerPopupComponent, NgbdDatepickerDisabledComponent, NgbdDatepickerI18nComponent,
  NgbdDatepickerCustomdayComponent, NgbdDatepickerConfigComponent, NgbdDatepickerMultipleComponent, NgbdDatepickerCalendarsComponent,
  NgbdDatepickerRangeComponent, NgbdIslamicCivilComponent, NgbdIslamicUmalquraComponent, NgbdDatepickerAdapterComponent
];
