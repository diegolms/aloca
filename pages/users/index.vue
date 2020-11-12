<template>
  <a-table :columns="columns" :data-source="users">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
</template>
<script>

import axios from 'axios'
import {mapGetters} from 'vuex'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

export default {
  data() {
    return {
      allUsers : [],
      columns,
    };
  },

  computed: {
      ...mapGetters([
          'users'
      ])
    //   allUsers(){
    //       return this.$store.getters.users
    //   }
  },

  async fetch({store}){
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        //return {allUsers: data}
        store.dispatch('setUsers', data);
  }
};
</script>