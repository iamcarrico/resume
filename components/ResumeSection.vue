<template>
  <section class="resume-section">
    <h2 class="resume-section--title">{{ title }}</h2>
    <div class="resume-section--inner">
      <slot />
    </div>
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
.resume-section {
  &--inner {
    margin-left: 4em;
  }
}
</style>
