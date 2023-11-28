<template>
  <li class="list__item">
    <span>{{ interview.workerName }}</span>
    <span>{{ interview.candidateName }}</span>
    <span>{{ interview.day }}</span>
    <button @click="removeInterview(interview.id)">Видалити</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'InterviewItem',

  props: {
    interview: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('interviews', ['removeInterview']),
  },
}
</script>

<style lang="scss" scoped></style>
