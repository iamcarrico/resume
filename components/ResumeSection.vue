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
    font-size: 1.4em;
    font-variant: small-caps;
  }

  &--inner {
    margin-left: 1em;

    @media (min-width: 960px) {
      margin-left: 3em;
    }
  }

  @media print {
    &--title {
      margin-bottom: 0;
      page-break-after: avoid;
    }

    &--inner {
      margin-left: 36px;

      p {
        margin-top: 0;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
