<template>
  <section id="criteria">
    <div class="bg-white h-40">
      <div
        class="
          container mx-auto flex sm:justify-center flex-no-wrap content-center
        "
      >
        <section-heading
          white
          heading="Criteria"
          subheading="Use the sliders to see how we evaluate new projects."
          class="
            w-full py-16 mb-0 sm:mt-10 mx-auto sm:mx-0 bg-blue-dark
            sm:w-1/2 md:w-2/5 sm:py-6 sm:rounded-lg sm:shadow-md
            sm:bg-blue-darker
          "
        />
      </div>
    </div>
    <div class="bg-blue-dark">
      <div
        class="
          container mx-auto flex flex-wrap content-center justify-around py-16
        "
      >
        <criteria-card
          v-for="(criterion, index) in criteria"
          :key="index"
          :title="criterion.title"
          :description="criterion.description"
          :captions="criterion.captions"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import criteriaCard from '~/components/card--criteria'
import criteria from '~/config/criteria'

export default {
  components: {
    sectionHeading,
    criteriaCard
  },
  data() {
    return {
      criteria
    }
  }
}
</script>
