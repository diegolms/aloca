<template>
<div>
  <div style="margin-bottom: 16px">
      <a-button type="primary">
        Novo
      </a-button>
    </div>
 <a-table :columns="columns" :data-source="users">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
</div>
 
</template>
<script>

import axios from 'axios'
import {mapGetters} from 'vuex'

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    ellipsis: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    ellipsis: true,
  },
  {
    title: 'Equipe',
    dataIndex: 'team',
    ellipsis: true,
  }
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
  },

  async fetch({store}){
        let {data} = await axios.get('http://localhost:3000/users')
        store.dispatch('setUsers', data);
  }
};
</script>