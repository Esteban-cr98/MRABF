import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DominiosService {

  API_URI = 'https://mrab-app.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getServices(){
    return this.http.get(`${this.API_URI}/dominios`);
  }

  getNiveles(){
    return this.http.get(`${this.API_URI}/niveles`);
  }

  getSubdo(id: string){
    return this.http.get(`${this.API_URI}/subdo/${id}`);
  }

  getSecSubdo (id: string){
    return this.http.get(`${this.API_URI}/sec_subdo/${id}`);
  }

  getRelaApps(){
    return this.http.get(`${this.API_URI}/apliRela`);
  }

  getAllApps (){
    return this.http.get(`${this.API_URI}/apliAll`);
  }

  getAllAppso (){
    return this.http.get(`${this.API_URI}/aplioAll`);
  }

  getApps (id: string){
    return this.http.get(`${this.API_URI}/apli/${id}`);
  }

  getAppso (id: string){
    return this.http.get(`${this.API_URI}/aplio/${id}`);
  }

  getRelas(){
    return this.http.get(`${this.API_URI}/relas`);
  }

  
  postService(name:any){
    return this.http.post(`${this.API_URI}/addService`, name);
  }

  deleteService(id: string){
    return this.http.delete(`${this.API_URI}/delService/${id}`);
  }
  
  updateService(id:any, name:any){
    return this.http.put(`${this.API_URI}/editService/${id}`, name);
  }

  postSubdo(obj:any){
    return this.http.post(`${this.API_URI}/addSubdo`, obj);
  }

  deleteSubdo(id: string){
    return this.http.delete(`${this.API_URI}/delSubdo/${id}`);
  }

  updateSubdo(id:any, name:any){
    return this.http.put(`${this.API_URI}/editSubdo/${id}`, name);
  }

  postSecSubdo(obj:any){

    return this.http.post(`${this.API_URI}/addSecSubdo`, obj);
  }

  deleteSecSubdo(id: string){
    return this.http.delete(`${this.API_URI}/delSecSubdo/${id}`);
  }

  updateSecSubdo(id:any, name:any){
    return this.http.put(`${this.API_URI}/editSecSubdo/${id}`, name);
  }



  postAddrela(obj:any){
    return this.http.post(`${this.API_URI}/addrela`, obj);
  }
  postAddrelao(obj:any){
    return this.http.post(`${this.API_URI}/addrelao`, obj);
  }

  Deleterela(obj:any){
    return this.http.post(`${this.API_URI}/delrela`, obj);
  }
  Deleterelao(obj:any){
    return this.http.post(`${this.API_URI}/delrelao`, obj);
  }

  postApp(obj:any){
    return this.http.post(`${this.API_URI}/addApp`, obj);
  }
  postAppo(obj:any){
    return this.http.post(`${this.API_URI}/addAppo`, obj);
  }

  deleteApp(id: string){
    console.log(id);
    return this.http.delete(`${this.API_URI}/delApp/${id}`);
  }

  deleteAppo(id: string){
    console.log(id);
    return this.http.delete(`${this.API_URI}/delAppo/${id}`);
  }




}
