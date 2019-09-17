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
          subheading="Use the sliders to see how we evaluate projects."
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
        <div class="flex flex-wrap bg-white rounded-lg shadow-md p-10 m-10">
          <div class="w-full md:w-1/3 pb-4 md:pb-0 md:pr-10">
            <h3 class="text-center text-red-medium">
              Personal Commitment
            </h3>
            <p>
              Applicant has demonstrated personal and professional experience
              needed to achieve intended results. They have a relevant track
              record and understanding of the issues.
            </p>
          </div>
          <figure
            class="
              w-full text-center md:w-2/3 border-grey-light
              border-t-2 md:border-t-0 md:border-l-2
              pt-6 md:pt-0 md:pl-10
              flex flex-col
            "
          >
            <figcaption class="flex-auto">
              <h4 class="text-blue">Significant experience</h4>
              <p>
                Strong track record with deep commitment and understanding of
                the issue and community. Has leadership experience, a support
                network, and relevant knowledge to lead this work.
              </p>
            </figcaption>
            <criteria-slider
              v-model="slider"
              class="flex-none self-end"
              min="0"
              max="5"
              step="0.1"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import criteriaSlider from '~/components/criteria-slider'

export default {
  components: {
    criteriaSlider,
    sectionHeading
  },
  data() {
    return {
      slider: '2.5'
    }
  }
}
</script>
