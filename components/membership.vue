<template>
  <section
    id="membership"
    class="
      container mx-auto flex flex-wrap justify-start px-4 md:px-12
      py-16 sm:pb-6
    "
  >
    <section-heading
      red
      heading="How to Help"
      subheading="Are you a programmer, project manager, or designer? We need you!"
      class="w-full lg:w-1/2 self-center mb-16"
    />
    <div class="flex flex-wrap justify-around">
      <figure
        v-for="role in roles"
        :key="role.title"
        class="md:w-1/2 lg:w-1/3 p-6 my-4 text-center"
      >
        <img
          v-if="role.icon"
          :src="require(`~/assets/images/roles/${role.icon}`)"
        >
        <figcaption>
          <h3 class="mt-4">{{ role.title }}</h3>
          <p>{{ role.description }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import roles from '~/config/roles'

export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      roles
    }
  }
}
</script>
