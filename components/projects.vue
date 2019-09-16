<template>
  <section
    id="projects"
    class="
      container mx-auto flex flex-wrap justify-center px-4 my-16
      md:px-12 md:-mt-40
    "
  >
    <section-heading
      red
      heading="Our Projects"
      subheading="Each week, tech volunteers work with civic leaders on a specific project that helps the Lansing community."
      class="md:mb-16 self-end w-full md:w-1/3"
    />
    <div class="hidden md:block md:mb-16 md:w-2/3">
      <img
        src="../assets/images/sponsors-feature.jpg"
        alt="Each week, programers, project managers, and tech junkies come together with civic leaders to work on a specific project that helps the Lansing community."
        class="ml-8 mb-8 block shadow-md rounded-lg"
      >
    </div>
    <div class="text-center">
      <h3 class="mb-4 sm:mb-16">
        Our pilot project starts on Wednesday, September 18th at 7:00 p.m.
      </h3>
      <a href="https://www.meetup.com/Code-for-Lansing/events/264222732/">
        <figure
          class="
            inline-block sm:shadow-md sm:border border-blue-light rounded-lg p-4
          "
        >
          <img
            src="../assets/images/kick-off-event-banner.jpeg"
            alt="All Members Kick-off Event banner"
            class="rounded-lg"
          >
          <figcaption>
            <p>
              Join us at this free event if you want to learn more or help out.
              Everyone is welcome!
            </p>
            <p>
              Follow the link for more details and to RSVP.
            </p>
          </figcaption>
        </figure>
      </a>
    </div>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import card from '~/components/card--figure'

export default {
  components: {
    card,
    sectionHeading
  }
}
</script>
