<template>
  <div class="container">
    <input
      v-on:input="search"
      placeholder="Начните вводить название места"
      type="text"
    />
    <ul v-for="item in arrOfLocations" :key="item">
      <div class="wrapper">
        <li>{{ item.value }}</li>
        <button
          :disabled="isDisabled(item.data.fias_id)"
          v-on:click="addToFavorite(item)"
        ></button>
      </div>
      <hr />
    </ul>
    <div v-if="this.query && !arrOfLocations.length" class="no-results">
      Результатов нет
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "./../assets/styles/Search.scss";

export default {
  components: {},
  data() {
    return {
      arrOfLocations: [],
      query: "",
    };
  },
  methods: {
    async search(e) {
      this.query = e.target.value;
      const key = "7b1d99ed6972e5a7c511659eafc3d2b66b4a8031";
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + key,
        },
      };
      await axios
        .get(
          `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address?query=${this.query}&count=6&language=ru&qc_geo=3`,
          options
        )
        .then(
          (response) =>
            (this.arrOfLocations = response.data.suggestions.filter(
              (item) => item.data.qc_geo > 1 && item.data.geo_lat
            ))
        );
    },
    addToFavorite(region) {
      this.$store.dispatch("set_regions", {
        coords: `&lat=${region.data.geo_lat}&lon=${region.data.geo_lon}`,
        name: region.value,
        id: region.data.fias_id,
        isMy: false,
      });
    },
    isDisabled(id) {
      return this.getID.includes(id);
    },
  },
  computed: {
    regions() {
      return this.$store.getters.regions;
    },
    getID() {
      let id = this.regions.map((x) => x.id);
      return id;
    },
  },
};
</script>
