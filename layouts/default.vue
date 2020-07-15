<template>
  <div>
    <main>
      <nuxt/>
    </main>

    <footer>
      The source of this document is <a
        href="https://github.com/iamcarrico/resume"
        target="_blank">shared on GitHub</a>.
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  text-align: center;
  color: $dk-grey;
  font-size: 0.7em;
  font-style: italic;
  margin: 0 auto 3.2em auto;

  @media print {
    display: none;
  }
}
</style>
