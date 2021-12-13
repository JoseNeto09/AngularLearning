import { Transferencia } from './../services/models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService){}

  transferir(){
    console.log('Solicitada nova transferencia');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir)
    .subscribe(resultado =>{
      console.log(resultado);
      this.limparCampos();
    },
    (erro) => console.log(erro)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
