import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pipe-playground',
	templateUrl: './pipe-playground.component.html',
	styleUrls: ['./pipe-playground.component.scss']
})
export class PipePlaygroundComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	numberOne: number = 5.57;
	numberTwo: number = 798.551949;

}
