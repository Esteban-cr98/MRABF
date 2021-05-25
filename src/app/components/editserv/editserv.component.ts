import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DominiosService } from '../../services/dominios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editserv',
  templateUrl: './editserv.component.html',
  styleUrls: ['./editserv.component.css']
})
export class EditservComponent implements OnInit {

  constructor( private dialog: MatDialog, private dominiosService: DominiosService ) { }

  public servi = {
    name: '',
    idDel:'',
    idEdi:'',
    nameEdi:'',
  };

  subdos: any = {};

  Servicios: any = [];

  ngOnInit(): void {
    this.dominiosService.getServices().subscribe(
      res => {
        this.Servicios = res;
      },
      err => console.error(err)
    );
  }

  onClose(): void {
    this.dialog.closeAll();
  }

  onDelete():void {
    this.dominiosService.getSubdo(this.servi.idDel).subscribe(
      res => {
        this.subdos=res;
        console.log(this.subdos.length);
        if(this.subdos.length == 0){
          console.log("Se borra");

          Swal.fire({
            title: '¿Está seguro?',
            text: 'No podrá recuperarlo si lo elimina.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'No, mantenerlo'
          }).then((result) => {
            if (result.value) {
              this.dominiosService.deleteService(this.servi.idDel).subscribe(
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

  onSave():void {
    this.dominiosService.postService(this.servi).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onEdit():void{
    this.dominiosService.updateService(this.servi.idEdi, this.servi).subscribe(
      res=>{
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

}



//this.router.navigate(['/Services']);
