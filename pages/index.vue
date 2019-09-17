<template>
  <div>
    <welcome/>
    <membership/>
    <resources/>
    <projects/>
    <criteria/>
  </div>
</template>

<script>
import welcome from '~/components/welcome'
import membership from '~/components/membership'
import resources from '~/components/resources'
import projects from '~/components/projects'
import criteria from '~/components/criteria'

export default {
  components: {
    welcome,
    membership,
    resources,
    projects,
    criteria
  }
}
</script>
