<template>
<div>
  <h1>Dashboard</h1>
  <a-card title="Teste" style="width: 300px">
    <div>
      <a-progress :percent="30" />
      <a-progress :percent="50" status="active" />
      <a-progress :percent="70" status="exception" />
      <a-progress :percent="100" />
      <a-progress :percent="50" :show-info="false" />
    </div>
  </a-card>

  
  
</div>

</template>