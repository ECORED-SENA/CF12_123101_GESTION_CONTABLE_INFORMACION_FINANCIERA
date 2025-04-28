<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicio: definición, ciclo, triángulo, momentos de verdad, protocolo, procedimiento, normas técnicas, canales

    p En el ámbito empresarial toma gran importancia el servicio al cliente interno y externo; por lo tanto, es indispensable que se generen espacios de confianza y credibilidad; por ello, las empresas aplican normas y prácticas que permiten incrementar la cultura de servicio al cliente, que busca mantener relaciones sólidas, estables y amables con los diferentes usuarios, logrando fidelizar los clientes mediante las experiencias positivas que hayan obtenido en la empresa.

    .row.mt-4
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Hablar de cultura de servicio al cliente implica actuar bajo principios y valores éticos, haciendo énfasis a la comunicación asertiva, relaciones interpersonales, respeto, responsabilidad, compromiso y honestidad con los clientes internos y externos, generando un excelente clima organizacional. Recordemos que los clientes satisfechos y felices contribuyen en el mejoramiento de la organización, permiten que cada vez seamos mejores en nuestras actividades, logrando posicionar a la empresa.

    p.mt-4 Con el fin de avanzar y generar un aprendizaje significativo, a continuación, se presenta la definición de servicio atendiendo a los siguientes autores:

    .row.justify-content-center.align-items-center
      .col-lg-4 
        .bloque-texto-c.p-4.higth-recuadros
          i.fas.fa-quote-right
          p.mb-2.mt-5 #[b Es toda acción que usted hace para motivar a un cliente]
          br
          p - Prieto, 2018.

      .col-lg-4.mt-lg-0.mt-4
        .bloque-texto-c.p-4.higth-recuadros
          i.fas.fa-quote-right
          p.mb-2.mt-4 #[b El servicio es un intangible que solo se conoce en su real valor cuando se utiliza. Es el conjunto de prestaciones que el cliente espera recibir, por el que paga y en relación con el precio, la imagen y la representación de la firma que lo presta]
          span - Gustavo Posada Moreno, Prieto, 2018.

      .col-lg-4.mt-lg-0.mt-4
        .bloque-texto-c.p-4.higth-recuadros
          i.fas.fa-quote-right
          p.mb-2.mt-4 #[b El servicio es la forma de satisfacer permanente y totalmente las necesidades, deseos, apetencias e inquietudes de un cliente]
          br
          p - Cristhiam Camilo Prieto Téllez, Prieto, 2018.


    .row.align-items-center.mt-4.bg-t1-7.p-4
      .col-lg-1.d-none.d-lg-block 
        figure
          img(src="@/assets/curso/tema2/img2.svg", alt="", style="width: 73px").m-auto
      .col-lg-11
        p Con base en los conceptos anteriores, podemos expresar que el servicio es el conjunto de actividades que se realizan para satisfacer las necesidades de los clientes desde que realiza contacto con la empresa hasta finalizar el ciclo del servicio. Recordemos que este se realiza de forma individual teniendo en cuenta las características del cliente, sus necesidades y expectativas; por lo anterior, se requiere realizar una bitácora informativa que permita conocer sus preferencias, comportamientos de compra, uso y consumo.

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-4 
        p Actualmente existen herramientas que contribuyen al mejoramiento de las relaciones con el cliente; lo que se denomina gestión de las relaciones, esta estrategia combina la tecnología de la información con la cultura organizacional, donde el principal objetivo es mantener excelentes relaciones y satisfacer las necesidades de los clientes.
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 400px").m-auto
      .col-lg-4
        .row.p-4.bg-t1-8 
          p #[b Características de los servicios:]
          ul.lista-ul--color
            li.d-flex
              i.fa-solid.fa-check
              |
              p.mb-0 Son intangibles.

            li.d-flex
              i.fa-solid.fa-check
              |
              p.mb-0 Son indivisibles. 

            li.d-flex
              i.fa-solid.fa-check
              |
              p.mb-0 Son heterogéneos. 

            li.d-flex
              i.fa-solid.fa-check
              |
              p.mb-0 No se pueden conservar.
            
    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Ciclo del servicio

    p.mt-4 Es una herramienta secuencial de pasos lógicos donde existen interacciones que muestran el inicio del proceso, puntos de contactos denominados momentos de la verdad y el final del ciclo. Su objetivo se enfoca al mejoramiento continuo para satisfacer las expectativas del cliente frente al producto o servicio.

    .row.mt-4
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img4.png', alt='', style="width: 505px").m-auto
      .col-lg-7
        p.p-4.bg-t1-9 Esto inicia desde que el cliente muestra interés y se genera comunicación entre el cliente y la empresa, donde se presentan una serie de actividades hasta llegar al final del proceso. Para su elaboración se relaciona un círculo y de forma secuencial se presentan cada uno de los ciclos denominados momentos de verdad, estos deben ser numerados y se registran teniendo en cuenta el punto de vista del cliente; motivo por el cual se presentan de forma positiva o negativa de acuerdo con la percepción y sensación de este.

        p Los ciclos de servicio permiten:

        ul.lista-ul--color
          li.d-flex
            i.fa-solid.fa-check
            |
            p.mb-0 Solucionar problemas o inconvenientes.
          
          li.d-flex
            i.fa-solid.fa-check
            |
            p.mb-0 Analizar la percepción del cliente. 

          li.d-flex
            i.fa-solid.fa-check
            |
            p.mb-0 Definir estrategias de mejoramiento continuo.

          li.d-flex
            i.fa-solid.fa-check
            |
            p.mb-0 Visualizar las sensaciones y experiencias de los clientes.

    .row.mt-4.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Ciclo del servicio

        figure
          img(src='@/assets/curso/tema2/img5.svg', alt='Diagrama en cuatro pasos del proceso de atención al cliente: 1- Atender al cliente con amabilidad, 2- Aclarar la situación respondiendo sus dudas, 3- Satisfacer o exceder sus necesidades cumpliendo expectativas, y 4- Verificar la satisfacción final del cliente respecto al producto o servicio.', style="width: 1030px").m-auto 

    p.mt-4 A continuación, se presenta, como ejemplo, el ciclo del servicio de un restaurante.

    .row.mt-4.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Ciclo del servicio

        figure
          img(src='@/assets/curso/tema2/img6.svg', alt='Diagrama circular sobre el ciclo del servicio en atención al cliente que incluye doce etapas: facilidad de estacionamiento, aspecto del establecimiento, recepción, asignación de mesa, atención y espera por la carta, toma de la orden, espera por el servicio, calidad del servicio, atención durante el servicio, espera por la cuenta, pago de la cuenta y despedida.', style="width: 1030px").m-auto 

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Momentos de verdad

    .row.mt-4.align-items-center
      .col-lg-8
        .row
          .col-lg-2.d-none.d-lg-block 
            figure
              img(src="@/assets/curso/tema2/img7.svg", alt="", style="width: 85px").m-auto
          .col-lg-10
            p Es la interacción que existe entre el cliente y la empresa. Se presentan una serie de actividades y/o acciones con el fin de adquirir el producto o servicio, como resultado se generan momentos negativos o positivos de acuerdo con la percepción del cliente originadas por la experiencia obtenida desde que realizó contacto con la empresa.

        p.mt-2 El objetivo es anticiparse a dichos momentos y de esta manera implementar estrategias que contribuyan a obtener experiencias positivas y satisfactorias para los clientes. Cabe resaltar que la actitud y compromiso de los colaboradores inciden directamente en la percepción de estos; por ende, la importancia de capacitarlos y generar un clima organizacional para beneficio de las partes interesadas.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 500px").m-auto


    .row.bg-t1-10
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 3.
                span Esquema de un momento de verdad

              figure
                img(src='@/assets/curso/tema2/img9.svg', alt='Esquema sobre el momento de verdad en la atención al cliente que representa un proceso donde las entradas (deseos, dinero, necesidades, pasiones) se transforman en salidas (satisfacción, amistad, aceptación, desilusión), influenciado por la interacción entre el cliente y el servicio', style="width: 1030px").m-auto 
              
                figcaption.mt-4 Nota. Tomada de Prieto (2018)


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.m-2 Tipos de momentos de verdad

    p.mt-4 Los momentos de verdad se encuentran clasificados en:

    .row.mt-4
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.bg-t1-4.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema2/img10.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Momentos dulces
                 
          p.text-white es la percepción positiva del cliente, que logra satisfacer sus necesidades y expectativas, logrando su fidelización y permanencia con la organización

        .col-md.tarjeta.bg-t1-5.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema2/img11.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Momentos amargos
                 
          p hace referencia a la experiencia obtenida por el cliente, la cual no logra satisfacer sus necesidades y expectativas. 


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.m-2 Etapas de momentos de verdad

    .row.mt-3
      ul.lista-ul--color
        li.d-flex
          i.fa-solid.fa-greater-than
          |
          p.mb-0 Momento inicial: primer contacto entre el cliente y la empresa.

        li.d-flex
          i.fa-solid.fa-greater-than
          |
          p.mb-0 Momento crítico: periodo en el cual se toma la decisión. 

        li.d-flex
          i.fa-solid.fa-greater-than
          |
          p.mb-0 Momento final: experiencia del cliente.

    .row.bg-t1-11
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 3.
                span Esquema de un momento de verdad

              figure
                img(src='@/assets/curso/tema2/img12.png', alt='Diagrama cíclico sobre las etapas de la experiencia del cliente que incluye momento inicial, momento de verdad, momento final y momento crítico, conectados mediante flechas que indican un flujo continuo.', style="width: 818px").m-auto 
              
                figcaption.mt-4 Nota. Tomada de Prieto (2018)
      

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Triangulo del servicio

    p.mt-4 El Triángulo del servicio, propuesto en 1992 en el libro La excelencia en el servicio, representa gráficamente la filosofía de atención al cliente a través de tres componentes fundamentales: el cliente, la estrategia y el personal, apoyados por los sistemas de la organización.

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/TjY8T_FHlTE?si=UL6eRPY2tRdHiL-i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mt-4.bg-t1-7.p-4
      .col-lg-1.d-none.d-lg-block 
        figure
          img(src="@/assets/curso/tema2/img13.svg", alt="", style="width: 73px").m-auto
      .col-lg-11
        p La siguiente figura ilustra la estructura del Triángulo del servicio, un modelo que resalta la importancia de la alineación entre tres componentes clave: estrategia, personas y sistemas.

    .row.bg-t1-12
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 3.
                span Esquema de un momento de verdad

              figure
                img(src='@/assets/curso/tema2/img14.svg', alt='Diagrama del triángulo del servicio compuesto por cuatro elementos: estrategia, sistemas, personas y cliente, ubicados en forma triangular con el cliente al centro.', style="width: 818px").m-auto 
              
                figcaption.mt-4 Nota. Tomada de Prieto (2018)


    .row.mb-2.ms-0.mt-2
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Protocolo y procedimiento de servicio al cliente

    
    .row.align-items-center.mt-4
      .col-lg-5
        p.p-4.bg-t1-8 Las empresas en el desarrollo de sus actividades y en pro de mantener un excelente servicio deben generar el documento que incorpore el protocolo y procedimientos que deben implementar los colaboradores para generar momentos dulces o experiencias positivas. En términos generales estamos hablando de un manual que relaciona los procedimientos unificados, donde relacionan las actividades que se ejecutan en determinado suceso.
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img15.png', alt='', style="width: 295px").m-auto
      .col-lg-4 
        figure.d-lg-block.d-none
          img(src="@/assets/curso/tema2/img16.svg", alt="", style="width: 63px")
        p.mt-2 Recordemos que este manual debe ser elaborado de forma didáctica, concisa y comprensible para los colaboradores, que sea una guía detallada de los procedimientos de servicio al cliente. Aunado a ello, debe relacionar su objetivo, alcance y direccionamiento estratégico de la organización, además de la actitud que se espera asuman los colaboradores en el desempeño de sus funciones.


    .row.mb-2.ms-0.mt-2
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Ventajas

    .row.bg-t1-13
      .col-12
        .p-5
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema2/img17.png", alt="alt", style="width: 305px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-4")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img18.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2 #[b Estandarizar proceso]
                    p.text-small.text-center.mb-0 Permite la unificación de los criterios aplicables.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img19.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2 #[b Atención y servicio consistente]
                    p.text-small.text-center.mb-0 Existen directrices claras que son aplicadas por los colaboradores de forma consistente. 

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img20.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2 #[b Sirve como guía en las capacitacion]
                    p.text-small.text-center.mb-0 Los colaboradores tienen conocimiento de las normas básicas y se motiva a realizar capacitaciones de mejoramiento continuo. 

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema2/img21.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2 #[b Evitar pérdidas financieras]
                    p.text-small.text-center.mb-0 Un cliente feliz y satisfecho genera fidelización y rentabilidad.

          .row.mb-2.ms-0.mt-2
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
                .col
                  h3.mb-0 Normas técnicas

          p.mt-4 Dentro de las Normas Técnicas aplicable se encuentra la Norma ISO 9001/2015, que expresa:


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.m-2 Objeto y campo de aplicación

    p.mt-4 Esta Norma Internacional especifica los requisitos para un sistema de gestión de la calidad cuando una organización:

    .row.align-items-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img22.png', alt='', style="width: 400px").m-auto

      .col-lg-7
        .row.bg-t1-9.p-4
          ol.lista-ol--cuadro
            li.d-flex.align-items-start
              .lista-ol--cuadro__vineta
                span A
              span.ms-2
                | Necesita demostrar su capacidad para proporcionar regularmente productos y servicios que satisfagan los requisitos del cliente y los legales y reglamentarios aplicables.

        .row.bg-t1-9.p-4.mt-4
          ol.lista-ol--cuadro
            li.d-flex.align-items-start
              .lista-ol--cuadro__vineta
                span B
              span.ms-2
                | Aspira a aumentar la satisfacción del cliente a través de la aplicación eficaz del sistema, incluidos los procesos para la mejora del sistema y el aseguramiento de la conformidad con los requisitos del cliente y los legales y reglamentarios aplicables.


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Ventajas


    .row.mt-4.align-items-center
      .col-lg-7
        p Existen diversos canales de atención al cliente y la utilización de estos depende de las políticas de la empresa y el público al cual se desea atender, entre ellos figuran:

        ul.lista-ul--color
          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 El teléfono y/o móvil.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Correo electrónico.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Páginas web.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Mensajes SMS.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 WhatsApp.

          li.d-flex
            i.fa-solid.fa-greater-than
            |
            p.mb-0 Redes sociales: Facebook, Twitter, Instagram, entre otras.

        p.mt-4.bg-t1-14.p-4 Cabe resaltar, que la tecnología ha tenido un gran avance al pasar de los años y actualmente los empresarios tienen diferentes formas de comunicarse con los clientes de una forma ágil, personalizada y oportuna.

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img23.png', alt='', style="width: 509px").m-auto

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Cliente o usuario: definición, clasificación, tipología, características de población vulnerable

    .row.align-items-center.justify-content-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img24.png', alt='', style="width: 505px").m-auto

      .col-lg-7
        .row.p-4.bg-t1-15
          p Los clientes hacen parte del activo más importante de la empresa, pues es lo que les permite posicionarse en el mercado, contribuyendo notablemente en el crecimiento económico mediante la generación de ingresos, disminuye costos de marketing, debilita la competencia, aumenta la reputación y el buen nombre de la organización y, finalmente, contribuye al mejoramiento continuo de los procesos frente a los productos y/o servicios ofertados.

          a.anexo2.mb-4.d-inline-flex(:href="obtenerLink('/downloads/Cliente-o-usuario.pdf')" target="_blank")
            .anexo2__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p.mb-0(style="color: #006DF0 !important") #[b Anexo.] Cliente o usuario

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Diferencia entre atención al cliente y servicio al cliente.

    p.mt-4 En diversas ocasiones se ha pensado que atención al cliente y servicio al cliente manejan el mismo concepto; sin embargo, este varía de acuerdo con el contexto en el cual se presente.

    .row.mt-4
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.bg-t1-4.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema2/img25.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Atención al cliente
                 
          p.text-white Al hablar de atención al cliente es la interacción directa que existe entre el vendedor y el comprador, específicamente hace referencia al trato que recibe cuando muestra interés por nuestros productos o servicios

        .col-md.tarjeta.bg-t1-5.p-5
          .row.justify-content-center.mb-4.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema2/img26.svg', style="width: 85px")
            .col-lg-10.mt-4
              h4
                span.p-2.bg-t1-6.text-black Servicio al cliente
                 
          p El servicio al cliente hace énfasis a las acciones que se realizan una vez el comprador adquiere su producto o servicio y logra satisfacer sus necesidades completamente. Para que el servicio al cliente sea de calidad se requiere la combinación de atención y servicio al cliente; pues estamos hablando de amabilidad, cortesía y efectividad.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Tipología de los clientes

    p.mt-4 En el mercado encontramos diferentes tipos de clientes que contribuyen a posicionar la empresa, de acuerdo con sus características es importante implementar estrategias enfocadas a la satisfacción y fidelización del cliente, además de ser eficientes en el manejo de recursos; por lo anterior, las estrategias de marketing debes ser innovadoras, creativa, la actitud y disposición del cliente interno (colaboradores) deber ser basada en principios y valores éticos. Los clientes se clasifican en:

    .row.bg-t1-16.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Clientes activos e inactivos

                    ul.lista-ul--color
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Clientes activos:] son los que actualmente adquieren el producto y/o servicio o lo realizaron en un periodo corto.

                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Clientes inactivos:] son aquellos que en algún momento adquirieron el producto y/o servicio, no continúan activos, lo que indica que hay insatisfacción, no se logró fidelizarlos y/o finalmente no necesitan el producto o servicio.

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img27.png')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Clientes actuales
                    p Son los individuos y empresas que adquieren el producto o servicio y constituyen la principal fuente de ingresos, los cuales cumplen sus expectativas, incluyendo el servicio. 
                    ul.lista-ul--color
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Habitual:] son aquellos que adquieren el producto o servicio de forma irregular. 
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Ocasional:] Son aquellos que adquieren el producto o servicio de forma esporádica.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img28.png')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Clientes de alto, promedio y bajo volumen de compras
                    ul.lista-ul--color
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Alto:] Son los clientes que realizan compras en grandes volúmenes y representan el mayor ingreso para la empresa. 

                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Promedio:] son los clientes que se encuentran dentro del promedio general de compradores. 

                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Bajo:] Son los compradores que adquieren el producto ocasionalmente.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img29.png')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Clientes complacidos, satisfechos e insatisfechos
                    ul.lista-ul--color
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Complacidos:] Son los clientes que se encuentran satisfechos; por lo tanto, ha superado las expectativas. 

                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Satisfechos:] Son los clientes que adquieren el producto y/o servicio, cumplen con las expectativas.  

                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Insatisfechos:] son los clientes que no encuentran afinidad con el producto y/o servicio, no cumplen con sus expectativas.
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img30.png')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Clientes influyentes
                    p Se encuentran clasificados en:
                    ul.lista-ul--color
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Altamente Influyentes:] es el grado de convencimiento que ejerce algunos clientes en un individuo o grupo de personas, lo que hace que adquieran el producto y/o servicio. 
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Regular influencia:] son aquellos clientes que ejercen influencia en un grupo reducido de individuos. 
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Influencia nivel familiar:] el grado de influencia que se ejerce en el entorno familiar.


                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img31.png')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Clientes potenciales
                    p Son los individuos o empresas que se consideran pueden ser clientes en un futuro, para lo cual se desarrollan estrategias de marketing con el fin de ampliar el mercado objetivo.
                    ul.lista-ul--color
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Clientes potenciales según su frecuencia:] está relacionado con los periodos cortos o largos en que el cliente potencial podría adquirir el producto y/o servicio. Se clasifican en frecuentes, habituales y ocasionales, su determinación se hace mediante la investigación de mercadeo.
                      
                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Clientes potenciales según volumen de compras:] hace énfasis a los clientes que podrían adquirir el producto en alto, promedio o bajo promedio de compras.

                      li.d-flex
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Clientes potenciales según su influencia:] es el grado de influencia que ejercen los clientes a un grupo determinado, se clasifican en altamente influyente, influencia regular e influencia familiar (Thompson, I. 2006).

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img32.png')


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Comunicación: definición, técnicas, tipos, expresión oral y escrita

    .row.justify-content-center
      .col-lg-12.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-t1-1
              .col-lg-7.p-lg-5
                .p-2.w-100.align-items-center
                .bloque-texto-c.p-4
                    i.fas.fa-quote-right
                    p.mb-2 #[b La comunicación es un proceso mediante el cual transmitimos y/o recibimos información, opiniones y actividades.]
                    span (Prieto, 2002).
              .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/img33.png', alt='', class="w-100 h-100 object-fit-cover")

    p.mt-4 De acuerdo con lo anterior, se puede resaltar que la comunicación es la interacción que ejercen dos personas con el fin de dar a conocer algún tipo de información; por ello, es importante que exista comunicación de doble vía y tener en cuenta las técnicas y fortalecimiento de habilidades para lograr una comunicación eficaz.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Técnicas de comunicación

    .row.align-items-center.mt-4
      .col-lg-8
        p.p-4.bg-t1-9 En el ámbito empresarial existe un gran reto que consiste en implementar técnicas que contribuyan a mantener la comunicación asertiva y excelentes relaciones con los usuarios; por ello, es fundamental que los clientes internos sean capacitados para fortalecer estas competencias y habilidades que se verán reflejadas en la satisfacción de los diferentes usuarios.

        p Para mantener comunicación asertiva con los clientes es importante:

        .row
          .col-lg-6
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Aprender a comunicar las ideas.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Imagen corporativa.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Ser proactivo.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Excelente atención al cliente.

          .col-lg-6
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Demostrar agradecimiento.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Ser respetuoso.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Saber escuchar.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Ser empático y amable (Fórmate, 2017).

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img34.png', alt='', style="width: 505px").m-auto

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Tipos de comunicación

    p.mt-4 De acuerdo con el tipo de cliente y políticas de la empresa se puede presentar la comunicación verbal y no verbal.

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Comunicación verbal")
        .row.align-items-center.p-4
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img35.png', style="width: 505px").m-auto

          .col-md-6.mb-4.mb-md-0
            h4 Comunicación verbal
            p Está constituida por:
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 #[b Expresión oral:] Hace referencia a la interacción verbal que existe entre dos individuos o grupos de personas, donde se comunican palabras o información.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 #[b Expresión escrita:] Hace énfasis a la comunicación que se presenta mediante documentos, estos pueden ser cartas, memorandos, informes, correos, entre otros.

        
          

      .py-3.py-md-4(titulo="Comunicación no verbal")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/img36.png', style="width: 505px").m-auto

          .col-md-6
            h4 Comunicación no verbal
            p Hace referencia al lenguaje corporal que se transmite con los movimientos o gestos. Es importante tener en cuenta la gesticulación, pues de acuerdo con la expresión facial, forma gesticular, mirada, postura y actitud, el cliente se puede llevar una percepción positiva o negativa. 


    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Etiqueta y protocolo empresarial

    .row.align-items-center.justify-content-center

      .col-lg-8
        .row.p-4.bg-intro1
          p De acuerdo con la Cámara de Comercio de Bogotá (2010), en el entorno empresarial los clientes internos deben aplicar normas y reglas de conducta, valores, principios, cultura general y educación con el fin de reflejar la imagen corporativa de la entidad de forma positiva; según el trato ofrecido a los clientes externos se genera una percepción favorable.

          a.anexo2.mb-4.d-inline-flex(:href="obtenerLink('/downloads/Etiqueta-protocolo-empresarial.pdf')" target="_blank")
            .anexo2__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p.mb-0(style="color: #006DF0 !important") #[b Anexo.] Etiqueta y protocolo empresarial

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img24.png', alt='', style="width: 505px").m-auto


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Imagen corporativa

    p.mt-4 La imagen corporativa la otorgan los colaboradores; por ello, es importante seguir los lineamientos establecidos con el fin de que la empresa pueda proyectar la imagen positiva de acuerdo con los objetivos propuestos, conforme lo anterior, se debe tener en cuenta:

    .row.bg-t1-17.mt-lg-4.justify-content-center
      .col-12
        .p-5
          .col-lg-10
            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img37.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b El vestuario]
                p Es importante el manejo de colores y el tamaño con el fin de manejar un vestuario adecuado según las políticas diseñadas.
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img38.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b El cabello y manos]
                p Es importante tener un cabello y uñas organizadas y pulcras, además de analizar lo que le favorece de acuerdo con las características del individuo y las políticas de la empresa.
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img39.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b Sonrisa]
                p Esta refleja amabilidad, actitud positiva y disposición. De igual forma, se debe tener en cuenta la higiene oral
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img40.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b El tono de voz]
                p El tono de voz influye en la percepción del cliente.
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img41.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b Uso de desodorantes y perfumes]
                p Evitar aromas fuertes, es importante que sean discretos.
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img42.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b El maquillaje]
                p Debe ser suave y discreto. El maquillaje va de acuerdo con la ocasión y el vestuario.
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img43.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b El uso de accesorios]
                p Utilizar accesorios sencillos y discretos.
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img44.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b Empatía]
                p Es importante la afinidad y capacidad de identificarse con los individuos que ejercen algún tipo de interacción.
                hr.hr-t2

            .row
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img45.svg", alt="", style="width: 85px").d-block.ms-auto
              .col-lg-10
                p.mb-0 #[b Ser educado y cortés]
                p Los principios y valores definen a una persona y por ende a la empresa que representa (Cámara de comercio de Bogotá, 2010).
                hr.hr-t2

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 64px')
          .col
            h3.mb-0 Imagen corporativa

    p.mt-4 Las normas de cortesía permiten generar lazos de seguridad y confianza para mantener excelentes relaciones interpersonales. De acuerdo con ello es importante:

    .row.align-items-center.mt-4
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img46.png', alt='', style="width: 500px").m-auto

      .col-lg-7
        .row
          .col-lg-6
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Ser amable y jovial.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Ser respetuoso.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Ser gentil.

              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Ser colaborador.

              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Ser empático.

              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Ser honesto.

              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Ser responsable.

              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Ser tolerante.

          .col-lg-6
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Ser puntual.

              li 
                .lista-ol--cuadro__vineta
                  span 10
                | Saber escuchar.

              li 
                .lista-ol--cuadro__vineta
                  span 11
                | Ser creativo y emprendedor.

              li 
                .lista-ol--cuadro__vineta
                  span 12
                | Tener iniciativa.

              li 
                .lista-ol--cuadro__vineta
                  span 13
                | Ser sociable.

              li 
                .lista-ol--cuadro__vineta
                  span 14
                | Tener un tono de voz adecuado.

              li 
                .lista-ol--cuadro__vineta
                  span 15
                | Sonreír





</template>

<script>
export default {
  name: 'Tema2',
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
