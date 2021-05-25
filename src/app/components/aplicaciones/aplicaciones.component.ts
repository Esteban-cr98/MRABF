import { Component, OnInit } from '@angular/core';

import { DominiosService } from '../../services/dominios.service';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { EditappsComponent } from '../editapps/editapps.component';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css']
})

export class AplicacionesComponent implements OnInit {

  constructor(private dominiosService: DominiosService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }
  secsubdos: any = [];
  aplis: any = [];
  apliso: any = [];
  Title: any;

  ngOnInit(): void {
    /*const params = this.activatedRoute.snapshot.params;

    this.dominiosService.getSecSubdo(params.idB).subscribe(
      res => {
        this.secsubdos = res;
        if (this.secsubdos){
          for( var i = 0; i < this.secsubdos.length; i++){
            if (this.secsubdos[i].id==params.idA){
              this.Title = this.secsubdos[i].Nivel_name;
            }
          }
        }

        this.dominiosService.getApps(params.idA).subscribe(
          res => {
            this.aplis = res;
            this.dominiosService.getAppso(params.idA).subscribe(
              res => {
                this.apliso = res;
              },
              err => console.error(err)
            );
          },
          err => console.error(err)         
        );

      },
      err => console.error(err)
    );*/
  }
  onEdit(): void{
    const params = this.activatedRoute.snapshot.params;
    this.dialog.open(EditappsComponent, {data: { idB: params.idB, idA:params.idA }});
  }
  

}
