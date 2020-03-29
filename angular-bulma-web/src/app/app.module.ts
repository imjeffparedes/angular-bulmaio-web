// Importing app modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importing app components/directives
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing app moules
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/components/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
