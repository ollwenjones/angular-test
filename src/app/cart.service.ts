import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // url = `http://localhost:8081/Primary/restapi/Flow/458a2b42-d33f-11ea-b606-e4b97a6438ea?sessionid=NS-afedf927-1570-11e9-a392-902b34bb47a3&outputtype=RawJson`;
  url = `https://localhost/decisions/Primary/restapi/Flow/42ae72f3-471e-11ec-b73a-802bf99b288c?sessionid=NS-fe14a8e4-af37-11eb-b6df-349971000b84&outputtype=RawJson`;

  constructor(private http: HttpClient) { }

  callFlow() {
    return this.http.get<IStuffWrapper>(this.url);
  }

  async callFlowFetch() {
    const response = await fetch(this.url, {
      mode: 'cors',
      method: 'GET'
    });

    const json = await response.json();
    return json["stuff"] as string[];
  }

}


interface IStuffWrapper {
    "stuff": string[];
}
