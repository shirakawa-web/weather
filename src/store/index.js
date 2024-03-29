import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSetName: String,
    dataSetTemp: Number,
    dataSetMaxTemp: Number,
    dataSetMinTemp: Number,
    dataSetCondition: String,
    dataSetLoading: Boolean,
    dataSeticon:null
  },
  mutations: {
    mutateDataSetName(state, payload) {
      state.dataSetName = payload;
    },
    mutateDataSetTemp(state, payload) {
      state.dataSetTemp = payload;
    },
    mutateDataSetMaxTemp(state, payload) {
      state.dataSetMaxTemp = payload;
    },
    mutateDataSetMinTemp(state, payload) {
      state.dataSetMinTemp = payload;
    },
    mutateDataSetCondition(state, payload) {
      state.dataSetCondition = payload;
    },
    mutateDataSetLoading(state, payload) {
      state.dataSetLoading = payload;
    },
    mutateDataSetConditionicon(state, payload) {
      state.dataSeticon = payload;
    },
  },
  actions: {
    commitDataSet(store,place) {
      let selectedCity = place;
      let getUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
      let getParam = ",jp&units=metric&appid=4dff50a83aa2145ba555d8f59e9d3ef0";
      getUrl = getUrl + selectedCity + getParam;
    return axios.get(
      getUrl
    )
    .then(response => {
      store.commit('mutateDataSetName', response.data.name)
      store.commit('mutateDataSetTemp', response.data.main.temp)
      store.commit('mutateDataSetMaxTemp', response.data.main.temp_max)
      store.commit('mutateDataSetMinTemp', response.data.main.temp_min)
      store.commit('mutateDataSetCondition', response.data.weather[0].main)
      store.commit('mutateDataSetConditionicon', "https://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png")
      store.commit('mutateDataSetLoading', false)
    })
   }
  },
  getters: {
    getStateDataSetName: (state) => state.dataSetName,
    getStateDataSetTemp: (state) => state.dataSetTemp,
    getStateDataSetMaxTemp: (state) => state.dataSetMaxTemp,
    getStateDataSetMinTemp: (state) => state.dataSetMinTemp,
    getStateDataSetCondition: (state) => state.dataSetCondition,
    getStateDataSetLoading: (state) => state.dataSetLoading,
    getStateDataSeticon: (state) => state.dataSeticon,
  },
})
