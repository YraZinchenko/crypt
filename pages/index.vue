<template>
  <section class="container">
    <div>
      <CriptTable/>
    </div>
  </section>
</template>

<script>
import CriptTable from '~/components/CriptTable.vue'

export default {
  components: {
    CriptTable
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

