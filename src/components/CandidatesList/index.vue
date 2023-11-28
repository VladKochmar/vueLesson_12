<template>
  <div>
    <h2>Кандидати</h2>
    <ul class="list">
      <li class="list__item"><strong>Ім'я</strong><strong>Позиція</strong></li>
      <candidate-item v-for="candidate in filledCandidatesList" :key="candidate.id" :candidate="candidate" />
    </ul>
    <router-link :to="{ name: 'candidateConfig' }">Додати</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CandidateItem from './CandidateItem.vue'

export default {
  name: 'CandidatesList',
  components: { CandidateItem },

  computed: {
    ...mapGetters('candidates', ['filledCandidatesList']),
  },
}
</script>

<style lang="scss" scoped></style>
