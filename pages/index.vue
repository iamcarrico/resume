<template>
  <div class="resume">
    <h1>Ian Joseph Carrico</h1>

    <resume-section title="Education">
      <h2>The University of Texas at Austin</h2>
    </resume-section>

    <resume-section title="Work">
      <h2>The University of Texas at Austin</h2>
    </resume-section>
  </div>
</template>

<script>
import ResumeSection from '~/components/ResumeSection.vue'

export default {
  components: {
    ResumeSection
  }
}
</script>

<style>
.resume {
  max-width: 960px;
  margin: 2em auto;
}
</style>
