<template>
  <nav class="fixed pin-t pin-x z-50 shadow font-heading">
    <div
      class="
        hidden lg:flex items-center justify-between flex-wrap
        bg-white p-4 border-b border-blue-medium
      "
    >
      <!-- Logo -->
      <div class="flex items-center flex-no-shrink text-blue-dark">
        <span class="text-4xl mr-4 fa icon-code-for-lansing"/>
        <span class="font-bold text-xl uppercase">Code for Lansing</span>
      </div>

      <!-- Desktop Links -->
      <div class="block text-base flex-grow text-right font-medium">
        <a
          v-for="(link, index) in links"
          :key="link.name"
          :href="link.href"
          :class="{ 'ml-4': index }"
          class="
            inline-block text-blue-dark no-underline uppercase mt-0
          "
        >
          {{ link.name }}
        </a>
      </div>
    </div>

    <!-- Menu Toggle -->
    <div
      key="menu-button"
      class="
        static block lg:hidden fixed pin-b pin-r z-50 p-4
      "
    >
      <button
        :aria-label="open ? 'Close Menu' : 'Open Menu'"
        class="
          block p-4 rounded-full shadow-md leading-normal
          bg-white text-red border-red border-2 font-medium
          hover:slide-up-px active:shadow-none active:slide-down-px
          focus:outline-none
        "
        type="button"
        aria-controls="navbarSupportedContent"
        @click="open = !open"
      >
        <font-awesome-icon
          :icon="['fas', open ? 'times' : 'th']"
          fixed-width
          class="text-xl text-red align-middle"
        />
      </button>
    </div>

    <transition
      enter-active-class="transition-all"
      enter-class="slide-up-full"
      leave-active-class="transition-all"
      leave-to-class="slide-up-full"
    >
      <div
        v-if="open"
        id="navBarSupportedContent"
        key="menu"
        class="
          static block lg:hidden fixed pin-b pin-x z-30 p-4 pb-0
          border-white border-t-2 bg-red-medium font-medium
        "
      >
        <div>
          <ul class="bullet-none mr-24 p-0">
            <li class="text-right">
              <a
                href="/#welcome"
                class="
                  inline-block no-underline uppercase mb-4 leading-tight
                  text-white hover:text-white
                "
                @click="open = false"
              >
                To Top
                <font-awesome-icon
                  :icon="['fas', 'arrow-up']"
                  fixed-width
                  class="leading-tight"
                />
              </a>
            </li>
            <li
              v-for="link in links"
              :key="link.name"
              class="text-right"
            >
              <a
                :href="link.href"
                class="
                  inline-block no-underline uppercase mb-4 leading-tight
                  text-white hover:text-white
                "
                @click="open = false"
              >
                {{ link.name }}
                <font-awesome-icon
                  :icon="link.iconSet"
                  fixed-width
                  class="leading-tight"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import urls from '~/config/urls.json'

export default {
  data() {
    return {
      open: false,
      links: [
        {
          name: 'Membership',
          href: '/#membership',
          iconSet: ['fas', 'users']
        },
        {
          name: 'Projects',
          href: '/#projects',
          iconSet: ['fas', 'project-diagram']
        },
        {
          name: 'Slack',
          href: urls.slack,
          iconSet: ['fab', 'slack']
        },
        {
          name: 'Contact',
          href: '/#contact',
          iconSet: ['fas', 'envelope']
        }
      ]
    }
  }
}
</script>
