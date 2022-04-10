import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    regions:[],
    weather:[]
  },
  getters: {
  },
  mutations: {
    STATE_REGIONS(state,payload) {
      state.regions.push(payload)
    },
    STATE_WEATHER(state,payload) {
      state.weather=payload
    }
  },
  actions: {
    set_regions({commit,dispatch},payload) {
      commit('STATE_REGIONS',payload)
      dispatch('fetchWeather',payload)
    },    
    
    
    async fetchWeather({state,commit}){
            let arrayOfWeather=[]
            let response = null
            const key = '19692b6c204e559ecea6009982bd959c'
            await state.regions.forEach(async (el)=>{ 
                response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru${el.coords}&appid=`+key),
                response.data.name=el.name.split(',').reverse()[0].trim() ,
                arrayOfWeather.push(response.data)
                
                
            })
          
            commit('STATE_WEATHER',arrayOfWeather)
            
          },
  },
  modules: {
  },
  getters: {
    regions:(state)=>state.regions,
    weather:(state)=>state.weather,
  }
})
