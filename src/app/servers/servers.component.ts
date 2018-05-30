import { Component, OnInit } from '@angular/core';

@Component({
  // Selectors are chosen like CSS... can be elements, attrbutes, classes, etc. as seen below.
  selector: 'app-servers',
  // selector: 'app-servers', => Element
  // selector: '[app-servers]', => Attribute
  // selector: '.app-servers', => Class
  //Template uses Inline;
  //TemplateURL uses external file
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
