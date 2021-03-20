/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

 import { NgxMatDateAdapter, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
 import { NgModule } from '@angular/core';
 import { MAT_DATE_LOCALE } from '@angular/material/core';
 import { NgxMatLuxonDatetimeAdapter, NGX_MAT_LUXON_DATE_ADAPTER_OPTIONS } from './luxon-adapter';
 import { NGX_MAT_LUXON_FORMATS } from './luxon-formats';
 
 @NgModule({
   providers: [
	 {
	   provide: NgxMatDateAdapter,
	   useClass: NgxMatLuxonDatetimeAdapter,
	   deps: [MAT_DATE_LOCALE, NGX_MAT_LUXON_DATE_ADAPTER_OPTIONS]
	 }
   ],
 })
 export class NgxLuxonDatetimeModule { }
 
 
 @NgModule({
   imports: [NgxLuxonDatetimeModule],
   providers: [{ provide: NGX_MAT_DATE_FORMATS, useValue: NGX_MAT_LUXON_FORMATS }],
 })
 export class NgxMatLuxonModule { }