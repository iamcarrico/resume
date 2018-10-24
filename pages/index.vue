<template>
  <div class="resume">
    <h1>Ian Joseph Carrico</h1>

    <resume-section title="Education">
      <resume-item
        name="The University of Texas at Austin"
        location="Austin, TX"
        title="Bachelor of Arts in Asian Studies (East Asia)"
        date="May 2011" />

      <resume-item
        name="Beijing Foreign Studies University"
        location="Beijing, China"
        title="IES Abroad Intensive Language Program"
        date="Fall 2009" />

      <resume-item
        name="University of Seville"
        location="Sevilla, Spain"
        title="Council on International Education Program"
        date="Summer 2009" />
    </resume-section>

    <resume-section title="Work">
      <resume-item
        name="Vox Media"
        href="https://www.voxmedia.com/"
        location="Houston, TX"
        title="Senior Performance Engineer / Revenue Engineering Manager"
        date="March 2015 – Present">
        <ul>
          <li>Managed and led a team of five engineers to deliver new revenue products</li>
          <li>Engineered an innovative approach to revenue generating code to more than triple important advertising metrics</li>
          <li>Moved all of Vox Media’s 9 brands to be served securely by HTTPS</li>
          <li>Improved frontend performance of all Vox Media sites by over 50%</li>
        </ul>
      </resume-item>

      <resume-item
        name="Four Kitchens"
        href="https://www.fourkitchens.com/"
        location="Austin, TX"
        title="Software Engineer"
        date="January 2012 – March 2015">
        <ul>
          <li>Consulted with clients to provide full service project plans including vision, site architecture, technical guidelines, DevOps, and deployment processes</li>
          <li>Planned and built a website for women journalists across the globe to share their own stories and connect with each other</li>
          <li>Created and taught 4 courses in web development best practices across the globe</li>
        </ul>
      </resume-item>
    </resume-section>

    <resume-section title="Volunteer Community Work ">
      <h3>Barbara Bush Funeral</h3>
    </resume-section>

    <resume-section title="Speaking Engagements and Publications">
      <h3>Advertising Week</h3>
    </resume-section>

    <resume-section title="Additional Information">
      <p><strong>Languages: </strong>English (Native), Spanish (Fluent), Mandarin (Fluent), Japanese (Intermediate)</p>
      <p><strong>Technology: </strong>Ruby on Rails, Node.js, PHP, Drupal, Linux server administration, Docker, Sass</p>
    </resume-section>

  </div>
</template>

<script>
import ResumeSection from '~/components/ResumeSection.vue'
import ResumeItem from '~/components/ResumeItem.vue'

export default {
  components: {
    ResumeSection,
    ResumeItem
  }
}
</script>

<style lang="scss">
.resume {
  max-width: 960px;
  margin: 2em auto;
  padding: 2em 1em;
  border-top: $blue 4px solid;
  background-color: $white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
}
</style>
