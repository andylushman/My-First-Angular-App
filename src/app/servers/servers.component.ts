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
  allowNewServer = false;
  serverCreationStatus = 'No server was created! Name is';
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = !this.serverCreated; //toggle
    this.servers.push(this.serverName);

  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value; 
  }

  resetUserName(){
    this.userName = '';
  }

}
