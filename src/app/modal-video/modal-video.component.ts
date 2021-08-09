import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent implements OnInit {

  @Input() source!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
