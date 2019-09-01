<template>
  <section
    id="meetups"
    class="
      container mx-auto flex flex-wrap justify-start px-4 md:px-12 mb-16 sm:mb-0
    "
  >
    <section-heading
      blue
      heading="Our Members"
      subheading="Are you a programmer, project manager or tech junkie? We need you!"
      class="w-full lg:w-1/2 self-center"/>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import card from '~/components/card--figure'
import orderBy from 'lodash/orderBy'

export default {
  components: {
    sectionHeading
  }
}
</script>
