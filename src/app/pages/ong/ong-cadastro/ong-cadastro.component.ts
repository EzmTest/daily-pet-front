import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/models/ong';

@Component({
  selector: 'app-ong-cadastro',
  templateUrl: './ong-cadastro.component.html',
  styleUrls: ['./ong-cadastro.component.scss'],
  providers: [OngService]
})
export class OngCadastroComponent implements OnInit {

  public ong: Ong = new Ong();
  public form: FormGroup = new FormGroup({
    denominacao:new FormControl(''),
    cnpj: new FormControl(''),
    descricao: new FormControl(''),
  });
  constructor(private route:ActivatedRoute, private router:Router, private ongService: OngService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.ong = params as Ong;
      this.form.patchValue(this.ong);
    });
  }

  public salvar(){
    if (this.form.invalid){
      alert('Há campos vazios!');
      return;
    }
    this.ong = this.form.value;
    this.ongService.save(this.ong).subscribe((data)=>{
      alert('Salvo com Sucesso');
      this.router.navigate(['ong/pesquisa']);
    });    
  }

}
