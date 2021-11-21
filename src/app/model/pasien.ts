export class Pasien {
    id_persona : number;
    id_vacunados_covid19 : number;
    id_eess : number;
    id_centro_vacunacion : number;
    id_vacuna : number;
    id_grupo_riesgo : number;
    dosis : number;
    edad : number;

    constructor(){
        this.id_persona = 0;
        this.id_vacunados_covid19 = 0;
        this.id_eess = 0;
        this.id_centro_vacunacion = 0;
        this.id_vacuna = 0;
        this.id_grupo_riesgo = 0;
        this.dosis = 0;
        this.edad = 0;
    }
}