import { Component, OnInit } from '@angular/core';
import { DominiosService } from '../../services/dominios.service';
import { Inject } from '@angular/core'; 
import { MatDialog } from '@angular/material/dialog';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

//import {AskComponent} from '../ask/ask.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsubdo',
  templateUrl: './editsubdo.component.html',
  styleUrls: ['./editsubdo.component.css'],
  template: 'passed in {{ data.id }}'
})
export class EditsubdoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string}, private dominiosService: DominiosService, private dialog: MatDialog) { }

  public subdom = {
    name: '',
    idDel:'',
    idEdi:'',
    nameEdi:''
  };

  aux: any = {};
  Servicios: any = [];
  subdos: any = [];
  secsubdos: any = [];
  Title: any;

  ngOnInit(): void {

    this.dominiosService.getServices().subscribe(
      res => {
        this.Servicios = res;
        if (this.Servicios){
          for( var i = 0; i < this.Servicios.length; i++){
            if (this.Servicios[i].id==this.data.id){
              this.Title = 'Editar ' + this.Servicios[i].Serv_name;
            }
          }
        }
        this.dominiosService.getSubdo(this.data.id).subscribe(res => {
          this.subdos = res;
          console.log(this.subdos.length);          
        },
        err => console.error(err)
      );
      },
      err => console.error(err)
    );
  }

  onClose(): void {
    this.dialog.closeAll();
  }

  onDelete():void{

    this.dominiosService.getSecSubdo(this.subdom.idDel).subscribe(
      res => {
        this.secsubdos=res;
        if(this.secsubdos.length == 0){
          //console.log("Se borra");
          
          Swal.fire({
            title: '¿Está seguro?',
            text: 'No podrá recuperarlo si lo elimina.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'No, mantenerlo'
          }).then((result) => {
            if (result.value) {
              this.dominiosService.deleteSubdo(this.subdom.idDel).subscribe(
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
          
        }else{
          Swal.fire({
            title: 'Error',
            text: 'No se puede eliminar un servicio que tenga subdominios.',
            icon: 'error',
            confirmButtonText: 'Ok',
            showCloseButton: true,
          });
        }
      },
      err => console.error(err)
    );

  }

  onSave ():void{
    this.aux={ id:this.data.id, subdo:this.subdom.name }
    this.dominiosService.postSubdo(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onEdit():void {
    this.dominiosService.updateSubdo(this.subdom.idEdi, this.subdom).subscribe(
      res=>{
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }
}
