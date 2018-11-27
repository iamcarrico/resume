<template>
  <header class="resume-head">
    <h1 class="resume-head--title">Ian Joseph Carrico</h1>

    <div class="resume-head--links">
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

  @media (min-width: 520px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &--title,
    &--links {
      margin: 0;
    }
  }
}
</style>
