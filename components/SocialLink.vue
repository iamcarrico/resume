<template>
  <a
    :href="href"
    :target="href.startsWith('javascript:') ? false : '_blank'"
    class="social-link">
    <component :is="type" />
  </a>
</template>

<script>
import Website from '~/assets/svgs/website.svg'
import Email from '~/assets/svgs/email.svg'
import GitHub from '~/assets/svgs/github.svg'
import Linkedin from '~/assets/svgs/linkedin.svg'
import Twitter from '~/assets/svgs/twitter.svg'
import Books from '~/assets/svgs/books.svg'
import Print from '~/assets/svgs/print.svg'

export default {
  components: {
    Website,
    Email,
    GitHub,
    Linkedin,
    Twitter,
    Books,
    Print
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
