<template>
  <a
    :href="href"
    class="social-link"
    target="_blank">
    <component :is="type" />
  </a>
</template>

<script>
import Email from '~/assets/svgs/email.svg'
import GitHub from '~/assets/svgs/github.svg'
import Linkedin from '~/assets/svgs/linkedin.svg'
import Twitter from '~/assets/svgs/twitter.svg'
import Books from '~/assets/svgs/books.svg'

export default {
  components: {
    Email,
    GitHub,
    Linkedin,
    Twitter,
    Books
  },
  props: {
    type: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.social-link {
  margin: 0.25em;

  svg {
    fill: darken($blue, 10%);
  }
}
</style>
