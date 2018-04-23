<template>
  <div>
    <table>
      <tr class="title">
        <th class="th">ID</th>
        <th class="th">LINKS</th>
      </tr>
      <tr v-for="q in allLinks" :key="q.id" class="links">
        <th class="th">{{ q.id }}</th>
          <a v-bind:href="''">
            {{ q.link }}
          </a>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    mounted () {
      this.getAllLinks()
    },
    computed: {
      ...mapGetters([
        'allLinks'
      ])
    },
    methods: {
      ...mapActions([
        'getAllLinks'
      ])
    }
  }
</script>

<style>
.links {
  padding: 20px 0px;
  border: 1px solid #eee;
  width: 400px;
}

.th {
  padding: 10px;
  border: 1px solid #eee;  
}

.title {
  color: #312377;
  border: 1px solid #eee;
  margin-bottom: 20px;  
}

</style>
