<template>
  <div class="editor">
    <label class="label">
      <input v-model="worker.name" type="text" class="input" />
    </label>
    <label class="label">
      <select v-model="worker.professionId" class="input">
        <option v-for="profession in professions" :key="profession.id" :value="profession.id">
          {{ profession.position }}
        </option>
      </select>
    </label>
    <button @click="onAction">{{ actionButtonTitle }}</button>
    <router-link :to="{ name: 'workers' }">Скасувати</router-link>
    <p v-if="message && isMessageShow" class="alert">{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'WorkerEditor',

  data() {
    return {
      worker: {},
      message: '',
    }
  },

  computed: {
    ...mapGetters('professions', ['professions']),
    ...mapGetters('workers', ['getWorkerById']),

    workerId() {
      return this.$route.params.id
    },

    actionButtonTitle() {
      return this.workerId ? 'Оновити' : 'Створити'
    },

    isMessageShow() {
      return !this.worker.name || !this.worker.professionId
    },
  },

  methods: {
    ...mapActions('workers', ['addWorker', 'updateWorker']),

    onAction() {
      if (!this.isMessageShow) {
        if (this.workerId) this.updateWorker(this.worker)
        else this.addWorker(this.worker)

        this.message = ''
        this.$router.push({ name: 'workers' })
      } else {
        this.message = 'Заповніть всі поля'
      }
    },
  },

  created() {
    if (this.workerId) this.worker = { ...this.getWorkerById(this.workerId) }
  },
}
</script>

<style lang="scss" scoped>
.editor {
  display: grid;
  gap: 1.25rem 0;
  max-width: 26.25rem;
  margin: 0 auto;
}
.label {
}
.input {
  width: 100%;
}
</style>
