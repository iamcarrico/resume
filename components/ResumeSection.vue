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
  &--title {
    font-size: 1.6em;
    font-variant: small-caps;
    text-align: center;
    border-bottom: 2px solid $dk-grey;
  }

  @media print {
    &--title {
      page-break-after: avoid;
    }

    &--inner {
      p {
        margin-top: 0;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
