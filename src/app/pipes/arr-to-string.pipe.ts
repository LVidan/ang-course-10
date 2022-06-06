import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'arrToString'
})
export class ArrToStringPipe implements PipeTransform {

	transform(value: Array<any>) {
		let users: Array<any> = [];

		for (let i = 0; i < value.length; i++) {
			users.push(`${value[i].firstName}  ${value[i].lastName}`);
		}

		return users.join(', ');
	}

}
