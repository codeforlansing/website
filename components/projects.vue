<template>
  <section
    id="projects"
    class="
      container mx-auto flex flex-wrap justify-center px-4 my-16
      md:px-12 md:-mt-48
    "
  >
    <section-heading
      blue
      heading="Our Projects"
      subheading="Each week, programers, project managers, and tech junkies come together with civic leaders to work on a specific project that helps the Lansing community."
      class="md:mb-16 self-end w-full md:w-1/3"
    />
    <div class="hidden md:block md:mb-16 md:w-2/3">
      <img
        src="../assets/images/sponsors-feature.jpg"
        alt="Each week, programers, project managers, and tech junkies come together with civic leaders to work on a specific project that helps the Lansing community."
        class="ml-8 mb-8 block shadow-lg"
      >

    </div>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import card from '~/components/card--figure'
import orderBy from 'lodash/orderBy'

export default {
  components: {
    card,
    sectionHeading
  },
  computed: {
    sponsors() {
      return orderBy(this.$store.state.sponsors.all, ['name'])
    }
  }
}
</script>
