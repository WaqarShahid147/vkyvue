<template>
  <div>
    <div class="profile-title">
      Links associated to {{ profile.name }}, ({{ profile.designation }})
    </div>
    <div v-for="linkId in profile.link_id">
      <div v-for="allLinkId in allLinks">
        <div v-if="allLinkId.id === linkId" class="links">
          {{ allLinkId.link }}
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
      profile () {
        let id = parseInt(this.$route.params.id)
        return this.allEmployees.find((p) => p.id === id) || {}
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
