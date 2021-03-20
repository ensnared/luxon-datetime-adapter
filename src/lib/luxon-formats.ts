/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

 import { NgxMatDateFormats } from '@angular-material-components/datetime-picker';

 const DEFAULT_DATE_INPUT = 'yyyy-LL-dd HH:mm:ss';
 
 export const NGX_MAT_LUXON_FORMATS: NgxMatDateFormats = {
   parse: {
	 dateInput: DEFAULT_DATE_INPUT,
   },
   display: {
	 dateInput: DEFAULT_DATE_INPUT,
	 monthYearLabel: 'LLL yyyy',
	 dateA11yLabel: 'fff',
	 monthYearA11yLabel: 'LLLL yyyy',
   },
 };