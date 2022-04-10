<template>
  <nav class="nav">
        <router-link to="/" class="nav__item">
          <HomeIcon/>
          <div class="nav__text">Home</div>
        </router-link>
        <router-link to="/search" class="nav__item">
          <SearchIcon/>
          <div class="nav__text">Search</div>
        </router-link>
        <router-link to="book-mark" class="nav__item">
         <BookmarkIcon/>
            
          <div class="nav__text">Mark</div>
        </router-link>
        <div class="nav__item">
        <AccountIcon/>

            <div class="nav__text">Settings</div>
            </div>
      </nav>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import BookmarkIcon from '@/components/icons/BookmarkIcon.vue'
import AccountIcon from '@/components/icons/AccountIcon.vue'
export default {
    components: {
        HomeIcon, SearchIcon, BookmarkIcon, AccountIcon,

    },
    
}
</script>

<style>

</style>