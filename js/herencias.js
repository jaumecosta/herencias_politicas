class Gobierno {
    constructor(presidente, oposicion, vicepresindete, partido, ideologia){
        this.presidente = presidente;
        this.oposicion = oposicion;
        this.vicepresindete = vicepresindete;
        this.partido = partido;
        this.ideologia = ideologia;
        
    }
}

class Ministerios extends Gobierno{
    constructor(presidente, oposicion, vicepresindete, partido, ideologia){
        super(presidente, oposicion, vicepresindete, partido, ideologia)
        this.ministro = ministro;
        this.departamento = departamento;
    }
}

class Autonomia extends Gobierno{
    constructor(presidente, oposicion, vicepresindete, partido, ideologia, ministro, departamento){
        super(presidente, oposicion, vicepresindete, partido, ideologia)
        this.ministro = ministro;
        this.departamento = departamento;
    }

}

class Autonomia extends Gobierno{
    constructor(presidente, oposicion, vicepresindete, partido, ideologia, gobernante_autonomia, partido_autonomia){
        super(presidente, oposicion, vicepresindete, partido, ideologia)
        this.gobernante_autonomia = gobernante_autonomia;
        this.partido_autonomia = partido_autonomia;
    }
}