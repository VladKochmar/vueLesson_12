<template>
  <div class="container">
    <div>
      <label>
        Працівник
        <select v-model="interview.workerId">
          <option v-for="worker in selectWorkersList(interview.candidateId)" :key="worker.id" :value="worker.id">
            {{ worker.name }} - {{ worker.profession }}
          </option>
        </select>
      </label>
      <label>
        Кандидат
        <select v-model="interview.candidateId">
          <option
            v-for="candidate in selectCandidatesList(interview.workerId)"
            :key="candidate.id"
            :value="candidate.id"
          >
            {{ candidate.name }} - {{ candidate.profession }}
          </option>
        </select>
      </label>
      <label>
        День
        <select v-model="interview.dayId">
          <option v-for="day in days" :key="day.id" :value="day.id">{{ day.title }}</option>
        </select>
      </label>
      <button @click="onAdd">Додати</button>
    </div>
    <p v-if="isMessageShow && message" class="alert">{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { days } from '@/data/date.js'

export default {
  name: 'InterviewCreator',

  data() {
    return {
      interview: {},
      message: '',
    }
  },

  computed: {
    ...mapGetters('workers', ['selectWorkersList']),
    ...mapGetters('candidates', ['selectCandidatesList']),

    days() {
      return days
    },

    isMessageShow() {
      return !this.interview.workerId || !this.interview.candidateId || !this.interview.dayId
    },
  },

  methods: {
    ...mapActions('interviews', ['addInterview']),

    onAdd() {
      if (!this.isMessageShow) {
        this.addInterview(this.interview)
        this.interview = {}
        this.message = ''
      } else {
        this.message = 'Заповніть всі поля'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 1rem 0;
}
</style>
