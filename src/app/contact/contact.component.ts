import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  onSubmit() {
    console.log(this.contact)
    axios.post('https://us-central1-rs-incorporacoes.cloudfunctions.net/sendEmail', this.contact)
    .then(response => {
      console.log(response);
      alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
      console.log(error);
      alert('Ocorreu um erro ao enviar a mensagem.');
    });
    
  }
}
