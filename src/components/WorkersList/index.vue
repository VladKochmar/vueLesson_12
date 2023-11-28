<template>
  <div>
    <h2>Нащі працівники</h2>
    <ul class="list">
      <li class="list__item"><strong>Ім'я</strong><strong>Позиція</strong></li>
      <worker-item v-for="worker in filledWorkersList" :key="worker.id" :worker="worker" />
    </ul>
    <router-link :to="{ name: 'workersConfig' }">Додати</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WorkerItem from './WorkerItem.vue'

export default {
  name: 'WorkersList',

  components: { WorkerItem },

  computed: {
    ...mapGetters('workers', ['filledWorkersList']),
  },
}
</script>

<style lang="scss" scoped></style>
