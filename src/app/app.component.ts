import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService,
    public authenticator: AuthenticatorService,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.config.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    };
    this.translateService.setDefaultLang('pt-br');
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get('primeng')
      .subscribe((res) => this.config.setTranslation(res));
  }
}
