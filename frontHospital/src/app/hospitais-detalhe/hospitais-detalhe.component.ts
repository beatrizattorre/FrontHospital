import { IHospitalDto } from '../interface/IHospitalDto';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-hospitais-detalhe',
  templateUrl: './hospitais-detalhe.component.html',
  styleUrls: ['./hospitais-detalhe.component.css']
})
export class HospitaisDetalheComponent implements OnInit {
  @Input() hospital!: IHospitalDto;
  @Input() fecharDetalhe!: () => void;

  constructor() { }

  ngOnInit(): void {
    console.log(`objeto recebido :${JSON.stringify(this.hospital)}`);
  }

  fechar() {
    this.fecharDetalhe();
  }

}
