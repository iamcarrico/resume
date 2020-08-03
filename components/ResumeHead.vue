<template>
  <header class="resume-head">
    <h1 class="resume-head--title">Ian Joseph Carrico</h1>

    <div class="resume-head--links">
      <social-link
        type="website"
        href="https://iamcarrico.com/" />
      <social-link
        type="git-hub"
        href="https://github.com/iamcarrico/" />
      <social-link
        type="linkedin"
        href="https://www.linkedin.com/in/iancarrico/" />
      <social-link
        type="twitter"
        href="https://twitter.com/iamcarrico" />
      <social-link
        type="books"
        href="https://www.goodreads.com/iamcarrico" />
      <social-link
        type="print"
        href="javascript:window.print()" />
    </div>
  </header>
</template>

<script>
import LinkOrText from '~/components/LinkOrText.vue'
import SocialLink from '~/components/SocialLink.vue'

export default {
  components: {
    LinkOrText,
    SocialLink
  }
}
</script>

<style lang="scss">
.resume-head {
  margin-bottom: 1em;

  &--links {
    margin-top: 1em;
  }

  &--title {
    font-variant: small-caps;
    font-size: 2em;
  }

  @media (min-width: 520px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &--title,
    &--links {
      margin: 0;
    }
  }

  @media print {
    border-bottom: 4px solid $black;

    &--title {
      font-variant: small-caps;
      font-size: 36px;
    }

    &--links {
      display: none;
    }
  }
}
</style>
