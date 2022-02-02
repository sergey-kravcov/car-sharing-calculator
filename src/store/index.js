import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'
import multimotors from '@/assets/tariffs/multimotors.json'
import vezuha from '@/assets/tariffs/vezuha.json'
import anytime from '@/assets/tariffs/anytime.json'
import hello from '@/assets/tariffs/hello.json'

const items = [...multimotors, ...vezuha, ...anytime, ...hello]

Vue.use(Vuex)

const state = {
  time: 0,
  distance: 0,
  parking: 0,
}

const getters = {
  ...make.getters(state),
  route: () => {
    return []
  },
  sortedItems: ({ time, distance, parking }) => {
    if (time || distance || parking) {
      // const totals = items.map((tariff) => {
      //   const mainTariff = items.find(({ main, company }) => main && company === tariff.company)
      //   const min = time - parking
      //   const extraMin = Math.max(time - tariff.minutes, 0)
      //   const kmDif = Math.max(km - (tariff.mileage || 0), 0)
      //   const kmAfterTimeout = Math.round((kmDif * minDif) / min)
      //   const total =
      //     tariff.cost +
      //     minDif * (tariff.extramin || mainTariff.cost) +
      //     (kmDif - kmAfterTimeout) * (tariff.extrakm || tariff.km) +
      //     kmAfterTimeout * (tariff.extrakm || mainTariff.km)
      //   return {
      //     total,
      //     tariff,
      //   }
      // })
      return items.sort((a, b) => a.total - b.total)
    }
    return []
  },
  results: (state, getters) => {
    return getters.sortedItems.slice(0, 3)
  },
  otherResults: (state, getters) => {
    return getters.sortedItems.slice(3, 8)
  },
}

const mutations = make.mutations(state)

const actions = {}

export default new Vuex.Store({
  plugins: [pathify.plugin],
  state,
  getters,
  mutations,
  actions,
})
