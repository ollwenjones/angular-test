import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-decisions-api-test',
  templateUrl: './decisions-api-test.component.html',
  styleUrls: ['./decisions-api-test.component.css']
})
export class DecisionsApiTestComponent implements OnInit {

  products: string[] = ["foo", "bar"];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.callFlow().subscribe(obs => {
      this.products = obs.stuff;
    })
    // no difference using fetch...
    // this.callFlowFetch();
  }

  async callFlowFetch() {
    this.products = await this.cartService.callFlowFetch();
  }

}
