import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [AboutMeComponent]
})
export class HomepageComponent {
    

}
