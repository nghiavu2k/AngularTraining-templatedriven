import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'newApp';
  list = []
  tableData: any;
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'email', 'career', 'hobby', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Hero[]>();



  addH(data: any) {
    debugger
    if (data.id === null) {
      data.id = this.list.length + 1
      this.list.push(data)
    }
    else {
      for (let d in this.list) {
        if (this.list[d].id === data.id) {
          this.list.splice(Number(d), 1, data)
        }
      }
    }
    this.dataSource.data = this.list
  }

  delete(id) {
    for (let i = 0; i < this.list.length; ++i) {
      if (this.list[i].id === id) {
        this.dataSource.data.splice(i, 1);
        this.dataSource._updateChangeSubscription()
      }
    }
  }
  
  update(id) {
    const data = this.list.find(e => e.id = id)
    this.tableData = data
  }

}
