<template>
  <li class="list__item">
    <span>{{ worker.name }}</span>
    <span>{{ worker.profession }}</span>
    <router-link :to="{ name: 'workersConfig', params: { id: worker.id } }">Змінити</router-link>
    <button @click="removeWorker(worker.id)">Звільнити</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'WorkerItem',

  props: {
    worker: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('workers', ['removeWorker']),
  },
}
</script>

<style lang="scss" scoped></style>
