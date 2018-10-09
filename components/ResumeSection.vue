<template>
  <section class="resume-section">
    <h2 class="resume-section--title">{{ title }}</h2>

    <slot />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>
