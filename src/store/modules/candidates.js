export default {
  namespaced: true,
  state: {
    candidatesList: [
      {
        id: 1,
        name: 'Петренко Петро Петрович',
        professionId: 4,
      },
      {
        id: 2,
        name: 'Олежко Олег Олегович',
        professionId: 1,
      },
      {
        id: 3,
        name: 'Кульбаба Вікторія Сергіївна',
        professionId: 2,
      },
      {
        id: 4,
        name: 'Атб Тарас Богданович',
        professionId: 5,
      },
      {
        id: 5,
        name: 'Рибка Ірина Олегівна',
        professionId: 3,
      },
      {
        id: 6,
        name: 'Три Петро Семенович',
        professionId: 1,
      },
      {
        id: 7,
        name: 'Жовтий Мандарин',
        professionId: 2,
      },
      {
        id: 8,
        name: 'Клавіатура Мишка Моніторівна',
        professionId: 4,
      },
    ],
  },
  getters: {
    candidatesList: (state) => state.candidatesList,

    filledCandidatesList: (state, getters, rootState, rootGetters) =>
      state.candidatesList.map((candidate) => ({
        id: candidate.id,
        name: candidate.name,
        profession: rootGetters['professions/getProfessionById'](candidate.professionId).position,
      })),

    selectCandidatesList: (state, getters, rootState, rootGetters) => (workerId) => {
      let candidatesList = getters.filledCandidatesList

      if (rootGetters['interviews/interviewsList'].length) {
        candidatesList = candidatesList.filter(
          (candidate) =>
            !rootGetters['interviews/interviewsList'].some((interview) => interview.candidateId === candidate.id)
        )
      }

      if (!workerId) {
        return candidatesList
      } else {
        const workerProfessionId = rootGetters['workers/getWorkerById'](workerId).professionId
        const profession = rootGetters['professions/getProfessionById'](workerProfessionId).position
        return candidatesList.filter((candidate) => candidate.profession === profession)
      }
    },

    getCandidateById: (state) => (candidateId) => state.candidatesList.find((candidate) => candidate.id == candidateId),
  },
  mutations: {
    addCandidate(state, candidate) {
      state.candidatesList.push(candidate)
    },

    updateCandidate(state, candidateData) {
      const index = state.candidatesList.findIndex((candidate) => candidate.id === candidateData.id)
      state.candidatesList[index] = candidateData
    },

    removeCandidate(state, candidateId) {
      state.candidatesList = state.candidatesList.filter((candidate) => candidate.id !== candidateId)
    },
  },
  actions: {
    addCandidate({ commit }, candidate) {
      commit('addCandidate', { id: new Date().getTime(), ...candidate })
    },

    updateCandidate({ commit }, candidate) {
      commit('updateCandidate', candidate)
    },

    removeCandidate({ commit, dispatch }, candidateId) {
      commit('removeCandidate', candidateId)
      dispatch('interviews/removeInterviewByCandidateId', candidateId, { root: true })
    },
  },
}
