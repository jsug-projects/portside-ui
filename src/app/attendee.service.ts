import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AttendeeService {

	constructor(private http: Http) {
	}

	getSessions(id) {
		return this.http.get(`/attendees/${id}/sessions`).map((response: Response) => {
			return response.json();
		});
	}

	updateSessions(id, sessionIds) {
		let body = {
			ids: sessionIds
		};
		return this.http.put(`/attendees/${id}`, body).map((response: Response) => {
			return response.json();
		});

	}
}
