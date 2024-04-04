<template>
  <header class="resume-head">
    <div class="resume-head--names">
      <h1 class="resume-head--title">Ian Joseph Carrico</h1>
      <div class="resume-head--bar-memberships">Bar Memberships:
        <a
          target="_blank"
          href="https://my.dcbar.org/directorymemberships?id=0014z00001q2L5ZAAU">District of Columbia</a> &

        <a
          target="_blank"
          href="https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=377448">Texas</a>
      </div>
    </div>

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

  &--bar-memberships {
    font-style: italic;
  }

  &--links {
    margin-top: 1em;
  }

  &--title {
    font-variant: small-caps;
    font-size: 2.5em;
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
    &--names {
      width: 100%;
      text-align: center;
    }

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
