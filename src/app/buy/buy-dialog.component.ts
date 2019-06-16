import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-buy',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.css']
})
export class BuyDialogComponent implements OnInit {
  email: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  async pay() {
    const payload = new HttpParams()
      .set('app_id', 'nowintertown')
      .set('user_id', this.email)
      .set('payment', 'alipay')
      .set('currency', 'cny');

    const result = await this.http.post<{ url: string }>('https://api.mycard.moe/pay/orders', payload).toPromise();
    const url = new URL(result.url);
    url.protocol = 'http';

    location.href = url.href;
  }
}
