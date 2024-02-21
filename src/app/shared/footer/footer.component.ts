import { Component } from '@angular/core';


@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: []
})
export class FooterComponent {

  date = new Date()
  year = this.date.getFullYear();
}
