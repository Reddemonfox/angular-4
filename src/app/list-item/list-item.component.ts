import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {

  showQuickViewButton = false;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const quickViewDialogRef = this.dialog.open(ListItemQuickViewComponent, {
      data: { name: 'name', animal: 'ani' }
    });
    quickViewDialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-list-item-quick-view',
  templateUrl: './list-quick-view.html',
  styleUrls: ['./list-quick-view.less']
})

export class ListItemQuickViewComponent implements OnInit {

  showRelatedItems = false;
  constructor( public dialogRef: MatDialogRef<ListItemQuickViewComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any ) {
    setTimeout(() => {
      this.showRelatedItems = true;
    }, 1000);
  }

  ngOnInit() {
  }

  onClose(result): void {
    this.showRelatedItems = false;
    this.dialogRef.close(result);
  }

}
