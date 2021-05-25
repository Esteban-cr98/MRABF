import { Component, OnInit } from '@angular/core';

import { DominiosService } from '../../services/dominios.service';
import { Inject } from '@angular/core'; 
import { MatDialog } from '@angular/material/dialog';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsecsubdo',
  templateUrl: './editsecsubdo.component.html',
  styleUrls: ['./editsecsubdo.component.css'],
  template: 'passed in {{ data.idB, data.idA }}'
})
export class EditsecsubdoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {idB: string, idA:string}, private dominiosService: DominiosService, private dialog: MatDialog) { }

  public secSubdom = {
    name: '',
    idDel:'',
    idEdi:'',
    nameEdi:''
  };

  aux: any = {};
  subdos: any = [];
  secsubdos: any = [];
  Title: any;

  ngOnInit(): void {
    const params = this.data;
    this.dominiosService.getSubdo(params.idA).subscribe(
      res => {
      this.subdos = res;
      if (this.subdos){
        for( var i = 0; i < this.subdos.length; i++){
          if (this.subdos[i].id==params.idB){
            this.Title = 'Editar '+this.subdos[i].Nivel_name;
          }
        }
        this.dominiosService.getSecSubdo(params.idB).subscribe(res=> {
          this.secsubdos = res;
          console.log(res);         
        },
        err => console.error(err)
        );
      }
    },
    err => console.error(err)
  );
  }

  onClose(): void {
    this.dialog.closeAll();
  }

  onSave (): void {
    this.aux={ idB:this.data.idB, idA:this.data.idA, secSubdo:this.secSubdom.name }
    this.dominiosService.postSecSubdo(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onEdit (): void {
    this.dominiosService.updateSecSubdo(this.secSubdom.idEdi, this.secSubdom).subscribe(
      res=>{
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onDelete (): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'No podrá recuperarlo si lo elimina.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'No, mantenerlo'
    }).then((result) => {
      if (result.value) {
        this.dominiosService.deleteSecSubdo(this.secSubdom.idDel).subscribe(
          res => {
            //console.log(res);
            Swal.fire(
              '¡Eliminado!',
              'El servicio fue eliminado satisfactoriamente',
              'success'
            ).then((result) =>{
              if (result.value) {
                this.dialog.closeAll();
                window.location.reload();
              }
            })
          },
          err => console.error(err)
        );
        

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El servicio no fue eliminado.',
          'error'
        )
      }
    })

  }

}
