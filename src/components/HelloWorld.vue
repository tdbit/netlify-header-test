<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

defineProps({
  msg: String,
})

const oldHello = ref({})
const newHello = ref({})

onMounted(() => {
  const headers = { 'my-header': 'test' };
  const url = window.location.href;
  axios.get(`${url}api/hello/friend`, { headers })
    .then((response) => {
      console.log(response)
      newHello.value = response.data
  });

  axios.get(`${url}.netlify/functions/old-hello`, { headers })
    .then((response) => {
      console.log(response)
      oldHello.value = response.data
  });
});

</script>

<template>
<h1>Old Hello World</h1>
<pre>{{ oldHello}}</pre>
<h1>New Hello World</h1>
<pre>{{ newHello }}</pre>
</template>

