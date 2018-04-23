<template>
  <div>
    <table>
      <tr class="title">
        <th class="th">ID</th>
        <th class="th">NAME</th>
        <th class="th">DESIGNATION</th>
        <th class="th">EXPERIENCE</th>
      </tr>
      <tr v-for="p in allEmployees" :key="p.id" class="employee">
          <th>
            <router-link :to="{name: 'profile', params: {id: p.id}}">{{ p.id }}</router-link>
          </th>
          <th class="th">
            {{ p.name }}
          </th>
          <th class="th">
            {{ p.designation }}
          </th>
          <th class="th">
            {{ p.experience }}
          </th>
      </tr>
    </table>
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
      ])
    },
    methods: {
      ...mapActions([
        'getAllEmployees'
      ])
    }
  }
</script>

<style>
.employee {
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
