import { Component, OnInit } from '@angular/core';
// import { DetalleProspectoService } from 'src/app/shared/detalle-prospecto.service';
import { Prospecto } from '../../../models/prospecto/prospecto';

@Component({
  selector: 'app-detalle-prospecto',
  templateUrl: './detalle-prospecto.page.html',
  styleUrls: ['./detalle-prospecto.page.scss'],
})

export class DetalleProspectoPage implements OnInit {

  // public prospecto : Prospecto = new Prospecto ();
  public prospecto : any = {
    srcfoto : 
      "https://cima.aemps.es/cima/fotos/thumbnails/materialas/51347/51347_materialas.jpg",
      
    nombreMed :  
      "ASPIRINA C 400 mg/240 mg COMPRIMIDOS EFERVESCENTES",
    lab :
      "Bayern S.L.",

    url :
      "https://cima.aemps.es/cima/dochtml/p/51347/P_51347.html",
    
    secc :
    [
      { titulo:". QUÉ ES y para qué se utiliza",
        contenido: "Este medicamento contiene ácido acetilsalicílico y ácido ascórbico (vitamina C) como principios activos y actúa reduciendo el dolor y la fiebre.\n Está indicado en el alivio sintomático de los dolores ocasionales leves o moderados, como dolores de cabeza, dentales, menstruales, musculares (contracturas) o de espalda (lumbalgia). Estados febriles. "

      },
      { titulo:". antes de tomar",
        contenido: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n' + 

        'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.\n' + 
        
        'Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.\n' + 
        
        'Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis'
      },
      {
        titulo:". como tomar",
        contenido: "Siga estas instrucciones a menos que su médico le haya dado otras indicaciones distintas. Consulte a su médico o farmacéutico si tiene dudas.\n Este medicamento se administra por vía oral.\n  Adultos y mayores de 16 años: 1 comprimido efervescente cada 6 horas, si fuera necesario.  No se excederá de 4 comprimidos efervescentes en 24 horas. \n  Pacientes con las funciones del hígado o riñón reducidas: consultar al médico ya que debe reducir la dosis. \n  Disolver  totalmente  el  comprimido  efervescente  en  un  vaso  con  agua  y  beber  todo  el  contenido  del  vaso cuando haya cesado completamente el burbujeo. \n No  tome  este  medicamento  con  el  estómago  vacío,  por  lo  que  se  recomienda  tomar  el  medicamento después de las comidas o con algún alimento, especialmente si se notan molestias digestivas.\n  Utilizar siempre la dosis menor que sea efectiva. \n La administración de este preparado está supeditada a la aparición de los síntomas dolorosos o febriles. A medida que éstos desaparezcan debe suspenderse esta medicación. \n Si  el  dolor  se  mantiene  durante  más  de  5  días,  o  la  fiebre  durante  más  de  3  días,  o  bien  los  síntomas empeoran o aparecen otros síntomas, debe interrumpir el tratamiento y consultar al médico. \n Si toma más ASPIRINA C de la que debiera \n Los  principales  síntomas  de  sobredosis  son:  dolor  de  cabeza,  mareos,  zumbido  de  oídos,  visión  borrosa, somnolencia, sudoración, respiración rápida, confusión mental, náuseas, vómitos y ocasionalmente diarrea. Las dosis superiores a 1 gramo diario de vitamina C (5 ó más comprimidos al día) pueden producir diarrea, cálculos  renales  y  calambres  abdominales.  Asimismo  existe  el  riesgo  de  formación  de  cálculos  y  de precipitar ataques agudos de gota en individuos predispuestos.\n  Se recomendará llevar el envase y el prospecto del medicamento al profesional sanitario. \n  En caso de sobredosis o ingestión accidental, consulte inmediatamente a su médico o farmacéutico o acuda a un centro médico inmediatamente o llame al Servicio de Información Toxicológica, teléfono: 91 562 04 20, indicando el medicamento y la cantidad ingerida. "

      },
      {
        titulo:". efectos adversos",
        contenido: "Como  todos  los  medicamentos,  ASPIRINA  C  puede  producir  efectos  adversos,  aunque  no  todas  las personas los sufran. \n Efectos adversos frecuentes (observados entre 1 y 10 de cada 100 personas): \n  Trastornos gastrointestinales, como úlcera de estómago, úlcera de intestino, sangrado gastrointestinal, dolor del abdomen, digestión pesada, ardor, acidez, molestias gástricas, náuseas y vómitos. \n  Trastornos  respiratorios,  como  dificultad  para  respirar  (asma,  espasmo  bronquial),  congestión  nasal  y rinitis. \n  Urticaria  (ronchas  rojizas,  elevadas  y  a  menudo  con  sensación  de  picor  y  quemazón),  erupciones cutáneas,  angioedema  (inflamación  e  hinchazón  que  afecta  a  la  cara,  labios,  boca,  lengua  o  garganta, que puede causar dificultad al tragar o respirar) y picor. \n  Hipoprotrombinemia (alteración de la coagulación) cuando se administra en dosis altas. \n Efectos adversos poco frecuentes (observados entre 1 y 100 de cada 1.000 personas):\n  Síndrome de Reye en menores de 16 años con procesos febriles, gripe o varicela (ver “Antes de tomar ASPIRINA C”). \n  Trastornos del hígado, especialmente en pacientes con artritis juvenil.\n  Anemia \n  Ocasionalmente,  y  a  dosis  superiores  de  600  mg/día  de  vitamina  C  (3  comprimidos/día):  diarrea, enrojecimiento de la piel, dolor de cabeza, náuseas, vómitos y calambres en el estómago. \n  Existe riesgo de formación de cálculos en las vías urinarias o  ataques de gota en individuos predispuestos. \n Con  dosis  prolongadas  de  ácido  acetilsalicílico,  se  han  observado  los  siguientes  efectos  adversos  cuya frecuencia no se ha podido establecer con exactitud: mareos, ruidos en los oídos, sordera, sudoración, dolor  de cabeza, confusión, insuficiencia renal y nefritis intersticial aguda (inflamación a nivel del riñón).\n Si observa la aparición de: \n Malestar o dolor de estómago, hemorragia gástrica o intestinal o deposiciones negras.\n Trastornos de la piel, tales como erupciones o enrojecimiento.\n  Dificultad para respirar.\n  Cambio imprevisto de la cantidad o el aspecto de la orina.\n  Hinchazón de la cara, de los pies o de las piernas.\n  Sordera, zumbido de oídos o mareos. deje de tomar el medicamento y consulte a su médico inmediatamente, ya que pueden indicar la aparición de efectos secundarios que necesitan atención médica urgente.\n Comunicación de efectos adversos:\n Si experimenta cualquier tipo de efecto adverso, consulte a su médico, farmacéutico o enfermero, incluso si se trata de posibles efectos adversos que no aparecen en este prospecto. También puede comunicarlos directamente a través del Sistema Español de Farmacovigilancia de medicamentos de Uso Humano: https://www.notificaram.es. Mediante la comunicación de efectos adversos usted puede contribuir a proporcionar más información sobre la seguridad de este medicamento." 

      },
      {
        titulo:". conservación",
        contenido: "Mantener fuera del alcance y de la vista de los niños. No conservar a temperatura superior a 25ºC.\n Caducidad\n No  utilice  ASPIRINA  C  después  de  la  fecha  de  caducidad  que  aparece    en  el  envase,  tras  la  abreviatura CAD. La fecha de caducidad es el último día del mes que se indica.\n Los medicamentos no se deben tirar por los desagües ni a la basura. Deposite los envases y los medicamentos que no necesita en el Punto Sigre  de la farmacia. En caso de duda pregunte a su farmacéutico cómo deshacerse de los envases y de los medicamentos que no necesita. De esta forma, ayudará a proteger el medio ambiente. " 
      },
      {
        titulo:". contenido e información adicional",
        contenido: "Composición de ASPIRINA C \n Cada comprimido efervescente contiene: - Como principios activos: ácido acetilsalicílico, 400 mg y ácido ascórbico (vitamina C), 240 mg.\n -  Los  demás  componentes  (excipientes)  son:  hidrogenocarbonato  de  sodio,  carbonato  de  sodio  anhidro, sacarina,  citrato  de  sodio,  ácido  cítrico  anhidro,  aroma  tetraroma  naranja,  aroma  naranja,  aroma  limón  y aroma frambuesa. \n Aspecto del producto y contenido del envase\n Este medicamento son comprimidos efervescentes redondos y de color blanco. Se presenta en envases que contienen 10 y 20 comprimidos efervescentes." 
      }
    ]
  }
  

  constructor() { 
    // this.prospecto = this.detalleService.prospecto;
    // A rellenar trae info de resultados prospectos
  }

  ngOnInit() {
  }

}
