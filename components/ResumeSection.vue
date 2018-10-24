<template>
  <section class="resume-section">
    <h2
      class="resume-section--title"
      v-html="coverInSpans" />
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
  },
  computed: {
    coverInSpans: function() {
      return this.title
        .split(' ')
        .map(word => {
          if (['and', 'of'].includes(word)) {
            return word
          } else {
            return `<span class="word">${word}</span>`
          }
        })
        .join(' ')
    }
  }
}
</script>

<style lang="scss">
.resume-section {
  &--title {
    text-transform: uppercase;
    font-size: 1.2em;

    .word {
      display: inline-block;

      &::first-letter {
        font-size: 1.4em;
      }
    }
  }

  &--inner {
    margin-left: 4em;
  }
}
</style>
