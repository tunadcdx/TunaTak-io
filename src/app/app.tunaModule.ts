import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from '@Source/app/Layout/root/root.component';
import { NavigationComponent } from '@Source/app/Layout/navigation/navigation.component';

@NgModule({
  declarations: [RootComponent, NavigationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
