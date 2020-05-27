class Gobierno {
    constructor(presidente, oposicion, vicepresindete, partido, ideologia){
        this.presidente = presidente;
        this.oposicion = oposicion;
        this.vicepresindete = vicepresindete;
        this.partido = partido;
        this.ideologia = ideologia;
        
    }
    legistatura(){
        if(this.partido == "Psoe"){
            console.log(`Si gana el psoe el presidente sera ${this.presidente}`);
        } else {
            console.log(`Si pierde el Pso la oposicon sera quien gobierne españa serie el ${this.oposicion}`);
        }
        }

    }

class Ministerios extends Gobierno{
    constructor(presidente, oposicion, vicepresindete, partido, ideologia, ministro, departamento){
        super(presidente, oposicion, vicepresindete, partido, ideologia)
        this.ministro = ministro;
        this.departamento = departamento;
    }

    //METODOS
sanidad(){
    console.log(`${this.ministro} es el ministro de ${this.departamento} durante la pandemia del Covid-19 presidido ${this.partido} bajo el mando de ${this.presidente}`);
}

igualdad(){
    console.log(`Tras la formacion del gobierno de colacion del ${this.partido} presidido por ${this.presidente} se creo el ministerio de ${this.departamento} liderada por ${this.ministro}`);
}

}


class Autonomia extends Gobierno{
    constructor(presidente, oposicion, vicepresindete, partido, ideologia, gobernante_autonomia, comunidad, fase_covid_19){
        super(presidente, oposicion, vicepresindete, partido, ideologia)
        this.gobernante_autonomia = gobernante_autonomia;
        this.comunidad = comunidad;
        this.fase_covid_19 = fase_covid_19;
    }

madrid(){
    if(this.fase_covid_19 == 0){
        console.log("Los madrileños tienen que quedarse en casa");
    } else {
        console.log("Los madrileños pueden salir de casa cumpliendo las normas de sanidad");
    }
}

balears(){
    console.log(`Tras las elecciones autonomicas en ${this.comunidad} gana el ${this.partido} de ideologia ${this.ideologia} presidida por ${this.gobernante_autonomia}`);
}

}

var sanchez = new Gobierno("Pedro Sanchez", "Partido Popular", "Carmen Calvo", "Psoe", "Izquierdas"); 
sanchez.legistatura();


var amengol = new Autonomia("Pedro Sanchez", "Partido Popular", "Carmen Calvo", "Psoe", "Izquierdas", "Francina Armengol", "Illes Balears"); 
var ayuso = new Autonomia("Pedro Sanchez", "Partido Popular", "Carmen Calvo", "Psoe", "Izquierdas", "Isabel Ayuso", "Madrid", 1);
ayuso.madrid(); 
amengol.balears();


var illa = new Ministerios("Pedro Sanchez", "Partido Popular", "Carmen Calvo", "Psoe", "Izquierdas", "Salvador Illa", "Sanidad");
var montero  = new Ministerios("Pedro Sanchez", "Partido Popular", "Carmen Calvo", "Psoe", "Izquierdas", "Irene Montero", "Igualdad");
illa.sanidad();
montero.igualdad();