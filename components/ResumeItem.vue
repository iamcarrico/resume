<template>
  <article class="resume-item">
    <h3 class="resume-item--name resume-item--item">{{ name }}</h3>
    <div class="resume-item--location resume-item--item">{{ location }}</div>
    <div class="resume-item--title resume-item--item">{{ title }}</div>
    <div class="resume-item--date resume-item--item">{{ date }}</div>
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
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

<style lang="scss">
.resume-item {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  align-items: flex-end;

  &--item {
    width: 70%;

    &:nth-child(even) {
      width: 30%;
      text-align: right;
    }
  }

  &--title {
    font-style: italic;
  }
}
</style>
