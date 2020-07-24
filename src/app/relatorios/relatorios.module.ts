import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RelatoriosRoutingModule } from './relatorios-routing.module';

import { SharedModule } from './../shared/shared.module';
import { RelatorioLancamentoComponent } from './relatorio-lancamento/relatorio-lancamento.component';

@NgModule({
  declarations: [RelatorioLancamentoComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    InputTextModule,
    ButtonModule,

    RelatoriosRoutingModule,
  ]
})
export class RelatoriosModule { }
