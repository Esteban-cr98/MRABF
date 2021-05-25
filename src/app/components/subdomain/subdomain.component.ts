import { Component, OnInit } from '@angular/core';

import { DominiosService } from '../../services/dominios.service'
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { EditsubdoComponent } from '../editsubdo/editsubdo.component';
import { EditappsComponent } from '../editapps/editapps.component';
import { trigger, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-subdomain',
  templateUrl: './subdomain.component.html',
  styleUrls: ['./subdomain.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class SubdomainComponent implements OnInit {

  constructor(private dominiosService: DominiosService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }

  Servicios: any = [];
  subdos: any = [];
  Title: any;
  auxid: any;
  auxApps: any = [];
  aplis: any = [];
  apliso: any = [];
  auxAll: any = [];
  mode:any = 0;
  auxidsub:any =0;
  auxnamesub:any = "";
  icono: string = "chevron_right";
  templAux: any = 0;
  varAux:any = 0;
  capApp:any = 0;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.dominiosService.getServices().subscribe(
      res => {
        this.Servicios = res;
        this.auxid = params.id;
        if (this.Servicios){
          for( var i = 0; i < this.Servicios.length; i++){
            if (this.Servicios[i].id==params.id){
              this.Title = this.Servicios[i].Serv_name;
            }
          }
        }
        this.dominiosService.getSubdo(params.id).subscribe(
          res => {
            this.subdos = res;
            this.dominiosService.getRelaApps().subscribe(
              res=>{

                this.auxApps = res;
                for(var i = 0; i < this.subdos.length; i++){
                  this.auxidsub = this.subdos[i].id;
                  this.auxnamesub = this.subdos[i].Nivel_name;
                  this.mode = 0;
                  for(var j = 0; j < this.auxApps.length; j++){
                    if(this.auxApps[j].id_lvl == this.auxidsub){
                      this.mode = 1;
                    }
                  }
                  this.auxAll.push({
                    name : this.auxnamesub,
                    mode : this.mode,
                    id: this.auxidsub
                  });
                }
              },
              err => console.error(err)
            );
                 
          },
          err => console.error(err)
        );
      },
      err => console.error(err)
    );

  }

  onExpand(idShow:any): void{
    if(this.varAux == 0){
      this.icono = "expand_more";
      this.varAux = 1;
      this.templAux = idShow;
      this.dominiosService.getApps(idShow).subscribe(
        res => {
          this.aplis = res;
          this.dominiosService.getAppso(idShow).subscribe(
            res => {
              this.apliso = res;
            },
            err => console.error(err)
          );
        },
        err => console.error(err)         
      );
      
    }
    else if(this.varAux == 1){
      this.icono = "chevron_right";
      this.varAux = 0;
      this.templAux = 0;
    }
  }


  onEdit(): void{
    const params = this.activatedRoute.snapshot.params;
    this.capApp = 0;
    for (var i = 0; i < this.auxAll.length; i++){
      if(this.auxAll[i].mode == 1){
        this.capApp = 1;
      }
    }
    if(this.capApp == 0){
      this.dialog.open(EditsubdoComponent, {data: { id: params.id }});
    }
    else if (this.capApp == 1){
      Swal.fire({
        title: '¿Qué deseas editar?',
        text: 'Capacidades o aplicaciones',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Capacidades',
        cancelButtonText: 'Aplicaciones'
      }).then((result) => {
        if (result.value) {
          this.dialog.open(EditsubdoComponent, {data: { id: params.id }});    
  
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.dialog.open(EditappsComponent, {data: { idB: params.id, idA:0, mode: 0 }});
        }
      })
    }
    

    
  }
}
