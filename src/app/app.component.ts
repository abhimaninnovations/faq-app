import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faq-page';
  faq: any;
  isShown = false;
  show: boolean = false;
  panelOpenState = false;


  ngOnInit(){
    var faq = [{
      question:  "Why can't I log into my account?",
      answer: "It may be due to following reasons: \n"+
                 " 1.User Account is blocked or ban.\n"+
                 "2.Invalid Credentials \n"+
                 "3.Other session is being active in another device."
    },
    {
      question: "Why can't I log in because of VPN usage?",
      answer: "The use of VPN is forbidden, because otherwise unsuitable polls for you would be displayed. For this reason a login with VPN is not possible. Disconnect your VPN connection in order to use the app."
    },
   ];

    this.faq = faq;
  }


  showFaq(){

    this.isShown = true;

  }

}
