export default {
  namespaced: true,
  state: {
    workersList: [
      {
        id: 1,
        name: 'Бандура Василь Петрович',
        professionId: 2,
      },
      {
        id: 2,
        name: "Лелека Дар'я Олегівна",
        professionId: 3,
      },
      {
        id: 3,
        name: 'Кулька Максим Володимирович',
        professionId: 2,
      },
      {
        id: 4,
        name: 'Лелека Михайло Вікторович',
        professionId: 5,
      },
      {
        id: 5,
        name: 'Рибак Валерія Олександрівна',
        professionId: 4,
      },
      {
        id: 6,
        name: 'Кравець Олексій Іванович',
        professionId: 3,
      },
      {
        id: 7,
        name: 'Червоний Гострий Перець Чилі',
        professionId: 1,
      },
      {
        id: 8,
        name: 'Володимеренко Володимир Володимирович',
        professionId: 1,
      },
    ],
  },
  getters: {
    workersList: (state) => state.workersList,

    filledWorkersList: (state, getters, rootState, rootGetters) =>
      state.workersList.map((worker) => ({
        id: worker.id,
        name: worker.name,
        profession: rootGetters['professions/getProfessionById'](worker.professionId).position,
      })),

    selectWorkersList: (state, getters, rootState, rootGetters) => (candidateId) => {
      if (!candidateId) {
        return getters.filledWorkersList
      } else {
        const candidateProfessionId = rootGetters['candidates/getCandidateById'](candidateId).professionId
        const profession = rootGetters['professions/getProfessionById'](candidateProfessionId).position
        return getters.filledWorkersList.filter((worker) => worker.profession === profession)
      }
    },

    getWorkerById: (state) => (workerId) => state.workersList.find((worker) => worker.id == workerId),
  },
  mutations: {
    addWorker(state, worker) {
      state.workersList.push(worker)
    },

    updateWorker(state, workerData) {
      const index = state.workersList.findIndex((worker) => worker.id === workerData.id)
      state.workersList[index] = workerData
    },

    removeWorker(state, workerId) {
      state.workersList = state.workersList.filter((worker) => worker.id !== workerId)
    },
  },
  actions: {
    addWorker({ commit }, worker) {
      commit('addWorker', { id: new Date().getTime, ...worker })
    },

    updateWorker({ commit }, worker) {
      commit('updateWorker', worker)
    },

    removeWorker({ commit, dispatch }, workerId) {
      commit('removeWorker', workerId)
      dispatch('interviews/removeInterviewByWorkerId', workerId, { root: true })
    },
  },
}
