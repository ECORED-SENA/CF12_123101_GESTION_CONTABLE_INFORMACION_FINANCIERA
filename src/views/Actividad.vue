<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Fundamentos del servicio al cliente y su aplicación en entornos empresariales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos clave sobre políticas, normas, técnicas y procedimientos relacionados con el servicio al cliente en el contexto empresarial, según la normativa vigente y las buenas prácticas organizacionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de un manual de políticas de servicio al cliente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orientar únicamente a los directivos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Guiar el proceso de atención al cliente en diferentes escenarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar los precios de los productos o servicios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar campañas publicitarias para los clientes externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a los portafolios digitales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son impresos y entregados manualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contienen exclusivamente información legal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Son utilizados solo en eventos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pueden visualizarse en dispositivos electrónicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes afirmaciones describe un momento de verdad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interacción entre cliente y empresa que influye en su percepción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comunicación únicamente con clientes potenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proceso de pago dentro del punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentación de indicadores de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿En el triángulo del servicio, ¿qué representa “la estrategia”?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acciones planeadas para satisfacer necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Normas ISO aplicables al servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La atención a proveedores externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El conjunto de productos ofertados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de cliente ha dejado de adquirir productos o servicios de la empresa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cliente inactivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cliente actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cliente habitual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cliente promedio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué es la comunicación no verbal según el componente formativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La emisión de mensajes por redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El uso de correo electrónico corporativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El lenguaje corporal como forma de interacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los discursos empresariales en reuniones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes NO es una regla básica de etiqueta en el entorno empresarial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser puntual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Demostrar amabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar fragancias intensas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tener una actitud positiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué norma regula el tratamiento de datos personales en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 2649 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 1581 de 2012.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Código de Comercio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de solicitud representa una inconformidad presentada por un cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Petición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consulta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sugerencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Queja.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se debe hacer para dar una respuesta efectiva a una solicitud del cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escuchar atentamente, analizar y brindar solución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Redirigir al cliente a otra empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar un informe semanal sobre la venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar registrar la queja para ahorrar tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Un cliente interno es cualquier persona que realiza una compra en la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El servicio al cliente inicia desde el primer contacto del cliente con la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los clientes altamente influyentes pueden incidir en la decisión de compra de otros.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El protocolo empresarial está conformado únicamente por normas legales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las normas de cortesía mejoran la percepción del cliente hacia la empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
