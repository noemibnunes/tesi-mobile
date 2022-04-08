import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from '../home/aluno';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  aluno = new Array<Aluno>();
  public formLogin: FormGroup;

  constructor(service: LoginService, private formBuilder: FormBuilder, private alunoService: LoginService, private router: Router) {
    service.login().subscribe((response) => (this.aluno = response));
    this.formLogin = this.formBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)(\\.[A-Za-z]{2,})$'
          ),
        ]),
      ],
      senha: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });

  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  login() {

  const email = this.formLogin.get('email').value;
  const senha = this.formLogin.get('senha').value;

  let usuarioResponse;

  this.alunoService.login().subscribe((response) => {
    this.aluno = response.filter((usuarioLogado) => usuarioLogado.email === email);
  });

  usuarioResponse = this.aluno[0];

  if(usuarioResponse.email == email && usuarioResponse.senha == senha){
    this.router.navigate(['/menu']);
    console.log("Usuário logado com sucesso");
    alert("Usuário logado com sucesso");

  } else{
    console.log("Falha ao tentar logar o usuário");
    alert("Falha ao tentar logar o usuário, tente novamente");

  }

}
}
