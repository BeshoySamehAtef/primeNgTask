import { Component } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  searchTerm: string = '';
  searchTimeout: any;
  data = [
    { name: 'Mohamed', age: 30 },
    { name: 'Yasser', age: 35 },
    { name: 'Mahmoud', age: 27 },
    { name: 'Alaa', age: 28 },
    { name: 'Omar', age: 33 }
  ];
  filteredResults = this.data;

  // triggered on input 
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement.value;

    // clear previous timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // set a new timeout to trigger search after 2 seconds
    this.searchTimeout = setTimeout(() => {
      this.filteredResults = this.filterResults(this.searchTerm);
    }, 2000);
  }

  // triggered when press (Enter)
  onSearchEnter() {
    this.filteredResults = this.filterResults(this.searchTerm);

    // clear timeout when we press enter
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout); 
    }
  }

  // filter function
  filterResults(searchTerm: string) {
    return this.data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}