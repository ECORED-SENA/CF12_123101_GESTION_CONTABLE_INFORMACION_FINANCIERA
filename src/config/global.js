export default {
  global: {
    Name: 'Servicio al cliente',
    Description:
      'En el ámbito empresarial y profesional es fundamental aplicar técnicas y herramientas de servicio al cliente, que satisfagan las necesidades y expectativas de los diferentes usuarios; por lo anterior, se trabajará la temática de servicio al cliente, donde se desarrolla su clasificación, tipología, técnicas de comunicación, etiqueta y protocolo empresarial, normatividad vigente y operación del servicio referente al manejo de información, solicitudes y respuestas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Políticas: normas y procedimientos del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Normatividad vigente aplicada al sector',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Portafolio de productos: Características y tipos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Servicio: definición, ciclo, triángulo, momentos de verdad, protocolo, procedimiento, normas técnicas, canales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Cliente o usuario: definición, clasificación, tipología, características de población vulnerable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Comunicación: definición, técnicas, tipos, expresión oral y escrita',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Etiqueta y protocolo empresarial',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Operación del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normas para el manejo de la información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Solicitudes – tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Planes de contingencia',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Reportes de fallas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Respuesta: definición, técnicas, tiempo',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gerencia del servicio',
      referencia:
        'Prieto, J. (2018). <em>Gerencia del servicio</em>. (4a. ed.). Ecoe Ediciones. ',
      tipo: 'Capítulo I, II, III',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6320',
    },
    {
      tema: 'Política de Atención al Cliente - <em>Pymerang</em>',
      referencia:
        'Ugalde, R., A., (16 de septiembre de 2019) <em>Política de Atención al Cliente</em>. Pymerang.com',
      tipo: 'Página web',
      link:
        'http://www.pymerang.com/direccion-de-negocios/1003-cuando-la-responsabilidad-social-mejora-el-servicio-al-cliente',
    },
    {
      tema: 'Métricas e indicadores para la gestión de servicios ITL',
      referencia:
        'Fernández, P., J. L. (14 de septiembre de 2019). <em>Midiendo ITIL, métricas e indicadores para la gestión de servicios ITL</em>. Proactivanet.com',
      tipo: 'Página web',
      link:
        'https://www.proactivanet.com/UserFiles/File/Noticias/Metricas%20ITIL.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'las acciones que se ejecutan para satisfacer necesidades y expectativas.',
    },
    {
      termino: 'Calidad',
      significado:
        'conjunto de características relacionadas con la capacidad de satisfacer expectativas.',
    },
    {
      termino: 'Ciclo de servicio',
      significado:
        'herramienta secuencial de pasos lógicos donde existen interacciones que muestran el inicio del proceso, puntos de contactos denominados momentos de la verdad y el final del ciclo.',
    },
    {
      termino: 'Cliente',
      significado: 'persona que adquiere productos o servicios.',
    },
    {
      termino: 'Comunicación',
      significado:
        'intercambio de información entre dos o más personas, con el fin de comunicar un mensaje.',
    },
    {
      termino: 'Etiqueta',
      significado: 'normas y directrices aplicables en diferentes escenarios.',
    },
    {
      termino: 'ISO',
      significado:
        'International Organization for Standardization. organismo emisor de normas internacionales enfocada a la calidad, seguridad y eficiencia de productos y servicios.',
    },
    {
      termino: 'Momentos de verdad',
      significado:
        'interacción que existe entre el cliente y la empresa. Se presenta una serie de actividades y/o acciones con el fin de adquirir el producto o servicio, como resultado se generan momentos negativos o positivos de acuerdo con la percepción del cliente y originadas por la experiencia obtenida desde que realizó contacto con la empresa.',
    },
    {
      termino: 'Servicio',
      significado:
        'conjunto de actividades que se realizan para satisfacer las necesidades de los clientes desde que realiza contacto con la empresa hasta finalizar el ciclo del servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abello, M. C., Abello, V., y Molina, H. (2016). <em>Atención al cliente</em>: Ciclo del servicio. [Gráfico].',
      link:
        'https://1.bp.blogspot.com/-4y0z4as4h-U/WAWYnuiQSUI/AAAAAAAAAJ0/biKAyFHT624wRCcbFQZsExtGqphyHFj7wCLcB/s1600/cooonc.png',
    },
    {
      referencia:
        'Albrecht, K. (1992). Triángulo del servicio [Esquema]. <em>En La excelencia en el servicio</em>. Legis Ltda.',
      link: '',
    },
    {
      referencia:
        'Albrecht, K., y Bradford, L. J. (1992). <em>La excelencia en el servicio</em>. Legis Ltda.',
      link: '',
    },
    {
      referencia:
        'Alcázar P. (2020). <em>El cliente- relación empresa-cliente UT9.</em> ',
      link:
        'https://www.edebe.com/ciclosformativos/zona-publica/UT09_830030_LA_CEyAC_CAS.pdf',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2010). <em>Cartilla práctica. Etiqueta empresarial.</em>',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/1172/4614_cartilla_etiquetaempresarial.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Congreso de la República. (18 de octubre de 2012). Ley 1581 de 2012. ',
      link:
        'Shttp://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
    {
      referencia:
        'Da Silva, D. (2020). <em>Protocolo de atención y servicio al cliente: ¿qué es, por qué es importante para tu empresa, ¿cómo hacerlo y cuáles son sus ventajas?</em>',
      link: 'https://www.zendesk.com.mx/blog/protocolo-de-atencion-al-cliente/',
    },
    {
      referencia:
        'Fórmate. (16 de agosto de 2017). 5 consejos y técnicas de comunicación con el cliente.',
      link:
        'https://www.formate.es/blog/consejos/5-consejos-y-tecnicas-de-comunicacion-con-el-cliente/',
    },
    {
      referencia:
        'Martínez, M. (2013). <em>Manual básico de protocolo empresarial y social</em>. Díaz de Santos.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4043',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (27 de junio de 2013). Decreto 1377 de 2013.',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Decretos/2013/Documents/JUNIO/27/DECRETO%201377%20DEL%2027%20DE%20JUNIO%20DE%202013.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2015). <em>Sistemas de gestión de la calidad (ISO 9001)</em>.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      referencia:
        'Pérez, O. (13 marzo de 2017). <em>5 reportes esenciales para mejorar el servicio a clientes</em>.',
      link:
        'https://blog.nextup.com.mx/5-reportes-esenciales-para-mejorar-el-servicio-a-clientes',
    },
    {
      referencia: 'Pérez, P., y Merino, M. (2021). Definición de protocolo.',
      link: 'https://definicion.de/protocolo/',
    },
    {
      referencia:
        'Prieto, J. E. (2018). Ciclo de los momentos de verdad. [Esquema]. <em>Gerencia del servicio: La clave para ganar todos.</em>',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/03/Gerencia-del-servicio-4ed.pdf',
    },
    {
      referencia:
        'Prieto, J. E. (2018). Esquema de un momento de verdad [Esquema]. <em>Gerencia del servicio: La clave para ganar todos.</em>',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/03/Gerencia-del-servicio-4ed.pdf',
    },
    {
      referencia:
        'Prieto, J. E. (2018). <em>Gerencia del servicio: la clave para ganar todos</em>. (4 ed.) [Libro electrónico]. ECOE Ediciones. ',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/03/Gerencia-del-servicio-4ed.pdf',
    },
    {
      referencia: 'Thompson, I. (2006). <em>Tipos de clientes</em>. ',
      link:
        'https://www.promonegocios.net/clientes/tipos-clientes.html#:%7E:text=%2D%20Clasificaci%C3%B3n%20Espec%C3%ADfica%3A&text=Clasificaci%C3%B3n%20de%20los%20Clientes%20Actuales,satisfacci%C3%B3n%20y%20grado%20de%20influencia.',
    },
    {
      referencia:
        'Villanueva, R. (2017). <em>Comunicación y atención al cliente en hostelería y turismo</em>. IC Editorial.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8742',
    },
    {
      referencia:
        'WTS. (16 julio de 2019). <em>El tiempo de respuesta al cliente, vital en una venta. Way to Success.</em>',
      link:
        'https://www.wtseo.co/la-importancia-del-tiempo-respuesta-al-cliente/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Patricia Mantilla Galvis',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Maryuri Agudelo Franco',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picon RIncon',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'John Jairo Arciniegas González',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Víctor Raúl Cárdenas Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
