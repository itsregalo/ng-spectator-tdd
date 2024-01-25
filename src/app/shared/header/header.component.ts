import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-file',
                routerLink: '/'
            },
            {
                label: 'About',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Company',
                        icon: 'pi pi-fw pi-align-left',
                    },
                    {
                        label: 'Contact',
                        icon: 'pi pi-fw pi-align-right'
                    }
                ]
            },
            {
                label: 'Inventory',
                icon: 'pi pi-fw pi-user',
                routerLink: '/inventory'
            },
        ];
    }
}
