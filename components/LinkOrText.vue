<template>
  <span class="link-or-text">
    <a
      v-if="href"
      :href="href"
      target="_blank">{{ text }}</a>
    <span
      v-if="!href">{{ text }}</span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
