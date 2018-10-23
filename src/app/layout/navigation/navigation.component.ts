import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isNavigationOpen = false;
  constructor() {}

  public ngOnInit() {}

  public toggleNavigation() {
    this.isNavigationOpen = !this.isNavigationOpen;
  }
}
