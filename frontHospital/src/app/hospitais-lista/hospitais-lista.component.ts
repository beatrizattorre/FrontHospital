import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IHospitalDto } from '../interface/IHospitalDto';

@Component({
  selector: 'app-hospitais-lista',
  templateUrl: './hospitais-lista.component.html',
  styleUrls: ['./hospitais-lista.component.css']
})
export class HospitaisListaComponent {
  listaHospitals: IHospitalDto[] = [];
  hospitalSelecionado!: IHospitalDto;
  telaParaApresentar = 'lista';

  constructor(private http: HttpClient, private router: Router) {
    this.listarTodos();
  }

  listarTodos() {
    this.listaHospitals = [];

    this.http
    .get('https://localhost:7086/Hospitais/ListarTodos')
    .pipe(
      map((response: any) => {
        return Object.values(response);
      })
      )
      .subscribe((data) => {
        for (let index = 0; index < data.length; index++) {
          let conteudoJson: any = data[index];
          this.listaHospitals.push(conteudoJson as IHospitalDto);
        }
      });
    }

    detalhar(id: number) {
      this.telaParaApresentar = 'detalhe';

      for (let i = 0; i < this.listaHospitals.length; i++) {
        if (id == this.listaHospitals[i].idHospital) {
          this.hospitalSelecionado = this.listaHospitals[i];
          break;
        }
      }
    }

    fecharDetalhes = () => {
      this.telaParaApresentar = 'lista';
    }

    removerHospital(id: number) {
      this.http.delete(`https://localhost:7086/Hospitais/Excluir/${id}`)
      .subscribe((data) => {
        this.listarTodos();
      });
    }

    editarAluno(id: number) {
      this.router.navigate([`editarAluno/${id}`]);
    }

    adicionarAluno(){
      this.router.navigate([`editarAluno`]);
    }}
