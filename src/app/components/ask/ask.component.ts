import { Component, OnInit } from '@angular/core';
import { DominiosService } from '../../services/dominios.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core'; 
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

export class AppComponent  {
  console = console;
}

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {idB: string, idA:string},
  private dominiosService: DominiosService,
  private dialog: MatDialog,
  private router: Router) { }


  aux: any = {};
  allaplis: any = [];
  public  nombres = {
    nameC:'',
    idAdd:'',
    nameA:'',
    link:''
  };

  ngOnInit(): void {
    this.dominiosService.getAllApps().subscribe(
      res=>{this.allaplis = res;},
      err => console.error(err)
    );
  }
 

  onSaveC (): void {
    this.aux={ idB:this.data.idB, idA:this.data.idA, secSubdo:this.nombres.nameC }
    this.dominiosService.postSecSubdo(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        window.location.reload();
      },
      err => console.error(err)
    );
  }

  onRela(): void {
    this.aux={ idNiv:this.data.idA, idApp:this.nombres.idAdd }
    this.dominiosService.postAddrela(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        this.router.navigate(['aplications/'+this.data.idB+'/'+this.data.idA]);
      },
      err => console.error(err)
    );
  }

  onSaveA(): void {
    this.aux={ idA:this.data.idA, App:this.nombres.nameA, link:this.nombres.link }
    this.dominiosService.postApp(this.aux).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
        //window.location.reload();
        this.router.navigate(['aplications/'+this.data.idB+'/'+this.data.idA]);
      },
      err => console.error(err)
    );
  }
}
