<template>
  <section id="resources">
    <div class="bg-white h-40">
      <div
        class="
          container mx-auto flex sm:justify-end flex-no-wrap content-center
        "
      >
        <section-heading
          white
          heading="Learn More"
          subheading="Discover the bigger communities that we're a part of."
          class="
            w-full py-16 mb-0 mt-10 mx-auto sm:mx-0 bg-blue-dark
            sm:w-1/2 md:w-2/5 sm:py-6 sm:rounded-lg sm:shadow-md sm:bg-blue-darker
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
        <div
          v-for="resource in resources"
          :key="resource.title"
          class="w-full max-w-sm px-4 my-6 md:w-1/2"
        >
          <h3 class="text-2xl font-normal text-red mb-2">
            <a
              :href="resource.url"
              target="_blank"
              rel="noreferrer noopener"
              class="no-underline text-white hover:underline hover:text-white"
            >
              {{ resource.title }}
            </a>
          </h3>
          <div class="text-white">
            {{ resource.desc }}
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:block bg-white h-32"/>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import resources from '~/config/resources'

export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      resources
    }
  }
}
</script>
