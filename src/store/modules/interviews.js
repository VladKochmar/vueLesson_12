import { days, getDayById } from '@/data/date'

export default {
  namespaced: true,
  state: {
    interviewsList: [],
  },
  getters: {
    interviewsList: (state) => state.interviewsList,

    filledInterviewsList: (state, getters, rootState, rootGetters) =>
      state.interviewsList.map((interview) => ({
        id: interview.id,
        workerName: rootGetters['workers/getWorkerById'](interview.workerId).name,
        candidateName: rootGetters['candidates/getCandidateById'](interview.candidateId).name,
        day: getDayById(days, interview.dayId).title,
      })),
  },
  mutations: {
    addInterview(state, interview) {
      state.interviewsList.push(interview)
    },

    removeInterview(state, interviewId) {
      state.interviewsList = state.interviewsList.filter((interview) => interview.id !== interviewId)
    },

    removeInterviewByWorkerId(state, workerId) {
      state.interviewsList = state.interviewsList.filter((interview) => interview.workerId !== workerId)
    },

    removeInterviewByCandidateId(state, candidateId) {
      state.interviewsList = state.interviewsList.filter((interview) => interview.candidateId !== candidateId)
    },
  },
  actions: {
    addInterview({ commit }, interview) {
      commit('addInterview', { id: new Date().getTime(), ...interview })
    },

    removeInterview({ commit }, interviewId) {
      commit('removeInterview', interviewId)
    },
  },
}
