<template>
 <div>
  <div style="margin-bottom: 16px">
      <a-button type="primary">
        Novo
      </a-button>
    </div>
 <a-table :columns="columns" :data-source="teams">
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
  },
];

export default {
  data() {
    return {
      allTeams : [],
      columns,
    };
  },

  computed: {
      ...mapGetters([
          'teams'
      ])
  },

  async fetch({store}){
        let {data} = await axios.get('http://localhost:3000/teams')
        store.dispatch('setTeams', data);
  }
};
</script>