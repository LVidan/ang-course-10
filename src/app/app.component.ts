import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-domaci-10';

	users: any[] = [
		{
			id: 1,
			firstName: "Pera",
			lastName: "Peric"
		},
		{
			id: 2,
			firstName: "Mika",
			lastName: "Mikic"
		},
		{
			id: 3,
			firstName: "Laza",
			lastName: "Lazic"
		}
	]
}
