<template>
  <div class="relative w-full flex flex-col mt-16">
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
        :step="sliderSteps"
        class="
          relative z-10 p-0 w-full mx-0 bg-transparent focus:outline-none
        "
        type="range"
        @input="update"
        @change="change"
      >
    </div>
    <div
      class="w-full flex flex-row justify-around px-9px sm:px-6px mt-1"
    >
      <div
        v-for="position in sliderPositions"
        :key="position"
      >
        <div
          v-if="position == Math.floor(position)"
        >
          <div
            class="
              inline-block border-l border-r border-grey w-0 max-w-0 h-4 mx-auto
            "
          />
        </div>
        <div
          v-else
          class="border-l border-r border-grey-light w-0 h-2"
        />
      </div>
    </div>
    <div
      class="w-full flex flex-row justify-around px-1 sm:px-px mt-px"
    >
      <div
        v-for="position in sliderPositions"
        :key="position"
      >
        <div
          v-if="position == Math.floor(position)"
        >
          <div
            class="
              inline-block text-grey w-0 max-w-0 h-4 mx-auto
            "
          >{{ Math.floor(position) }}</div>
        </div>
      </div>
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
    max: {
      type: Number,
      required: false,
      default: 5
    }
  },
  data() {
    return {
      sliderWidth: 0,
      sliderValue: this.value,
      sliderMax: this.max,
      sliderMin: 0,
      sliderSteps: 0.1,
      sliderPositions: []
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
      const percent = (val - this.sliderMin) / (this.sliderMax - this.sliderMin)
      const position = width * percent
      return `${position}px`
    }
  },
  created() {
    this.sliderPositions = Array.from(
      { length: 1 + this.max / this.sliderSteps },
      (v, k) => (k * this.sliderSteps).toFixed(1)
    )
  },
  mounted() {
    this.$nextTick(this.handleResize)
  },
  ready() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.sliderWidth = this.$refs.slider.clientWidth
    },
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
.px-7px {
  padding-left: 7px;
  padding-right: 7px;
}

.px-9px {
  padding-left: 9px;
  padding-right: 9px;
}

@media (min-width: 576px) {
  .sm\:px-6px {
    padding-left: 6px;
    padding-right: 6px;
  }
}

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
