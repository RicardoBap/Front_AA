import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { RelatorioService } from './../relatorio.service';

@Component({
  selector: 'app-relatorio-lancamento',
  templateUrl: './relatorio-lancamento.component.html',
  styleUrls: ['./relatorio-lancamento.component.css']
})
export class RelatorioLancamentoComponent implements OnInit {

  periodoInicio: Date
  periodoFim: Date

  constructor(
    private relatorioService: RelatorioService,
    private title: Title
  ) {
    this.title.setTitle('Relatórios')
  }

  ngOnInit(): void {
  }

  gerar() {
    //console.log(this.periodoInicio)
    //console.log(this.periodoFim)

    this.relatorioService.relatorioLancamentoPorPessoa(this.periodoInicio, this.periodoFim)
      .then(relatorio => {
        console.log(relatorio)
        const url = window.URL.createObjectURL(relatorio)

        window.open(url)
      })
  }

}
