import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateDel } from './state-del';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  apiHeader = "Bearer lxljO3lpAIqOa7Ny4uTKNXsOVoo6_yp2_LB2bHlU7VTYlY9UJ9u1FZR26fMX_MTC-8sYV50mrlfqvFlFT-BeLmrl2uvymFN-myK2Mtw_Ri34O49FUmbBotsrxqiSIbxijAQGW4wh3xWybF8gzdrKDlsfzFPH_7gO-XNmc1IJXYo3htBUM5B2t3_AjKqNuI60sgsZpp8TnIOWIm0byK6qDD6n86kjS7CYy6SJn4cHnLpHW74KDJ-yHrbIhYpO-8WPNA86pL8VXKvAcX13XDYGlSaAqGT87hsmkRqV2KLoxEAmUxLFVq9Y3Y1TvpEn9NYrku6a0UQzdmP92E4WiAQ_pxHqQoUGjU9px8vts-o1ZP6II60uLFuHZyyORWs4To7R1_0M4xQ8TP2vZZsENsOYsWWwDx-N4jIyh3tZ11tQReCPnY2r";
  apiBaseUrl = "https://cherry1.dharani.org/api/CustomerCanvas";
  categoriesGet = '/CC_Categories_GET';
  userTemplatesGet = '/CC_UserTemplates_GET?UserEmailAddress=humaira.syed%40dharani.co.in';
  deleteState = 'http://localhost:50065/api/CustomerCanvas/StateFile_Download_Delete';

  constructor(private client: HttpClient) { }

  getDate() {
    let date = new Date();
    return date;
  }

  getPages() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.apiHeader
    });

    return this.client.get(
      this.apiBaseUrl + this.categoriesGet,
      { headers: headers }
    );
  }

  getUserTemplates() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.apiHeader
    });

    return this.client.post(
      this.apiBaseUrl + this.userTemplatesGet,
      null,
      { headers: headers }
    )
  }

  public deleteStateFile(delStateReq: StateDel) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.apiHeader
    });

    return this.client.post(
      this.deleteState,
      delStateReq,
      { headers: headers }
    )
  }
}
