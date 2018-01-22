import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// service
import { ImageService} from './image/shared/image.service';
//Pipe
import { ImageFilterPipe } from './image/shared/filter.pipe';
// router
import {appRoutes} from '../route';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe], // provide service & pipe
  bootstrap: [AppComponent]
})
export class AppModule { }
