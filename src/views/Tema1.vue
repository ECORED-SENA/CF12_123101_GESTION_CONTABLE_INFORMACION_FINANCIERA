<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Políticas: normas y procedimientos del servicio

    .row.justify-content-center
      .col-lg-12.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-t1-1
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.p-lg-5
                .p-2.w-100.align-items-center
                  p En la actualidad, en medio de tanta competitividad se hace necesario que las empresas tengan una cultura empresarial, y de servicio al cliente, donde se otorgue gran importancia a la satisfacción de las necesidades, expectativas y gustos de los diferentes usuarios.

                  p Para lograr los objetivos propuestos es fundamental que los colaboradores que se relacionan directamente con los clientes externos, se encuentren comprometidos y capacitados para desempeñarse ante cualquier evento que se pueda presentar en ejercicio de las actividades propias de la empresa y su cargo.

      p.mt-4 Aunado a ello, no se puede desconocer la importancia de atender las necesidades de los clientes internos; por ello, se requiere que la empresa, en cabeza de la administración y el departamento de talento humano, analicen y controlen las diferentes situaciones que se presentan a nivel interno y que, de una u otra manera, puedan afectar el desempeño dentro de la organización; cabe resaltar que para este proceso existen técnicas como la medición a través de indicadores de gestión, observación, encuestas, entre otras herramientas, que permiten el mejoramiento continuo de los procedimientos relacionados con los clientes internos y externos.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Normatividad vigente aplicada al sector

    .row.justify-content-center.align-items-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 500px").m-auto
      .col-lg-7
        .row.align-items-center
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img3.png", alt="", style="width: 85px").m-auto
          .col-lg-10
            p Con el fin de obtener resultados que beneficien positivamente las actividades relacionadas con el servicio al cliente, es importante diseñar e implementar un manual de políticas que permita orientar a los clientes ante cualquier proceso en el cual se puedan ver involucrados.

        p Su objetivo es servir de guía de acción referente al proceso del servicio al cliente; en la cual se debe especificar y detallar las actividades a realizar en diferentes escenarios; además de relacionar el objetivo, alcance, política, etc..; esto permitirá que los clientes internos y externos tengan claridad de los procedimientos establecidos para el manejo de garantías, cambios y devoluciones, proceso de distribución de productos o prestación de servicios, manejo en las peticiones, quejas y recursos, aplicación e interpretación de indicadores de gestión y comunicación antes, durante y después de la venta del bien o prestación del servicio.

    .row.mt-4.justify-content-center.align-items-center
      .col-lg-5
        .p.p-4.bg-t1-2 Se debe entender que el servicio inicia desde que el cliente muestra interés por nuestros productos o servicios, desde este momento se requiere acompañamiento y asesoría permanente para que pueda tomar decisiones acertadas de compra que en últimas se verán reflejadas en la satisfacción del servicio. Finalmente, cuando el cliente haya obtenido el producto o servicio la empresa debe continuar con acciones relacionadas con las garantías, instalaciones, mantenimientos y actividades adicionales que generen confianza y seguridad.

      .col-lg-7
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            .figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style="width: 295px").m-auto

          .col-lg-7
            .figure.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img5.svg", alt="", style="width: 85px")

            p.mt-4.mt-lg-0 En tal sentido es indispensable tener en cuenta las generalidades e importancia del contexto de la organización y su entorno; aunado a ello, las características, deseos y expectativas de los clientes, pues de esta manera se implementarán estrategias que conlleven a la excelencia del servicio en sus tres etapas: antes, durante y después.

    .row.mt-4
      .bloque-texto-g.bloque-texto-g--inverso.bg-t1-3.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img6.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Dentro del marco normativo hacemos referencia a la norma ISO 9001:2015, la cual tiene como objetivo principal la eficiencia del sistema de gestión de calidad, donde se incorporan los requisitos y directrices a tener en cuenta para el adecuado servicio y por ende la mejora continua de la organización.
            br
            br
            | Es importante resaltar que estas normas son de carácter voluntario para las empresas, y quienes desean realizar el proceso de acreditación, obtengan una certificación que les ofrece mayor posicionamiento en el mercado, teniendo en cuenta que brinda seguridad y confianza a las partes interesadas.

    .tarjeta.bg-t1-4.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Norma ISO 9001/2015
              p.text-small.mb-0.text-white Para ampliar la información se requiere analizar la normatividad vigente; por lo tanto, se invita a explorar el siguiente recurso
    
            .col-sm-auto
              a.boton.color-acento-botones(href="https://docs.google.com/document/d/1jVBfOd5V9GKLcxlabgO5ugooc6IHyGn5-JTTdtEkPMo/edit?usp=sharing" target="_blank")
                span.text-black Ir al sitio web 
                i.fas.fa-link.text-black

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Portafolio de productos: Características y tipos

    .row.justify-content-center.align-items-center
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img8.png', alt='', style="width: 500px").m-auto

      .col-lg-7
        .p Teniendo en cuenta los cambios que presenta constantemente el mercado y las tecnologías de la información, las empresas se ven en la obligación de diseñar estrategias que permitan dar a conocer sus productos de una forma clara, creativa y ágil. Por ende, diseñar portafolios de productos y/o servicios, donde se incorpora la diversidad de productos que ofrece, teniendo en cuenta sus características, precios y servicios posventa, proveedores, zonas y horarios de atención. Adicionalmente, relaciona el direccionamiento estratégico de la organización como lo es la misión, visión, objetivos, políticas, con el fin de dar a conocer también la empresa y lograr que los clientes tengan un sentido de pertenencia por la misma.

        .row.align-items-center.mt-4
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img9.svg", alt="", style="width: 85px").m-auto
          .col-lg-10
            .p El principal objetivo del portafolio es servir de herramienta de marketing, de esta manera la empresa se da a conocer y su vez presenta los productos y/o servicios, siendo un medio de publicidad que permite a la empresa incrementar su mercado objetivo.

    .row.justify-content-center.mt-4
      .col-lg-12.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-intro1
              .col-lg.p-lg-5
                .p-2.w-100.align-items-center
                  p #[b Características:]

                  ul.lista-ul--color
                    li.d-flex
                      i.fa-solid.fa-check
                      |
                      p.mb-0 Son documentos informativos. 

                    li.d-flex
                      i.fa-solid.fa-check
                      |
                      p.mb-0  Es una herramienta de mercadeo y publicidad. 

                    li.d-flex
                      i.fa-solid.fa-check
                      |
                      p.mb-0 El diseño presenta elementos creativos e innovadores para llamar la atención de los clientes. 

                    li.d-flex
                      i.fa-solid.fa-check
                      |
                      p.mb-0 Relaciona los productos y/o servicios a ofertar. 

                    li.d-flex
                      i.fa-solid.fa-check
                      |
                      p.mb-0 Registra la misión, visión, políticas, proveedores y servicios implícitos.

              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img10.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Tipos

    .row.mt-4
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.bg-t1-4.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema1/img11.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Portafolios físicos
                 
          p.text-white Son documentos impresos, pueden ser trípticos o dípticos que manejan información concisa y manual de publicidad que se encuentra escrito de forma completa.

        .col-md.tarjeta.bg-t1-5.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema1/img12.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Portafolios digitales
                 
          p Son formatos que son presentados en diferentes herramientas ofimáticas, páginas web y que se pueden visualizar a través de computadores, tablets, celulares, etc… 

    p Recordemos que la Organización Internacional de Normalización con Norma ISO 9001/2015, establece el numeral 8 “operación”, el cual incorpora la planificación y control operacional, además de los requisitos para los productos y servicios, teniendo en cuenta además su revisión, control y diseño. (ISO, 2015)


    .row.justify-content-center
      .col-lg-12.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-intro1
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img13.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.p-lg-5
                .p-2.w-100.align-items-center
                  p El anterior apartado relaciona los criterios para los procesos, determinación de recursos; aunado a ello, los requerimientos normativos que debe de tener el producto o servicio para que cumpla con los estándares de calidad. Al dar cumplimiento a los criterios establecidos le permite obtener o mantener la certificación de la norma; por tal motivo, se requiere que la empresa realice una auditoría interna de calidad que garantice el cumplimiento de los procesos y procedimientos requeridos en los manuales de la empresa.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
