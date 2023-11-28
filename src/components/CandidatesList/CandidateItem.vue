<template>
  <li class="list__item">
    <span>{{ candidate.name }}</span>
    <span>{{ candidate.profession }}</span>
    <router-link :to="{ name: 'candidateConfig', params: { id: candidate.id } }">Змінити</router-link>
    <button @click="removeCandidate(candidate.id)">Звільнити</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CandidateItem',

  props: {
    candidate: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('candidates', ['removeCandidate']),
  },
}
</script>

<style lang="scss" scoped></style>
