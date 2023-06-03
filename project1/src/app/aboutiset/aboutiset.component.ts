import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-aboutiset',
  templateUrl: './aboutiset.component.html',
  styleUrls: ['./aboutiset.component.css']
})
export class AboutisetComponent {
  showMore: boolean = false;
  constructor(private elementRef: ElementRef) { }

  scrollToAdditionalContent(): void {
    const additionalContent = this.elementRef.nativeElement.querySelector('#additional-content');
    additionalContent.scrollIntoView({ behavior: 'smooth' });
  }


}

