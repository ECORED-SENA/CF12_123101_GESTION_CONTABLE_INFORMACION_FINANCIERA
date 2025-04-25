<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Operación del servicio

    .row.mt-4
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En la operación del servicio al cliente se tienen en cuenta los diferentes procesos para dar respuesta a las diferentes necesidades de los usuarios, aunado a ello, se realiza medición de cada uno de estos con el fin de diseñar e implementar acciones de mejora continua.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Normas para el manejo de la información

    p Dentro del marco normativo para la protección de datos está la Ley 1581 de 2012, la cual expresa:

    .row.mt-4
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.bg-t1-4.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema3/img2.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Artículo 1°. Objeto.
                 
          p.text-white  La presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma. (Congreso de la República, 2012).

        .col-md.tarjeta.bg-t1-5.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Artículo 2°. Ámbito de aplicación.
                 
          p Los principios y disposiciones contenidas en la presente ley serán aplicables a los datos personales registrados en cualquier base de datos que los haga susceptibles de tratamiento por entidades de naturaleza pública o privada. La presente ley aplicará al tratamiento de datos personales efectuado en territorio colombiano o cuando al responsable del tratamiento o encargado del tratamiento no establecido en territorio nacional le sea aplicable la legislación colombiana en virtud de normas y tratados internacionales. (Congreso de la República, 2012).

    .tarjeta.bg-t1-4.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema3/img4.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Norma Internacional
              p.text-small.mb-0.text-white Para ampliar los lineamientos aplicables es importante revisar la norma vigente; para ello se recomienda explorar el siguiente recurso
    
            .col-sm-auto
              a.boton.color-acento-botones(href="https://docs.google.com/document/d/1jVBfOd5V9GKLcxlabgO5ugooc6IHyGn5-JTTdtEkPMo/edit?usp=sharing" target="_blank")
                span.text-black Ir al sitio web 
                i.fas.fa-link.text-black

    p.mt-4 De igual forma, el Decreto 1377 de 2013, establece directrices para el tratamiento y protección de datos, la cual reglamenta parcialmente la Ley 1581 de 2012, que dice:

    .row.bg-t1-14.p-4.mt-4
      p Que mediante la Ley 1581 de 2012 se expidió el Régimen General de Protección de Datos Personales, el cual, de conformidad con su artículo 1, tiene por objeto “( … ) desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma” (Ministerio de Comercio, Industria y Turismo, 2013).

      p Que la Ley 1581 de 2012 constituye el marco general de la protección de los datos personales en Colombia (Ministerio de Comercio, Industria y Turismo, 2013).

      p Que mediante sentencia C-748 del 6 de octubre de 2011 la Corte Constitucional declaró exequible el Proyecto de Ley Estatutaria No. 184 de 2010 Senado, 046 de 2010 Cámara (Ministerio de Comercio, Industria y Turismo, 2013).

      p Que con el fin de facilitar la implementación y cumplimiento de la Ley 1581 de 2012 se deben reglamentar aspectos relacionados con la autorización del Titular de información para el Tratamiento de sus datos personales, las políticas de Tratamiento de los Responsables y Encargados, el ejercicio de los derechos de los Titulares de información, las transferencias de datos personales y la responsabilidad demostrada frente al Tratamiento de datos personales, este último tema referido a la rendición de cuentas.
    .row.p-4.bg-t1-15
      .col-lg-8
        p En virtud de lo expuesto:
        p.mb-0 #[b DECRETA]
        p #[b CAPÍTULO 1. DISPOSICIONES GENERALES]

        ul.lista-ul--color
          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 #[b Artículo 1. Objeto.] El presente Decreto tiene como objeto reglamentar parcialmente la Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales (Ministerio de Comercio, Industria y Turismo, 2013).
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 190px").m-auto

    p.mt-4 Actualmente existe la Ley de Protección de Datos, que tiene como objetivo proteger el derecho de las personas a conocer, actualizar y rectificar su información; por lo tanto, es importante que las empresas conozcan y apliquen las directrices dadas en estas sobre el tratamiento de la información de los clientes. Cabe resaltar que el incumplimiento de la Ley acarrea sanciones, multas y cierre temporal o definitivo de las operaciones.

    .row.align-items-center
      .col-lg-6.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img6.png', alt='', style="width: 610px").m-auto

      .col-lg-6
        p Una vez analizada y revisada la norma aplicable, es importante tener en cuenta las políticas internas en cuanto a archivo y documentación de la información relacionada con los clientes donde se tenga en cuenta:

        ul.lista-ul--color
          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Generar copias de seguridad.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Normas de conservación de documentos.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Directrices de seguridad de la información.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Organización de los documentos para fácil acceso.
          
          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Identificación de la información para su consulta.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Solicitudes – tipos

    .row.align-items-center
      .col-lg-7
        p.p-4.bg-t1-9 En el desarrollo de las actividades empresariales y en atención del objeto social, se presentan diversas solicitudes de los clientes; por ello, es importante que se encuentre diseñado el manual de políticas, que expresen las directrices que se deben de tener en cuenta en un proceso determinado.

        p Dentro de las solicitudes de los clientes encontramos:

        .row
          .col-lg-6
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Peticiones.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Quejas.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Reclamos.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Denuncia.

          .col-lg-6
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Consulta.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Felicitaciones.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Sugerencias.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Devoluciones.

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img7.png', alt='', style="width: 610px").m-auto

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Planes de contingencia

    .row.justify-content-center
      .col-lg-10.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-t1-9
              .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/img8.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg-7.p-lg-5 
                p.p-lg-0.p-2 El plan de contingencia relaciona las medidas que debe tener en cuenta la empresa para garantizar la atención de los clientes y cumplir con los requerimientos y solicitudes de acuerdo con los eventos presentados; por ello, la organización debe mantener los planes en caso de algún tipo de riesgo o eventualidad.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Reportes de fallas

    .row.align-items-center
      .col-lg-9
        p Para ofrecer un excelente servicio al cliente, atendiendo las necesidades y expectativas en pro de superarlas, se requiere diseñar un plan que relacione la identificación de las fallas y las estrategias pertinentes para cada una, con el fin de mejorar continuamente los procesos y lograr los objetivos propuestos.
        .row.justify-content-center
          .col-lg-12.mt-4
            .row.justify-content-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-stretch.bg-intro1
                  .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/img10.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg-7.p-lg-5 
                    p.p-lg-0.p-2 Cabe resaltar que las tecnologías de la información contribuyen al fortalecimiento de este proceso, teniendo en cuenta que presentan herramientas ofimáticas para realizar el seguimiento y control a las fallas presentadas en un tiempo determinado. Dentro de este proceso es fundamental que la empresa determine sus características, causas, consecuencias, soluciones y tiempo de respuesta.


        p.mt-4 El factor tiempo y estructura de la respuesta contribuyen a fortalecer la interacción entre el cliente y la empresa, demostrando interés, responsabilidad y compromiso con las necesidades y expectativas de los clientes.

        p Algunos reportes que se deben analizar son:
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img9.png', alt='', style="width: 304px").m-auto



    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-secundario
          .bloque(numero="1" titulo="Preguntas frecuentes (FAQ)") 

            p Se deben analizar las diferentes dudas e inquietudes de los clientes, con el fin de implementar estrategias de mejoramiento o tomar acciones correctivas. Algunas empresas diseñan un manual con preguntas frecuentes con el fin de anticiparse a las posibles preguntas de los clientes, esto garantiza atención de forma oportuna.

            p Cabe resaltar que los colaboradores deben conocer muy bien cada uno de sus procesos para dar respuesta clara y concisa a las necesidades planteadas.
          

          p(numero="2" titulo="Listado de casos pendientes") Se requiere seguimiento y monitoreo constante a los casos presentados con los clientes, teniendo en cuenta responder, oportunamente, dando una solución acorde a la necesidad con el fin de lograr la satisfacción del cliente y, por ende, su fidelización; no hay que olvidar que un caso no gestionado adecuadamente, genera malestar en el cliente, pérdida de este y disminución en los ingresos.

          p(numero="3" titulo="Tiempo de respuesta") Deben implementarse indicadores que permitan monitorear la gestión de los casos por parte de los colaboradores; por ello, se requiere que se establezca un tiempo prudente para la atención de estos, cabe resaltar que se deben tener en cuenta el tipo de caso, sus características y el tiempo promedio de respuesta.

          p(numero="4" titulo="Calificaciones o puntajes de tus colaboradores") En las calificaciones de los colaboradores es importante analizar la percepción que tienen los clientes, esta información contribuye en el diseño de acciones correctivas, además que permite fortalecer las competencias y habilidades; por ello, es importante implementar encuestas de satisfacción que permitan identificar las debilidades y fortalezas de cada uno.

          p(numero="5" titulo="Cantidad de casos recibidos") Se debe analizar el número de reportes que se generan en un tiempo determinado, puede ser quincenal o mensual de acuerdo con la política establecida por la organización; esto permite identificar las solicitudes atendidas por los clientes internos y el cumplimiento de acuerdo con el tiempo acordado (Pérez, 2017).

      .col-8.col-lg-4.mt-lg-0.mt-4
        figure
          img(src="@/assets/curso/tema3/img11.png", alt="alt")

    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 Respuesta: definición, técnicas, tiempo

    p Dentro de las solicitudes de los clientes encontramos:

    .row.g-4
      .col-lg-6.px-lg-4
        .row.bg-intro1.p-4
          ul.lista-ul--color
            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Escuchar atentamente al cliente.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Analizar el caso y, en lo posible, otorgar una respuesta que resuelva la duda o inconvenientes.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Evitar que el caso trascienda, para ello se debe dialogar y conciliar.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Realizar llamadas telefónicas al cliente, si el caso lo requiere.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Tener excelente actitud y disposición.

      .col-lg-6
        .row.bg-t1-15.p-4
          ul.lista-ul--color
            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Aplicar principios y valores éticos.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Tener en cuenta las políticas de la empresa.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Registrar el caso y dar a conocer al cliente que su solicitud se encuentra en proceso.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Soportar las respuestas otorgadas al cliente.

            li.d-flex
              i.fa-solid.fa-greater-than
              |
              p.mb-0 Manejar un tiempo prudente para solución de casos y atender el cliente.


    p.mt-4 Para atender oportunamente las solicitudes, peticiones y requerimientos de los clientes es fundamental otorgar respuesta en el menor tiempo posible con el fin de lograr la satisfacción y fidelización de este. Por ello, existen técnicas de optimización de tiempo, entre las cuales figuran:

    .row.bg-t1-18.mt-4.align-items-center
      .col-12
        .p-5
          .row.d-flex.align-items-stretch
            .col-lg-6.d-flex.flex-column.px-lg-5
              .row.flex-fill.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img12.png", alt="", style="width: 85px; margin-top:-20px")
                .col-lg-10.d-flex.flex-column.justify-content-between
                  .contenido
                    p.mb-0 #[b Investigación de prospectos: ]
                    p Para ello se debe conocer el cliente, su comportamiento y características con el fin de determinar el tiempo justo de respuesta, lo que conducirá a fidelizar y aumentar clientes.
                hr.hr-t2.mt-auto

            .col-lg-6.d-flex.flex-column.px-lg-5
              .row.flex-fill.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img13.png", alt="", style="width: 85px; margin-top:-20px")
                .col-lg-10.d-flex.flex-column.justify-content-between
                  .contenido
                    p.mb-0 #[b Envío de mensajes por el canal idóneo:]
                    p De acuerdo con el perfil de cliente, se observa cuál es el canal de comunicación más adecuado para proporcionar la información.
                hr.hr-t2.mt-auto

          .row.d-flex.align-items-stretch
            .col-lg-6.d-flex.flex-column.px-lg-5
              .row.flex-fill.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img14.png", alt="", style="width: 85px; margin-top:-20px")
                .col-lg-10.d-flex.flex-column.justify-content-between
                  .contenido
                    p.mb-0 #[b Difundir mensajes en periodos de descanso:]
                    p Se debe buscar el tiempo propicio para dar respuesta, teniendo en cuenta las diversas actividades que realizan los clientes a diario.
                hr.hr-t2.mt-auto

            .col-lg-6.d-flex.flex-column.px-lg-5
              .row.flex-fill.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img15.png", alt="", style="width: 85px; margin-top:-20px")
                .col-lg-10.d-flex.flex-column.justify-content-between
                  .contenido
                    p.mb-0 #[b Adecuar la información a sus necesidades:]
                    p Se trata de ser detallado y claro con la información que se suministra para anticiparse a los eventos y disminuir algún tipo de solicitud de los clientes.
                hr.hr-t2.mt-auto

          .row.d-flex.align-items-stretch
            .col-lg-6.d-flex.flex-column.px-lg-5
              .row.flex-fill.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img16.png", alt="", style="width: 85px; margin-top:-20px")
                .col-lg-10.d-flex.flex-column.justify-content-between
                  .contenido
                    p.mb-0 #[b Más planificación y organización:]
                    p Se requiere planificación y organización para atender los requerimientos de los clientes en el tiempo justo, dando respuesta y solución a los mismos.
                hr.hr-t2.mt-auto

            .col-lg-6.d-flex.flex-column.px-lg-5
              .row.flex-fill.align-items-center
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img17.png", alt="", style="width: 85px; margin-top:-20px")
                .col-lg-10.d-flex.flex-column.justify-content-between
                  .contenido
                    p.mb-0 #[b Seguimiento y control:]
                    p Todo proceso se debe monitorear con el fin de generar acciones correctivas que contribuyan al mejoramiento continuo de la organización. Simplemente lo que no se mide y controla, no funciona adecuadamente (WTS, 2019).
                hr.hr-t2.mt-auto




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
