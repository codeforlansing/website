<template>
  <div
    id="welcome"
    class="lc-background-image py-0 sm:py-32"
  >
    <div class="flex flex-wrap justify-center">
      <section
        class="
          flex-none w-full sm:w-1/2 sm:max-w-sm overflow-hidden sm:shadow-md
          bg-white text-center px-8 py-16 sm:py-8 sm:mb-24 rounded-lg
        "
      >
        <section-heading
          h1
          red
          heading="Code for Lansing"
          subheading="A Code for America initiative."
        />
        <p class="mt-0 mb-4">
          We use tech volunteerism to to solve problems that local nonprofits
          and civic organizations are experiencing.
        </p>
        <p class="mt-0 mb-4">
          Our solutions are open source and can be used to help organizations
          in other communities as well.
        </p>
        <img
          class="h-32 w-32"
          src="../assets/images/codeforlansinglogo.png"
          alt="Code for Lansing Logo"
        >
      </section>

      <section
        class="
          flex-none w-full sm:w-1/2 sm:max-w-sm overflow-hidden sm:shadow-md
          bg-blue-dark text-white text-center rounded-none sm:rounded-lg
          px-8 py-16 sm:py-8 sm:mt-24 sm:-ml-4
        "
      >
        <section-heading
          white
          heading="Our Events"
        />
        <div
          class="text-left font-normal"
        >
          <div class="flex flex-no-wrap items-center justify-center mb-4">
            <font-awesome-icon
              :icon="['fab', 'meetup']"
              class="text-5xl h-20 mr-3"
            />
            <h3 class="font-bold">
              Weekly Hack Nights, Leadership Meetings, and Hackathons
            </h3>
          </div>
          <div class="mb-6">
            All of our events are scheduled on Meetup. Get notified about all of
            our upcoming events when you join the group.
          </div>
          <div class="mb-6">
            If you're curious about an event, you're also welcome to stop in and
            say hi.
          </div>
        </div>
        <div class="text-center p-2">
          <a
            :href="urls.meetup"
            class="
              inline-block bg-white no-underline
              text-blue-dark font-bold uppercase text-center py-4 mt-2 px-8
              min-w-24 rounded-full hover:text-blue-dark
            "
            target="_blank"
            rel="noreferrer noopener"
          >
            Join us on Meetup!
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import urls from '~/config/urls.json'

export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      urls
    }
  }
}
</script>

<style lang="scss">
.lc-background-image {
  @media (min-width: 576px) {
    background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 55),
        rgba(255, 255, 255, 0)
      ),
      url(../assets/images/codeforamericabackground.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
