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

      <resume-item
        name="Friday5"
        location="Austin, TX"
        title="Chief Technical Officer / Co-founder"
        date="July 2012 – October 2014">
        <ul>
          <li>Architected and built donation platform with Network for Good APIs</li>
          <li>Built web presence and designed signup workflow</li>
          <li>Administered and maintained all server resources and DevOps infrastructure</li>
        </ul>
      </resume-item>

      <resume-item
        name="SicolaMartin "
        location="Austin, TX"
        title="Junior Developer"
        date="July 2011 – January 2012">
        <ul>
          <li>Led all development projects to provide custom or Drupal based websites</li>
          <li>Built custom website frameworks to deploy a global marketing system for Dell Partners</li>
        </ul>
      </resume-item>

      <resume-item
        name="Intel"
        location="Austin, TX"
        title="Drupal Developer / Intern"
        date="February 2011 – July 2011">
        <ul>
          <li>Develop custom modules for Drupal to manage a group wide site with integration with internal tools and Active Directory</li>
          <li>Work with business divisions to ensure correct implementation of technology</li>
        </ul>
      </resume-item>

      <resume-item
        name="Hensel Phelps Construction Co."
        location="Greeley, CO"
        title="Server Administrator"
        date="May 2005 – August 2008">
        <ul>
          <li>Provided computer support to the corporate office and midwestern district</li>
          <li>Created and administered Access databases to allow employees to easily manage an invoice tracking system</li>
          <li>Researched and implemented new solutions to efficiently control Microsoft Exchange and Spam server</li>
        </ul>
      </resume-item>
    </resume-section>

    <resume-section title="Volunteer Community Work ">
      <resume-item
        name="Barbara Bush Funeral"
        location="Houston, TX"
        title="Invitation System Engineer"
        date="April 2018">
        <ul>
          <li>Ensured the proper execution of the invitation system and troubleshot any and all technical issues that arose</li>
        </ul>
      </resume-item>

      <resume-item
        name="One America Appeal"
        location="College Station, TX "
        title="Chief Technical Officer"
        date="September 2017 – Present">
        <ul>
          <li>Created a donation website and platform to process all $41 million in donations</li>
          <li>Coordinated with stakeholders from all living former president’s offices to design and build web presence</li>
        </ul>
      </resume-item>

      <resume-item
        name="Drupal Magic / Aurora"
        title="Project Lead"
        date="November 2012 – July 2015">
        <ul>
          <li>Collaborate with community stakeholders to build an efficient front end framework for over 10k sites</li>
        </ul>
      </resume-item>

      <resume-item
        :roles="[
          {title: 'ATX Sass Meetup Founder and Organizer', date: 'July 2014 – May 2015'},
          {title: 'Community Guidelines Author', date: 'July 2014'}
        ]"
        name="Sass Community"
        location="Austin, TX" />

      <resume-item
        name="Order of Omega Honors Organization"
        location="Austin, TX"
        title="Vice President"
        date="Fall 2010 – Spring 2011" />

      <resume-item
        :roles="[
          {title: 'Board of Advisors Member', date: 'January 2017 – Present'},
          {title: 'Vice President', date: 'Spring 2010 – Fall 2010'},
          {title: 'Secretary', date: 'Fall 2008'}
        ]"
        name="Tau Kappa Epsilon at The University of Texas"
        location="Austin, TX" />
    </resume-section>

    <resume-section title="Speaking Engagements and Publications">
      <resume-item
        name="Advertising Week"
        location="New York, NY"
        title="Hacking Programmatic: Technical Tips for Improving Yield & Performance"
        date="September 2017" />

      <resume-item
        name="South by Southwest"
        location="Austin, TX"
        title="DOM Ready: How Fast Load Times Alter User Behavior"
        date="March 2017" />

      <resume-item
        name="O'Reilly VelocityConf"
        location="New York, NY"
        title="The Wild West of Media Performance: A Vox Story"
        date="June 2016" />

      <resume-item
        name="DrupalCon: Los Angeles"
        location="Los Angeles, CA"
        title="Creating a Culture of Performance"
        date="May 2015" />

      <resume-item
        name="Net Magazine"
        location="Print publication"
        title="Tools for Painless Sass Development"
        date="November 2014" />

      <resume-item
        name="DrupalCon: Amsterdam"
        location="Amsterdam, Netherlands"
        title="Getting Content to a Phone in Less Than 1000ms"
        date="September 2014" />

      <resume-item
        name="SassConf"
        location="New York, NY"
        title="Take the Pain Out of Sass"
        date="October 2013" />

      <p><i>Talks also give at: DrupalCon Latin America, DrupalCamp Austin, DrupalCamp San Diego, NERD Summit, ATX Sass, Full Stack NH, NYC Camp, and the Bay Area Drupal Camp</i></p>
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
  padding: 2em;
  border-top: $blue 4px solid;
  background-color: $white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
}
</style>
