<template>
  <section
    id="membership"
    class="
      container mx-auto flex flex-wrap justify-start px-4 md:px-12 py-16
      mb-16 sm:mb-0
    "
  >
    <section-heading
      red
      heading="Our Members"
      subheading="Are you a programmer, project manager, or tech junkie? We need you!"
      class="w-full lg:w-1/2 self-center"/>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'

export default {
  components: {
    sectionHeading
  }
}
</script>
