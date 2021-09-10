import { ModalVideoComponent } from './../modal-video/modal-video.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {

  constructor(private ngbModalSvc: NgbModal) { }

  ngOnInit(): void {
  }

  verVideo(ruta: string): void
  {
    const modalRef = this.ngbModalSvc.open(ModalVideoComponent, {
      size: 'xl'
    });

    modalRef.componentInstance.source = ruta;
  }

}
