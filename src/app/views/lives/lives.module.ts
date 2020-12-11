import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';
import { HomeComponent } from './home/home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import { LiveListComponent } from './home/live-list/live-list.component';
import { LiveFormDialogComponent } from './home/live-form-dialog/live-form-dialog.component';
import { LocalDateTimePipe } from '../../shared/pipe/local-date-time.pipe';


@NgModule({
  declarations: [HomeComponent, LiveListComponent, LiveFormDialogComponent, LocalDateTimePipe],
  imports: [
    CommonModule,
    LivesRoutingModule,

    MatProgressBarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatChipsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [
    LocalDateTimePipe
  ],
})
export class LivesModule { }
