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
  ngOnInit(){
    var faq = [{
      question: "how to get started",
      answer: "hey get strtaed"
    },
    {
      question: "how to get started",
      answer: "hey get strtaed"
    },
    {
      question: "how to get started",
      answer: "hey get strtaed"
    },
    {
      question: "how to get started",
      answer: "hey get strtaed"
    }];

    this.faq = faq;
  }

  showFaq(){

    this.isShown = true;

  }

}
