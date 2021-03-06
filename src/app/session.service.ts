import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class SessionService {

	constructor(private http: Http) {
	}

	getSessions() {
		return this.http.get('/sessions').map((response: Response) => {
			return response.json();
		});
	}

	addAttendee(ids, email) {
		let body = {
			ids: ids,
			email: email
		};
		return this.http.post('/attendees', body).map((response: Response) => {
			// return response.json();
			return;
		});
	}
}
