<template>
  <div>
    <welcome/>
    <membership/>
    <resources/>
    <projects/>
    <newsletter/>
  </div>
</template>

<script>
import welcome from '~/components/welcome'
import membership from '~/components/membership'
import resources from '~/components/resources'
import projects from '~/components/projects'
import newsletter from '~/components/newsletter'

export default {
  components: {
    welcome,
    membership,
    resources,
    projects,
    newsletter
  }
}
</script>
