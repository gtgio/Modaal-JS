const modaalVenster = {
	alleInhoud: document.querySelectorAll('.modaalContent'),
	alleKnoppen: document.querySelectorAll('.modaal-knop'),
	maakAchtergrond() {
		let achtergrond = document.createElement('div');
		achtergrond.classList.add('modaal-achtergrond');
		achtergrond.addEventListener('click', () => this.sluiten());
		return achtergrond;
	},
	maakModaal() {
		let modaal = document.createElement('div');
		modaal.className = 'modaal';
		modaal.addEventListener('click', (evt) => evt.stopPropagation());
		return modaal;
	},
	maakSluitKnop() {
		let sluitKnop = document.createElement('div');
		sluitKnop.className = 'sluit-knop';
		sluitKnop.innerHTML = '&#x00D7';
		sluitKnop.addEventListener('click', () => this.sluiten());
		return sluitKnop;
	},
	open(elem) {
		this.achtergrond  = this.maakAchtergrond();
		this.sluitKnop    = this.maakSluitKnop();
		this.modaal       = this.maakModaal();
		this.modaal       .appendChild(this.sluitKnop);
		this.modaal       .appendChild(elem);
		this.achtergrond       .appendChild(this.modaal);
		document.body       .appendChild(this.achtergrond);
	},
	sluiten() {
		this.modaal.innerHTML = '';
		document.body.removeChild(this.achtergrond);
	}
}

for(let i = 0; i < modaalVenster.alleInhoud.length; i++) {
	modaalVenster.alleInhoud[i].parentNode.removeChild(modaalVenster.alleInhoud[i]);
}
for(let i = 0; i < modaalVenster.alleKnoppen.length; i++) {
	modaalVenster.alleKnoppen[i].addEventListener('click', () => {
		let inhoud = modaalVenster.alleInhoud[i];
		modaalVenster.open(inhoud);
	})
}
