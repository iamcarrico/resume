<template>
  <div class="resume">
    <resume-head />

    <resume-section title="Education">
      <resume-item
        name="Georgetown University Law Center"
        location="Washington, DC"
        title="Juris Doctor candidate"
        date="May 2022">
        <u>Journal</u>: Georgetown Law Technology Review (<em>Assistant Editor, Articles</em>) <br>
        <u>Honors</u>: Technology Law &amp; Policy Scholar <br>
        <u>Activities</u>: OutLaw (<em>Outreach Chair</em>, LGBT Group), Between Two Codes (<em>Founder</em>, Podcast) <br>
        <u>Relevant Courses</u>: Information Privacy Law, National Security Law, Technology and Election Integrity<br>
        <u>Clinic</u>: Communications and Technology Law (Spring 2021)
      </resume-item>

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
        name="Federal Communications Commission"
        location="Washington, DC"
        title="Summer Intern, Wireless Telecommunications Bureau, Office of the Bureau Chief"
        date="May 2020 – August 2020">
        <ul>
          <li>Drafted orders to further the Commission’s policy goals concerning 5G spectrum usage</li>
          <li>Researched novel areas of technology law, focusing on modern radio access networks and satellite spectrum</li>
          <li>Summarized public comments in a coherent manner for the Commission to understand the public’s perspective</li>
          <li>Organized several networking meetups for the summer intern class at the Commission</li>
        </ul>
      </resume-item>

      <resume-item
        :roles="[
          {title: 'Revenue Engineering Manager', date: 'October 2018 – August 2019 '},
          {title: 'Senior Performance Engineer ', date: 'July 2017 – September 2018'},
          {title: 'Performance Engineer', date: 'March 2015 – June 2017'}
        ]"
        name="Vox Media"
        href="https://www.voxmedia.com/"
        location="Houston, TX">
        <ul>
          <li>Managed and led a team of five engineers to create a new line of revenue directly selling to partners</li>
          <li>Tripled key advertising metrics by engineering innovative approach to all advertising code</li>
          <li>Led all engineering &amp; editorial teams to assess, design, and execute the migration to HTTPS across all brands</li>
          <li>Analyzed performance setbacks to create and implement new performance standards for all engineering teams</li>
          <li>Improved frontend performance of all Vox Media sites by over 50%</li>
        </ul>
      </resume-item>

      <resume-item
        name="Four Kitchens"
        href="https://www.fourkitchens.com/"
        location="Austin, TX"
        title="Software Engineer"
        date="January 2012 – March 2015">
        <strong>Major clients:</strong>
        <link-or-text
          href="https://www.worldpulse.com/en"
          text="World Pulse" />
        <link-or-text
          href="https://www.economist.com/"
          text="The Economist" />
        <link-or-text
          href="https://www.nbc.com/"
          text="NBC" />
        <link-or-text
          href="https://som.yale.edu/"
          text="Yale School of Management" />
        <ul>
          <li>Consulted with clients to provide full-service project plans including vision, site architecture, technical guidelines, DevOps, and deployment processes</li>
          <li>Planned, architected, and built global websites with a focus on user privacy, security, and performance</li>
          <li>Created and taught paid courses across the globe to beginners and experts regarding cutting edge web development practices</li>
          <li>Collaborated with other experts to build open source tools, push forward programing languages & inform others</li>
        </ul>
      </resume-item>

      <resume-item
        name="Friday5"
        location="Austin, TX"
        href="https://friday5.org/"
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
        href="http://yr-austin.com/"
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
        href="https://www.intel.com/"
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
        href="https://www.henselphelps.com/"
        date="May 2005 – August 2008">
        <ul>
          <li>Provided computer support to the corporate office and midwestern district</li>
          <li>Created and administered Access databases to allow employees to easily manage an invoice tracking system</li>
          <li>Researched and implemented new solutions to efficiently control Microsoft Exchange and Spam server</li>
        </ul>
      </resume-item>
    </resume-section>

    <resume-section title="Community Service">
      <resume-item
        name="The Veterans Consortium"
        location="Washington, DC"
        title="Pro Bono Clinic"
        date="November 2019 – Present">
        <ul>
          <li>Triage veterans’ legal concerns to identify the important legal concern and refer them to an appropriate legal organization</li>
          <li>Draft initial briefs of possible legal issues for appeals before the US Court of Appeals for Veterans Claims</li>
        </ul>
      </resume-item>

      <resume-item
        name="Office of George H.W. Bush"
        location="Houston, TX"
        title="Engineering Lead for One America Appeal and President & Mrs. Bush’s Funerals"
        date="September 2017 – December 2018">
        <ul>
          <li>Oversaw the distribution of thousands of invitations, managed RSVPs, and maintained the funeral technical systems</li>
          <li>Collaborated with the Chief of Staff &amp; other teams to build out funeral seating, distribute physical invitations, and assist VIPs</li>
          <li>Anticipated and planned for several contingencies before the funerals to reduce possible complications</li>
          <li>Engineered the web presence of the One America Appeal campaign in less than a week while collaborating with designers from the Office of President Obama yielding more than $42 million dollars in donations for hurricane relief </li>
          <li>Devised and implemented a solution to a 3rd party’s platform failing at launch within an hour, preventing the loss of millions of dollars in donations from being lost</li>
        </ul>
      </resume-item>

      <resume-item
        name="Drupal Magic / Aurora"
        title="Project Lead"
        href="https://www.drupal.org/project/magic"
        date="November 2012 – July 2015">
        <ul>
          <li>Collaborate with community stakeholders to build an efficient front end framework used by over 10,000 websites</li>
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
          {title: 'Board of Advisors Member', date: 'January 2018 – Present'},
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
        href="http://www.advertisingweek.com/events/ny/2017/calendar/-newyork-2017-09-25-hacking-programmatic-technical-tips-for-improving-yield-performance-today"
        title="Hacking Programmatic: Technical Tips for Improving Yield & Performance"
        date="September 2017" />

      <resume-item
        name="South by Southwest"
        location="Austin, TX"
        href="https://schedule.sxsw.com/2017/events/PP59803"
        title="DOM Ready: How Fast Load Times Alter User Behavior"
        date="March 2017" />

      <resume-item
        name="O'Reilly VelocityConf"
        location="New York, NY"
        href="https://conferences.oreilly.com/velocity/vl-ca-2016/public/schedule/detail/50069"
        title="The Wild West of Media Performance: A Vox Story"
        date="June 2016" />

      <resume-item
        name="DrupalCon: Los Angeles"
        location="Los Angeles, CA"
        href="https://events.drupal.org/losangeles2015/sessions/creating-culture-performance"
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

      <p class="resume--talk-text"><i><strong>Talks also given at:</strong> DrupalCon Latin America, DrupalCamp Austin, DrupalCamp San Diego, NERD Summit, ATX Sass, Full Stack NH, NYC Camp, and the Bay Area Drupal Camp</i></p>
    </resume-section>

    <resume-section title="Special Projects">
      <resume-item
        name="Evan + Ian Wedding Website"
        location="Houston, TX"
        href="https://evian.wedding/#/"
        title="A microsite honoring our wedding day"
        date="December 9th, 2017" />

      <resume-item
        name="Stuff in Houston"
        location="Houston, TX"
        href="https://stuffinaustin.com/"
        title="Built to share fun things to eat and do in Houston"
        date="December 2017" />

      <resume-item
        name="Stuff in Austin"
        location="Austin, TX"
        href="https://stuffinaustin.com/"
        title="Built for SassConf, a site built to share great things in Austin, TX"
        date="February 2016" />
    </resume-section>

    <resume-section title="Additional Information">
      <p><strong>Languages: </strong>English (native), Spanish (fluent), Mandarin (working proficiency)</p>
      <p><strong>Technology: </strong>Ruby, PHP, Databases (MySQL), Sass, Node/JavaScript, Linux, Docker, Ansible</p>
      <p><strong>Interests: </strong>Corde lisse performer, pie baker, founder of SullyHWBush Instagram account</p>
      <p><strong>Awards: </strong>2014 Young Developer of the Year Nominee, AVA Digital Awards 2015 Platinum (World Pulse), Best in Biz Awards 2015 Website of the Year (World Pulse), Silver Stevie International Business Award for Non-Profit Organization Website (World Pulse)</p>
    </resume-section>

  </div>
</template>

<script>
import ResumeSection from '~/components/ResumeSection.vue'
import ResumeItem from '~/components/ResumeItem.vue'
import ResumeHead from '~/components/ResumeHead.vue'
import LinkOrText from '~/components/LinkOrText.vue'

export default {
  components: {
    ResumeSection,
    ResumeItem,
    ResumeHead,
    LinkOrText
  }
}
</script>

<style lang="scss">
.resume {
  max-width: 960px;
  border-top: $blue 4px solid;
  background-color: $white;
  padding: 1em;
  margin-bottom: 1em;

  @media (min-width: 960px) {
    margin: 2em auto;
    padding: 2em;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
  }

  @media print {
    border-top: none;
    box-shadow: none;
    max-width: none;
    margin: 0;
    padding: 0;
  }

  &--talk-text {
    $indent-amount: 7.3em;
    page-break-inside: avoid;

    text-indent: $indent-amount * -1;
    margin-left: $indent-amount;
  }
}
</style>
