import { Component, OnInit } from '@angular/core';

import { DominiosService } from '../../services/dominios.service';

import { MatDialog } from '@angular/material/dialog';
import { EditservComponent } from '../editserv/editserv.component';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  Servicios: any = [];

  constructor(private dominiosService: DominiosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dominiosService.getServices().subscribe(
      res => {
        this.Servicios = res;
      },
      err => console.error(err)
    );
  }

  onEdit(): void{
    this.dialog.open(EditservComponent);
  }

  onTree(): void{
    this.dialog.open(EditservComponent);
  }

}
