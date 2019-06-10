import { Component, OnInit } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	image: string = "https://scontent.fcgh17-1.fna.fbcdn.net/v/t1.0-9/12088359_886868264734498_4128496832337823905_n.jpg?_nc_cat=109&_nc_oc=AQkpn2llx_Q-Q16ZkFOuFIGNQtpATZ9NfTNA0TBtlWli5o9z_lZQgxyg0i6gJnOXn5E&_nc_ht=scontent.fcgh17-1.fna&oh=dd3e6fc6b9b5e4637f5c4b953dd838ef&oe=5D8829B7";
	name: string = "Felipe de Carvalho Seolin";
	nameBkp: string = "";
	allowEdit: boolean = false;

	constructor(private thfNotification: ThfNotificationService) {}

	ngOnInit() {
	}

	editarNome() {
		this.nameBkp = this.name;
		this.allowEdit = true;
	}

	salvarNome() {
		if (this.name === "") {
			this.thfNotification.error( "Informe um nome válido." );
		} else {
			if (this.name === this.nameBkp){
				this.thfNotification.error( "Não houve alteração de nome." );
			} else{
			this.thfNotification.success( "Nome atualizado com sucesso" );
			this.allowEdit= false;
			}
		}
	}

	cancelarNome() {
		this.name = this.nameBkp;
		this.allowEdit = false;
	}

}