import { Component, OnInit } from '@angular/core';
import { Web3Service } from './services/web3/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'webapp';
  isLoggedIn: boolean = false;
  constructor(public web3: Web3Service) {}

  async ngOnInit() {
    this.isLoggedIn = await this.web3.isLoggedIn();
  }
}
