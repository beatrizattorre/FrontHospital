import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IHospitalDto } from '../interface/IHospitalDto';

@Component({
  selector: 'app-hospitais-editar',
  templateUrl: './hospitais-editar.component.html',
  styleUrls: ['./hospitais-editar.component.css']
})
export class HospitaisEditarComponent implements OnInit {
  hospital!: IHospitalDto;
  idRecebido!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.idRecebido = Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.hospital = {
      idHospital: this.idRecebido ?? 0,
      nome: '',
      ativo: false,
      cnes: '',
      cnpj: '',
      endereco: '',
      telefone: '',
    }

    if (this.idRecebido) {
      this.http
      .get(`https://localhost:7086/Hospitais/ListarPorId/${this.idRecebido}`)
      .subscribe((data) => {
        this.hospital = data as IHospitalDto;
      });
    }

  }

  salvar() {

    if (this.validarInformacoes()) {
      console.log(`Objeto para salvar: ${JSON.stringify(this.hospital)}`);

      if (this.hospital.idHospital == 0) {
        this.http.post('https://localhost:7086/Hospitais/Cadastrar', this.hospital)
        .subscribe((data) => {
          this.router.navigate(['listaalunos']);
        });

      } else {
        this.http.patch('https://localhost:7088/Atualizar', this.hospital)
        .subscribe((data) => {
          this.router.navigate(['listahospitais']);
        });
      }

    } else {
      console.log('Erro na validação');
    }
  }

  validarInformacoes(): boolean {
    if (this.hospital.nome == '') {
      return false;
    }
    else{
      return true;
    }
  }
}
