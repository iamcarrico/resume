<template>
  <article class="resume-item">
    <h3 class="resume-item--name resume-item--first">
      <link-or-text
        :href="href"
        :text="name" />
    </h3>
    <div class="resume-item--location resume-item--second">{{ location }}</div>
    <div
      v-for="(role, index) in roles"
      :key="index"
      class="resume-item--role">
      <div class="resume-item--title resume-item--first">{{ role.title }}</div>
      <div class="resume-item--date resume-item--second">{{ role.date }}</div>
    </div>
    <div
      v-if="!!this.$slots.default"
      class="resume-item--text">
      <slot />
    </div>
  </article>
</template>

<script>
import LinkOrText from '~/components/LinkOrText.vue'

export default {
  components: {
    LinkOrText
  },
  props: {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    roles: {
      type: Array,
      default() {
        return [
          {
            title: this.title,
            date: this.date,
            href: ''
          }
        ]
      }
    },
    href: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.resume-item {
  margin-bottom: 2em;

  @media (min-width: 620px) {
    &--role,
    & {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
    }

    &--first {
      width: 70%;
    }

    &--second {
      width: 30%;
      text-align: right;
    }
  }

  &--title {
    font-style: italic;
  }

  &--text {
    margin-top: 0.5em;
  }
}
</style>
