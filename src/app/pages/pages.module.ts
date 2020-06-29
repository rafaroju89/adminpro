import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms"

//RUTAS
import { PAGES_ROUTES } from './pages.routes';

//MODULES
import { SharedModule } from '../shared/share.module';

//ng2- charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaComponent } from '../components/grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

@NgModule({
  declarations:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficaComponent,
    AccountSettingsComponent,
    PromesasComponent

  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule

  ]
})

export class PagesModule{}
