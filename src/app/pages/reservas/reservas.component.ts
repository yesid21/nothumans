import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {
  showForm = false;
  reservaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservaForm = this.fb.group({
      numeroPersonas: [null, [Validators.required, Validators.min(1)]],
      nombreCompleto: ['', Validators.required],
    });
  }

  mostrarFormulario() {
    this.showForm = true;
  }

  enviarReserva() {
    if (this.reservaForm.valid) {
      // Aquí podrías llamar a tu API real
      console.log(this.reservaForm.value);

      Swal.fire({
        icon: 'success',
        title: '¡Reserva realizada!',
        text: 'Tu reserva fue registrada correctamente.',
        confirmButtonColor: '#22c55e',
        background: '#0a0a0a', // popup más oscuro
        color: '#fff', // texto blanco
        backdrop: `
    rgba(0, 0, 0, 0.8)
  `
      });


      this.reservaForm.reset();
      this.showForm = false;

    } else {
      this.reservaForm.markAllAsTouched();
    }
  }

  cancelarReserva() {
    this.reservaForm.reset();
    this.showForm = false;
  }
}
