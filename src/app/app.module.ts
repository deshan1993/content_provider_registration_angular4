import { NgModule, APP_INITIALIZER } from '@angular/core'
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { NgUploaderModule } from 'ngx-uploader';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';
import { DndModule } from 'ng2-dnd';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { LocalStorageModule } from 'angular-2-local-storage';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from './modules/shared.module';

import { AboutComponent } from './views/pages/core/about/about.component';
import { HomeComponent } from './views/pages/core/home/home.component';
import { ContactComponent } from './views/pages/core/contact/contact.component';
import { UserDashboardComponent } from './views/pages/core/userdashboard/userdashboard.component';


import { Content_providerComponent} from './views/forms/content_provider/content_provider.component';

import { StartupService } from './services/settings/application-startup.service';

import { ToastService } from './services/toast/toast.service';
import { ToastCommunicationService } from './services/toast/toast-communication.service';

import { DialogsService } from './services/dialog/dialogs.service';
import { DialogsModule } from './services/dialog/dialogs.module';

import { LocalStorageStore } from './services/storage/local-storage.service';
import { DataTableComponent } from './views/widgets/widget/data-table/data-table.component';

import 'hammerjs';
// d3 and nvd3 should be included somewhere
import 'd3';
import { ContentProviderComponent } from './views/pages/core/content-provider/create-content-provider/content-provider.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, 'app/globalization/', '.json');
}

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    DataTableComponent,
    UserDashboardComponent,
    ContentProviderComponent,
    Content_providerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
    }),
    ToastyModule.forRoot(), 
    DndModule.forRoot(), 
    SlimLoadingBarModule.forRoot(),
    DialogsModule,
    LocalStorageModule.withConfig({
        prefix: 'iecd-citizen-app',
        storageType: 'localStorage'
    }),
    NgxDatatableModule,
    NgUploaderModule,
    NgxChartsModule
  ],
  providers: [
    StartupService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    ToastService,
    ToastCommunicationService,
    DialogsService,
    LocalStorageStore
  ],
  exports: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
