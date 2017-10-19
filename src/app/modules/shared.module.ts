import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


import { HttpModule, Http,XHRBackend,RequestOptions } from '@angular/http';


@NgModule({
  imports:      [ 
    CommonModule,
    HttpModule    
  ],
  declarations: [ 
 ],
  exports:      [ 
    CommonModule, 
    HttpModule,
    TranslateModule,
  ]
})
export class SharedModule { }