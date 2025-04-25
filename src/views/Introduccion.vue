<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-7
        .p.p-5.bg-intro1 El servicio al cliente es uno de los principales temas en el ámbito empresarial, profesional y personal, puesto que brinda la oportunidad de analizar el enfoque organizacional con el fin de aplicar técnicas que contribuyan a la satisfacción de necesidades de los diferentes usuarios y la excelencia en el servicio.

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/img1.png', alt='', style="width: 388px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
