<template>
  <div class="container">
    <div class="search clearfix">
      <label
        for="search-surah"
        class="search__title">
        Pencarian Surat
      </label>
      <input
        id="search-surah"
        v-model="searchText"
        type="search"
        name="search"
        placeholder="Surat apa yang ingin dibaca hari ini?">
      <div
        v-if="filteredSurah.length > 0"
        class="search__title">
        Hasil Pencarian:
      </div>
      <div class="search__result clearfix">
        <nuxt-link
          v-for="surah in filteredSurah"
          :key="surah.index"
          :to="getSurahDetailUrl(surah.index)"
          class="has-shadow">
          {{ surah.index }} : {{ surah.latin }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { AppConstant } from '../constant/index.js'
import { __isNotEmptyString, __normalizeText } from '../utils/index'

export default {
  name: 'SearchPage',
  head () {
    return {
      title: 'Pencarian Surat | Qur\'an Offline'
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapState([
      'allSurahList'
    ]),
    filteredSurah () {
      if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
        return this.allSurahList.filter(item => {
          let predicateTranslation = __normalizeText(item.translation).includes(
            __normalizeText(this.searchText)
          )
          let predicateLatin = __normalizeText(item.latin).includes(
            __normalizeText(this.searchText)
          )

          return predicateLatin || predicateTranslation
        })
      } else return []
    }
  },
  mounted () {
    this.setHeaderTitle(AppConstant.SEARCH_PAGE)
    this.fetchSurahInfo()
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchAllSurah'
    ]),
    getSurahDetailUrl (index) {
      return `/${index}`
    },
    fetchSurahInfo () {
      this.fetchAllSurah({
        success: () => {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/search.scss';

</style>
