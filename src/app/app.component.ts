import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Table One',
        icon: 'pi pi-home',
        routerLink:'/'
      },
      {
        label: 'Table Two',
        icon: 'pi pi-table',
        routerLink:'optionTwo'
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        routerLink:'search'
      },
    ]
  }
}