<template>
  <div class="content">
    <div class="main-top-banner">
      <!-- Neon banner -->
      <img src="../assets/bg/bg-banner.png" alt="" class="bg-banner">
    </div>
    <div class="shop-category-panel">
      <div class="filter-panel-left">
        <button class="filter-btn">Cold drinks</button>
        <button class="filter-btn">Hot drinks</button>
        <button class="filter-btn">Snacks</button>
      </div>
      <div class="filter-panel-right">
        <!-- <form class="search-form">
          <input type="text" class="search-input" placeholder="Type something..">
          <button class="search-btn" type="submit">
            <span class="material-symbols-outlined">search</span>
          </button>
        </form> -->
      </div>
    </div>
    <div class="store-category">
      <div class="item-category">
        <img src="../assets/category-banners/alcohol-banner.jpg" alt="banner-img" class="category-img">
      </div>
      <div class="item-category">
        <img src="../assets/category-banners/soft-drinks-banner.jpg" alt="banner-img" class="category-img">
      </div>
      <div class="item-category">
        <img src="../assets/category-banners/hot-drinks-banner.jpg" alt="banner-img" class="category-img">
      </div>
      <div class="item-category">
        <img src="../assets/category-banners/snacks-banner.png" alt="banner-img" class="category-img">
      </div>
      <div class="item-category">
        <img src="../assets/category-banners/meal-banner.jpg" alt="banner-img" class="category-img">
      </div>
      <div class="item-category">
        <img src="../assets/category-banners/tobacco-banner.jpg" alt="banner-img" class="category-img">
      </div>
    </div>
    <div class="footer"></div>
  </div>
  <!-- Hardcoding items for demo, then use fake data to fill them the store-section-->
  <!-- Use pagination to list through items -->
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: .5rem; */
  /* border: 1px solid #454545; */
}

.main-top-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 350px;
  width: 100%;
  background-image: url('../assets/bg/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}

.shop-category-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: #101010; */
  padding: .5rem;
  width: 100%;
}

.filter-panel-left,
.filter-panel-right {
  display: flex;
  align-items: center;
}

.filter-btn {
  display: flex;
  align-items: center;
  padding: .5rem;
  border: none;
  border-radius: 5px;
  background: #343434;
  color: #ced4da;
  cursor: pointer;
  margin: .1rem;
  transition: 200ms ease-in-out;
}

.filter-btn:hover {
  background: #454545;
  transition: 200ms ease-in-out;
}

.search-form {
  display: flex;
  align-items: center;
}

.search-input {
  border: 1px solid #454545;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background: none;
  padding: 0 .5rem 0 .5rem;
  height: 30px;
  width: 250px;
  color: #ced4da;
  transition: 200ms ease-in-out;
}

.search-input:focus {
  outline: none;
  border: 1px solid #42b983;
  transition: 200ms ease-in-out;
}

.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 60px;
  padding: 0 .5rem 0 .5rem;
  border: none;
  border: 1px solid #454545;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #343434;
  color: #ced4da;
  cursor: pointer;
  transition: 200ms ease-in-out;
}

.store-category {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  justify-items: center;
  width: 100%;
  /* padding: 1rem; */
  /* border: 1px solid #42b983; */
}

.item-category {
  /* border: 1px solid #454545; */
  height: 350px;
  width: 100%;
  /* width: 325px; */
}

.item-category:nth-child(1) {
  grid-column: 1 / 3;
}

.item-category:nth-child(6) {
  grid-column: 3 / 5;
}

.category-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}




.footer {
  padding: .5rem;
  border-top: 1px solid #454545;
  background: #202020;
  margin-top: .5rem;
  width: 100%;
}
</style>
