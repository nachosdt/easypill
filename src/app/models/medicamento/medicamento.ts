import { Time } from "@angular/common";

// Clase del formulario add_medicamento
export class Medicamento {
    public nombreMedicamento : string | undefined;
    public dosis : number | undefined;
    public frecuencia : string | undefined;
    public cantidadInicial : number | undefined;
    public primeraToma : string | undefined;
    public comentarios : string | undefined;
    public completado: boolean = false;
}
