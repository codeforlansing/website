<template>
  <div class="flex flex-wrap bg-white rounded-lg shadow-md p-10 m-10">
    <div class="w-full md:w-1/3 pb-4 md:pb-0 md:pr-10">
      <h3 class="text-center text-red-medium">
        {{ title }}
      </h3>
      <p>
        {{ description }}
      </p>
    </div>
    <figure
      class="
        flex flex-col w-full text-center md:w-2/3 border-grey-light
        border-t-2 md:border-t-0 md:border-l-2
        pt-6 md:pt-0 md:pl-10
      "
    >
      <figcaption class="flex-auto">
        <h4 class="text-blue">{{ caption.heading }}</h4>
        <p>{{ caption.description }}</p>
      </figcaption>
      <slider
        v-model="value"
        :max="captions.length"
        class="flex-none self-end"
      />
    </figure>
  </div>
</template>

<script>
import slider from '~/components/criteria-slider'

export default {
  components: {
    slider
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    captions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      value: (this.captions.length / 2).toFixed(1)
    }
  },
  computed: {
    caption() {
      const index = Math.floor(this.value)
      return index < this.captions.length
        ? this.captions[index]
        : this.captions[this.captions.length - 1]
    }
  }
}
</script>
