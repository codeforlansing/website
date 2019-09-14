<template>
  <div
    id="welcome"
    class="lc-background-image py-16 sm:py-32"
  >
    <div class="flex flex-wrap justify-center">
      <section
        class="
          flex-none w-full sm:w-1/2 sm:max-w-sm overflow-hidden sm:shadow-lg
          bg-white text-center p-8 sm:mb-24 rounded-lg
        "
      >
        <section-heading
          h1
          red
          heading="Code for Lansing"
          subheading="A Code for America Initiative"
        />
        <p class="mt-0 mb-4">
          We use tech volunteerism to to solve problems that local nonprofits
          and civic organizations are experiencing.
        </p>
        <p class="mt-0 mb-4">
          Our solutions are open source and can benefit other communities as
          well!
        </p>
        <img
          class="h-32 w-32"
          src="../assets/images/codeforlansinglogo.png"
          alt="Code for Lansing Logo"
        >
      </section>

      <section
        class="
          hidden sm:block sm:w-1/2 max-w-sm overflow-hidden shadow-lg
          bg-blue-dark text-white p-8 sm:mt-24 sm:-ml-4 rounded-lg
        "
      >
        <section-heading
          white
          heading="Our Events"
        />
        <div
          class="text-left font-normal"
        >
          <div class="flex flex-no-wrap items-center justify-center mb-2">
            <logo
              icon-set="fab"
              icon-name="meetup"
              class="mr-3"
            />
            <h3 class="font-bold">
              Weekly Hack Nights, Leadership Meetings, and Hackathons
            </h3>
          </div>
          <div class="mb-6">
            All of our events are scheduled on Meetup. Get notified
            about all of our upcoming events when you join the group!
          </div>
        </div>
        <div class="text-center">
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
            Join us on Meetup
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import sectionHeading from '~/components/section-heading'
import logo from '~/components/logo--small'
import truncate from '~/utils/truncate'
import groupForEvent from '~/utils/group-for-event'
import formatReadableDateTime from '~/utils/format-readable-date-time'
import urls from '~/config/urls.json'

export default {
  components: {
    logo,
    sectionHeading
  },
  data() {
    return {
      urls
    }
  },
  computed: {
    nextEvent() {
      return this.$store.state.events.upcoming[0]
    },
    groupForNextEvent() {
      return groupForEvent(this.nextEvent, this.$store.state.groups.all)
    }
  },
  methods: {
    formatReadableDateTime
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
