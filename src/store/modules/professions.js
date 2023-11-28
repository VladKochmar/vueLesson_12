export default {
  namespaced: true,
  state: {
    professions: [
      {
        id: 1,
        position: 'Front-End Developer',
      },
      {
        id: 2,
        position: 'Back-End Developer',
      },
      {
        id: 3,
        position: 'QA',
      },
      {
        id: 4,
        position: 'Designer',
      },
      {
        id: 5,
        position: 'HR',
      },
    ],
  },
  getters: {
    professions: (state) => state.professions,

    getProfessionById: (state) => (professionId) =>
      state.professions.find((profession) => profession.id == professionId),
  },
  mutations: {},
  actions: {},
}
