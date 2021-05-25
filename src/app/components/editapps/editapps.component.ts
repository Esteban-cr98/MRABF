import { Component, OnInit } from '@angular/core';

import { DominiosService } from '../../services/dominios.service';
import { Inject } from '@angular/core'; 
import { MatDialog } from '@angular/material/dialog';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-editapps',
  templateUrl: './editapps.component.html',
  styleUrls: ['./editapps.component.css']
})
export class EditappsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {idB: string, idA:string , mode:any}, private dominiosService: DominiosService, private dialog: MatDialog) { }

  public rela = {
    idAdd:'',
    idAddo:'',
    idDelRela:'',
    idDelRelao:'',
    name: '',
    link: '',
    linko:'',
    nameo: '',
    idDel:'',
    idDelo:'',
    idEdi:'',
    nameEdi:''
  };

  aux: any = {};
  secsubdos: any = [];
  aplis: any = [];
  apliso: any = [];
  allaplis: any = [];
  allapliso: any = [];
  Title: any = "Editar";
  idIn: any = 0;
  templAux : any = 0;
  idmasivo: any = 0;
  idsmove: any = [];
  namesmove: any = [];
  idcapa: any = 0;

  ngOnInit(): void {
    const params = this.data;
    if(params.mode ==1 ){
      this.dominiosService.getSecSubdo(params.idB).subscribe(
        res => {
          this.secsubdos = res;
        },
        err => console.error(err)
      );
    } 
    else if (params.mode ==0) {
      this.dominiosService.getSubdo(params.idB).subscribe(
        res => {
          this.secsubdos = res;
        },
        err => console.error(err)
      );
    } 
  }


  onClose(): void {
    this.dialog.closeAll();
  }

  onRela(): void {
    this.aux={ idNiv:this.idIn, idApp:this.rela.idAdd }
    this.dominiosService.postAddrela(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
    
    //console.log(this.idIn);
    //console.log(this.rela.idAdd );
    
    
  }

  onRelao(): void {
    this.aux={ idNiv:this.idIn, idApp:this.rela.idAddo }
    this.dominiosService.postAddrelao(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onDeleteRela(): void {
    this.aux={ idNiv:this.idIn, idApp:this.rela.idDelRela}
    this.dominiosService.Deleterela(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onDeleteRelao(): void {
    this.aux={ idNiv:this.idIn, idApp:this.rela.idDelRelao}
    this.dominiosService.Deleterelao(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  
  onSave(): void {
    this.aux={ idA:this.idIn, App:this.rela.name, link:this.rela.link }
    this.dominiosService.postApp(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onSaveo(): void {
    this.aux={ idA:this.idIn, Appo:this.rela.nameo, linko:this.rela.linko }
    this.dominiosService.postAppo(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onDelete(): void{
    this.dominiosService.deleteApp(this.rela.idDel).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onDeleteo(): void{
    this.dominiosService.deleteAppo(this.rela.idDelo).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onButton(): void{
    this.templAux = 1;
    const params = this.data;

    this.dominiosService.getSecSubdo(params.idB).subscribe(
      res => {
        this.secsubdos = res;
        if (this.secsubdos){
          for( var i = 0; i < this.secsubdos.length; i++){
            if (this.secsubdos[i].id==this.idIn){
              this.Title = 'Editar '+this.secsubdos[i].Nivel_name;
            }
          }
        }

        this.dominiosService.getApps(this.idIn).subscribe(
          res => {
            this.aplis = res;
            this.dominiosService.getAppso(this.idIn).subscribe(
              res => {
                this.apliso = res;
                this.dominiosService.getAllApps().subscribe(
                  res =>{
                    this.allaplis = res;
                    this.dominiosService.getAllAppso().subscribe(
                      res =>{
                        this.allapliso = res;
                      },
                      err => console.error(err)
                    );                    
                  },
                  err => console.error(err)
                );
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

  onChange():void {
    this.templAux = 2;
    //this.Title = "Mover "
  }
  onMasive():void{
    this.idsmove = this.idsmove.concat(this.idmasivo);
  }

  onSee():void{
    console.log(this.idsmove);
    for( var i = 0; i < this.aplis.length; i++){
      for ( var j = 0; j < this.idsmove.length; j++){
        if (this.aplis[i].id==this.idsmove[j]){
          this.namesmove = this.namesmove.concat(this.aplis[i].apli_name)
        }
      }
    }
    
  }

  onMove():void{
    for ( var j = 0; j < this.idsmove.length; j++){
      this.aux={ idNiv:this.idcapa, idApp:this.idsmove[j] }
      this.dominiosService.postAddrela(this.aux).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
    }
    this.dialog.closeAll();
    window.location.reload();
  }

}
