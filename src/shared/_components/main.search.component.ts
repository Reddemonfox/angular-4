import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as Rx from 'rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: 'app-main-search',
  templateUrl: 'main.search.component.html',
  styleUrls: ['main.search.less']
})

export class MainSearchComponent implements OnDestroy, OnInit {
  searchText: String;
  private typeAheadEventEmitter = new Rx.Subject<string>();

  items = [
    {
      id: 1,
      displayName: 'search 1 item',
      name: 'search 1 item',
      category: {
        id: 1,
        name: 'Category 1'
      }
    },
    {
      id: 2,
      displayName: 'search 2 item',
      name: 'search 2 item',
      category: {
        id: 1,
        name: 'Category 1'
      }
    },
    {
      id: 3,
      displayName: 'search 3 item',
      name: 'search 3 item',
      category: {
        id: 2,
        name: 'Category 2'
      }
    },
    {
      id: 4,
      displayName: 'search 4 item',
      name: 'search 4 item',
      category: {
        id: 2,
        name: 'Category 2'
      }
    },
    {
      id: 5,
      displayName: 'search 5 item',
      name: 'search 5 item',
      category: {
        id: 10,
        name: 'Category 10'
      }
    },
    {
      id: 6,
      displayName: 'search 6 item',
      name: 'search 6 item',
      category: {
        id: 1,
        name: 'Category 1'
      }
    },
    {
      id: 7,
      displayName: 'search 7 item',
      name: 'search 7 item',
      category: {
        id: 1,
        name: 'Category 1'
      }
    },
    {
      id: 8,
      displayName: 'search 8 item',
      name: 'search 8 item',
      category: {
        id: 3,
        name: 'Category 3'
      }
    },
    {
      id: 9,
      displayName: 'search 9 item',
      name: 'search 9 item',
      category: {
        id: 1,
        name: 'Category 1'
      }
    },
    {
      id: 10,
      displayName: 'search 10 item',
      name: 'search 10 item',
      category: {
        id: 1,
        name: 'Category 1'
      }
    }
    ];
  indexHighlighted = -1;
  tempSearchedText: string;
  searchedItems: any = [];
  constructor() {
    // this.searchedItems = this.items;
  }
  searchTyped(event: Event): void {
    this.tempSearchedText = String(event);
    this.typeAheadEventEmitter.next(String(event));
  }

  keyDownMainSearch(event: Event): void {
    if (event['keyCode'] === 37 || event['keyCode'] === 39) {
      // for left and right arrow
    }
    if (event['keyCode'] === 13 && this.searchedItems.length && this.searchedItems[this.indexHighlighted]) {
      this.itemClicked(this.searchedItems[this.indexHighlighted], 0);
    }
    if (event['keyCode'] === 40 && this.searchedItems.length) {
      this.indexHighlighted++;
      if ((this.searchedItems.length) < this.indexHighlighted) {
        this.indexHighlighted = 0;
        this.searchText = this.tempSearchedText;
      }else if ((this.searchedItems.length - 1) < this.indexHighlighted) {
          this.indexHighlighted = this.searchedItems.length;
          this.searchText = this.tempSearchedText;
      }else {
        this.searchText = this.searchedItems[this.indexHighlighted].name;
      }
      event.preventDefault();
    }
    if (event['keyCode'] === 38 && this.searchedItems.length) {
      this.indexHighlighted--;
      if (this.indexHighlighted < -1 ) {
        this.indexHighlighted = this.searchedItems.length - 1;
        this.searchText = this.tempSearchedText;
      }else if (this.indexHighlighted < 0 ) {
        this.indexHighlighted = -1;
        this.searchText = this.tempSearchedText;
      }else {
        this.searchText = this.searchedItems[this.indexHighlighted].name;
      }
      event.preventDefault();
    }
  }
  itemClicked(item, index = 0): void {
    this.searchText = this.tempSearchedText = item.name;
    this.searchedItems = [];
  }
  ngOnInit() {
    this.typeAheadEventEmitter
      .debounceTime(400)
      .subscribe(results => {
      this.applyFilter(results);
    }, error => {
    });
  }
  applyFilter(val: string) {
    const result = [];
    const valToCheck = val.replace(/\s/g, '').toLocaleLowerCase();
    if (!valToCheck.length) {
      this.searchedItems = result;
      return result;
    }
    let item = {};
    for (const i in this.items) {
      if (this.items[i].name.replace(/\s/g, '').indexOf(valToCheck) > -1) {
        item = this.items[i];
        item['displayName'] = item['name'].replace(val.toLocaleLowerCase(), '<span class="font-400">' + val + '</span>');
        result.push(item);
      }
    }
    this.searchedItems = result;
  }

  onClickedOutsideMainSearch(event: Event) {
    this.searchedItems = [];
  }

  ngOnDestroy(): void {
    // un subscribe on destroy to prevent memory leaks
    this.typeAheadEventEmitter.unsubscribe();
  }
}
