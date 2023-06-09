import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {

  constructor(private _apiService:ApiService, private router: Router){}

  generarLlaves(){
    console.log("entra")
    this._apiService.getLlaves().subscribe((res)=>{
      if(res){
        alert(JSON.stringify(res));
        let body = {'flujo': 'Inicio'}
        this._apiService.getEscenario(body).subscribe((res:any) => {
          if(res && res.flujo){
            console.log("/"+res.flujo)
            this.router.navigateByUrl("/"+res.flujo);
          }
        })
      }
    });
  }
}
