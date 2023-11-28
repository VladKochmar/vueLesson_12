<template>
  <div class="editor">
    <label class="label">
      <input v-model="candidate.name" type="text" class="input" />
    </label>
    <label class="label">
      <select v-model="candidate.professionId" class="input">
        <option v-for="profession in professions" :key="profession.id" :value="profession.id">
          {{ profession.position }}
        </option>
      </select>
    </label>
    <button @click="onAction">{{ actionButtonTitle }}</button>
    <router-link :to="{ name: 'candidates' }">Скасувати</router-link>
    <p v-if="message && isMessageShow" class="alert">{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CandidateEditor',

  data() {
    return {
      candidate: {},
      message: '',
    }
  },

  computed: {
    ...mapGetters('professions', ['professions']),
    ...mapGetters('candidates', ['getCandidateById']),

    candidateId() {
      return this.$route.params.id
    },

    actionButtonTitle() {
      return this.candidateId ? 'Оновити' : 'Створити'
    },

    isMessageShow() {
      return !this.candidate.name || !this.candidate.professionId
    },
  },

  methods: {
    ...mapActions('candidates', ['addCandidate', 'updateCandidate']),

    onAction() {
      if (!this.isMessageShow) {
        if (this.candidateId) this.updateCandidate(this.candidate)
        else this.addCandidate(this.candidate)

        this.message = ''
        this.$router.push({ name: 'candidates' })
      } else {
        this.message = 'Заповніть всі поля'
      }
    },
  },

  created() {
    if (this.candidateId) this.candidate = { ...this.getCandidateById(this.candidateId) }
  },
}
</script>

<style lang="scss" scoped></style>
