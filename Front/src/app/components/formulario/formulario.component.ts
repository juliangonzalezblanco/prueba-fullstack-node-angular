import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;
  respuesta: any = '';
  numDocOrig: string = ''; 

  constructor( private formBuilder: FormBuilder, private _apiService:ApiService ){
    this.formulario = formBuilder.group({
      numDocumento: null,
      nombre: null,
    });
  }

  validarInputSoloLetras(event: KeyboardEvent) {
    const keyCode = event.keyCode || event.which;
    const key = String.fromCharCode(keyCode);
    if (/^\d+$/.test(key)) {
      event.preventDefault();
    }
  }

  validarInputSoloNumeros(event: any) {
    const keyCode = event.keyCode || event.which;
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      event.preventDefault();
    }
  }

  enviarFormulario(){
    let body = {
      flujo: 'Formulario',
      numDocumento: this.numDocOrig,
      nombre: this.formulario.get('nombre')?.value,
    }
    this._apiService.getEscenario(body).subscribe((res)=>{
      this.respuesta = res;
      $('#aceptarModal').modal('show');
    })
  }

  cerrarModal(){
    $('#aceptarModal').modal('hide');
  }

  mascaraFocus() {
    this.formulario.get('numDocumento')?.setValue(this.numDocOrig);
  }

  mascaraBlur(){
    this.numDocOrig = this.formulario.get('numDocumento')?.value;
    const maskedNumbers = '*'.repeat(this.numDocOrig.length - 2) + this.numDocOrig.substring(this.numDocOrig.length - 2);
    this.formulario.get('numDocumento')?.setValue(maskedNumbers);
  }
}
