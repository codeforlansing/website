<template>
  <div class="relative w-full flex flex-col">
    <div class="relative flex items-center">
      <div
        :style="{ left: position }"
        class="
          absolute pin-t border border-grey-light bold rounded-sm p-1
          text-center text-sm -ml-1 -mt-10 shadow-md whitespace-no-wrap w-8
        "
      >{{ sliderLabel }}</div>
      <div class="absolute w-full z-0 h-1 bg-grey rounded-sm"/>
      <input
        ref="slider"
        v-model="sliderValue"
        :min="sliderMin"
        :max="sliderMax"
        :step="step"
        class="relative z-10 p-0 w-full mx-0 bg-transparent focus:outline-none"
        type="range"
        @input="update"
        @change="change"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    min: {
      type: String,
      required: false,
      default: '0'
    },
    max: {
      type: String,
      required: false,
      default: '100'
    },
    step: {
      type: String,
      required: false,
      default: '1'
    }
  },
  data() {
    return {
      sliderWidth: 0,
      sliderValue: null,
      sliderMax: null,
      sliderMin: null
    }
  },
  computed: {
    sliderLabel() {
      return parseFloat(this.sliderValue).toFixed(1)
    },
    sliderOutputValue() {
      return this.sliderValue
    },
    position() {
      const val = this.sliderValue
      // Adjust by 24 to account for thumbsize (.w-6 => 6 * 4 = 24px)
      const width = this.sliderWidth - 24
      // Calculate percentage between left and right of input
      const percent = (val - this.sliderMin) / (this.sliderMax - this.sliderMin)
      const position = width * percent
      return `${position}px`
    }
  },
  created() {
    this.sliderMin = this.min
    this.sliderMax = this.max
    this.sliderValue = this.value
  },
  mounted() {
    this.$nextTick(() => {
      this.sliderWidth = this.$refs.slider.clientWidth
    })
  },
  methods: {
    update() {
      this.$emit('input', this.sliderOutputValue)
    },
    change() {
      this.$emit('change', this.sliderOutputValue)
    }
  }
}
</script>

<style lang="scss">
input {
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    @apply .w-full .h-4 .cursor-pointer .bg-transparent .border-0 .rounded-none;
    animate: 0.2s;
  }

  // Thumb
  &::-webkit-slider-thumb {
    @apply .rounded-sm .shadow-md .cursor-pointer .h-5 .w-6 .-mt-2px .bg-blue;
    @apply .border-none;
    -webkit-appearance: none;
  }
  &::-moz-range-thumb {
    @apply .rounded-sm .shadow-md .cursor-pointer .h-5 .w-6 .-mt-2px .bg-blue;
    @apply .border-none;
  }
  &::-ms-thumb {
    @apply .rounded-sm .shadow-md .cursor-pointer .h-5 .w-6 .-mt-2px .bg-blue;
    @apply .border-none;
  }

  // Track

  &:focus::-webkit-slider-runnable-track {
    @apply .bg-transparent;
  }

  &::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-radius: 0;
  }

  &::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 10px 0;
    border-radius: 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: transparent;
    border: none;
    border-radius: 0;
  }
  &::-ms-fill-upper {
    background: transparent;
    border: none;
    border-radius: 0;
  }
}
</style>
