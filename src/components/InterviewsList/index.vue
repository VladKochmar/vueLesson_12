<template>
  <div>
    <ol class="list">
      <li class="list__item"><strong>Працівник</strong><strong>Кандидат</strong><strong>День</strong></li>
      <interview-item v-for="interview in filledInterviewsList" :key="interview.id" :interview="interview" />
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InterviewItem from './InterviewItem.vue'

export default {
  name: 'InterviewsList',

  components: { InterviewItem },

  computed: {
    ...mapGetters('interviews', ['filledInterviewsList']),
  },
}
</script>

<style lang="scss" scoped></style>
