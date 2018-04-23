<template>
  <div>
    <div class="profile-title">
      Links associated to {{ profile.name }}, ({{ profile.designation }})
    </div>
    <div class="links">
      {{ profile.designation }}
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      this.getAllEmployees()
    },
    computed: {
      ...mapGetters([
        'allEmployees'
      ]),
      profile () {
        let id = parseInt(this.$route.params.id)
        return this.allEmployees.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllEmployees'
      ])
    }
  }
</script>

<style>

.profile-title {
  padding-top: 20px;
  margin: 0 auto;
  font-size: 26px;
}

.links {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}

</style>
