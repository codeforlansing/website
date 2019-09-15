<template>
  <div>
    <welcome/>
    <membership/>
    <resources/>
    <projects/>
  </div>
</template>

<script>
import welcome from '~/components/welcome'
import membership from '~/components/membership'
import resources from '~/components/resources'
import projects from '~/components/projects'

export default {
  components: {
    welcome,
    membership,
    resources,
    projects
  }
}
</script>
