<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="itemsArray"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td><img :src="`https://www.cryptocompare.com${props.item.CoinInfo.ImageUrl}`" class="image-coin"></td>
        <td>{{ props.item.CoinInfo.FullName }}</td>
        <td>{{ props.item.CoinInfo.Name }}</td>
        <td>{{ props.item.RAW.USD.PRICE }}</td>
        <td>{{ props.item.RAW.USD.SUPPLY }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          {
            text: 'Image',
            align: 'center',
            sortable: false
          },
          {
            text: 'Name',
            align: 'center',
            sortable: false
          },
          {
            text: 'Symbols',
            align: 'center',
            sortable: false
          },
          {
            text: 'Price for token',
            align: 'center',
            sortable: false
          },
          {
            text: 'Count',
            align: 'center',
            sortable: false
          }
        ]
      }
    },
    created() {
      this.getCoins();
      setInterval(() => {
        this.getCoins();
      }, 300000);
    },
    methods: {
      getCoins() {
        this.$store.dispatch('loadCoins');
      }
    },
    computed: {
      itemsArray() {
        return this.$store.getters.getCriptArray;
      }
    }
  }
</script>


<style>
  .image-coin{
    max-width: 50px;
  }
</style>

