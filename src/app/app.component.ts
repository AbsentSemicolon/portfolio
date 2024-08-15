import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { ProjectComponent } from '../components/project/project.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, ProjectComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'portfolio';
}
