<template>
    <div class="content">
        <h1>admin content</h1>
         <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>

<style lang="sass" scoped>

</style>