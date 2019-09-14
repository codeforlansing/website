<template>
  <footer
    id="contact"
    class="bg-black py-12 flex flex-wrap justify-center"
  >
    <section-heading
      id="contactUs"
      white
      heading="Contact Us"
      class="w-full"
    />
    <nav
      class="flex justify-center my-8"
      aria-labelledby="contactUs"
    >
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.href"
        :title="link.name"
        :aria-label="link.name"
        class="inline-block mx-2 md:mx-4"
        target="_blank"
      >
        <font-awesome-icon
          :icon="[link.iconSet, link.icon]"
          class="text-5xl text-red fill-current hover:text-red-medium"
        />
      </a>
    </nav>
  </footer>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import urls from '~/config/urls.json'

export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      links: [
        {
          name: 'Slack',
          href: urls.slack,
          iconSet: 'fab',
          icon: 'slack'
        },
        {
          name: 'GitHub',
          href: urls.github,
          iconSet: 'fab',
          icon: 'github'
        },
        {
          name: 'Facebook',
          href: urls.facebook,
          iconSet: 'fab',
          icon: 'facebook'
        },
        {
          name: 'Meetup',
          href: urls.meetup,
          iconSet: 'fab',
          icon: 'meetup'
        }
      ]
    }
  }
}
</script>
