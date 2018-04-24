<template>
  <div>
    <div class="profile-title">
      Link "{{ link.link }}" <br/> is assigned to following Profiles:
    </div>
    <div v-for="profileId in link.profile_id">
      <div v-for="allProfileId in allEmployees">
        <div v-if="allProfileId.id === profileId" class="links">
          {{ allProfileId.name }}
          <input
            type="checkbox"
            true-value="yes"
            false-value="no"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      this.getAllEmployees()
      this.getAllLinks()
    },
    computed: {
      ...mapGetters([
        'allEmployees',
        'allLinks'
      ]),
      link () {
        let id = parseInt(this.$route.params.id)
        return this.allLinks.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllEmployees',
        'getAllLinks'
      ])
    }
  }
</script>

<style>

.profile-title {
  padding-top: 20px;
  font-size: 26px;
}

.links {
  font-size: 20px;
  margin-top: 15px;
  width: 80%;
}

</style>
