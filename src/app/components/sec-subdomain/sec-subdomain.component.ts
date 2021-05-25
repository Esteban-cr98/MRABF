import { Component, OnInit } from '@angular/core';

import { DominiosService } from '../../services/dominios.service'
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { EditsecsubdoComponent } from '../editsecsubdo/editsecsubdo.component';
import { EditappsComponent } from '../editapps/editapps.component';
import { AskComponent } from '../ask/ask.component';

import { trigger, style, animate, transition } from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sec-subdomain',
  templateUrl: './sec-subdomain.component.html',
  styleUrls: ['./sec-subdomain.component.css'],
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

export class SecSubdomainComponent implements OnInit {

  constructor(private dominiosService: DominiosService, private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog) { }
  subdos: any = [];
  secsubdos: any = [];
  apps: any = [];
  Title: any;
  idaux:any;
  idaux2:any;
  varAux:any = 0;
  templAux: any = 0;
  icono: string = "chevron_right";
  aplis: any = [];
  apliso: any = [];


  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.idaux = params.idB;
    this.idaux2 = params.idA;
    this.dominiosService.getSubdo(params.idA).subscribe(
      res => {
      this.subdos = res;
      if (this.subdos){
        for( var i = 0; i < this.subdos.length; i++){
          if (this.subdos[i].id==params.idB){
            this.Title = this.subdos[i].Nivel_name;
          }
        }
        this.dominiosService.getSecSubdo(params.idB).subscribe(res=> {
          this.secsubdos = res;
          if(this.secsubdos.length != 0){            
            console.log(res);
          }else{
            this.dominiosService.getApps(params.idB).subscribe(
              res => {
                this.apps = res;
                console.log(this.apps.length);                
                if(this.apps.length != 0){
                  this.router.navigate(['aplications/'+params.idA+'/'+params.idB]);
                  console.log("malas");
                }else{
                  this.dialog.open(AskComponent, {data: { idB: params.idB, idA:params.idA }});
                  console.log("buenas");
                  
                }
              },
              err => console.error(err)
            );
            
          }          
          
        },
        err => console.error(err)
        );
      }
    },
    err => console.error(err)
  );
  }

  onEdit(): void{
    const params = this.activatedRoute.snapshot.params;
    Swal.fire({
      title: '¿Qué deseas editar?',
      text: 'Capacidades o aplicaciones',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Capacidades',
      cancelButtonText: 'Aplicaciones'
    }).then((result) => {
      if (result.value) {
        this.dialog.open(EditsecsubdoComponent, {data: { idB: params.idB, idA:params.idA }});    

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.dialog.open(EditappsComponent, {data: { idB: params.idB, idA:params.idA, mode: 1 }});
      }
    })
    
  }

  onExpand(idShow:any): void{
    const params = this.activatedRoute.snapshot.params;
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
}
