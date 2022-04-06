import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.scss']
})

export class MaterialTabsComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {

    this.navLinks = [
      {
        label: 'Home',
        link: '',
        index: 0
      }, 
      {
        label: 'Samples',
        link: '/samples',
        index: 1
      },
      {
        label: 'Tree Basic Component',
        link: '/testing',
        index: 2
      },
      {
        label: 'BABCN-32',
        link: '/babcn32',
        index: 2
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
