import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID: number = 10; //or written as serverID = 10; the type can be implied.
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}