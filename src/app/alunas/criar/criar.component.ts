import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpAlunaService } from 'src/app/shared/interfaces/IHttpAlunaService';
import { AlunaCreateViewModel } from 'src/app/shared/viewModels/Aluna/AlunaCreateViewModel';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html'
})
export class CriarComponent implements OnInit {

  titulo : string = "Cadastrar Aluna"
  cadastroForm: FormGroup
  Aluna : AlunaCreateViewModel

  tipos = prioridadeType;
  prioridade: any[]

  constructor(private router : Router, @Inject('IHttpAlunaServiceToken') private servico : IHttpAlunaService) { }

  ngOnInit(): void {
    this.prioridade = Object.keys(this.tipos).filter(t => !isNaN(Number(t)))

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      prioridade: new FormControl('')
    })
  }
  
  adicionarAluna(){

    this.Aluna = Object.assign({}, this.Aluna, this.cadastroForm.value)
    this.servico.adicionarAluna(this.Aluna)
      .subscribe
        (result =>console.log(result), 
        erro => console.log(erro));
    
    this.router.navigate(['Aluna/listar']);
  }

  cancelar(){
    this.router.navigate(['Aluna/listar']);
  }
}
