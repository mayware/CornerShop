<template>
  <div class="content">
    <div class="main-top-banner">
      <!-- Neon banner -->
      <img src="../assets/bg/bg-banner.png" alt="" class="bg-banner">
    </div>
    <div class="shop-category-panel">
      <div class="category-selection-title">Check out our store</div>
    </div>
    <div class="category-selection">
      <div class="item-category">
        <router-link :to="{ name: 'store', params: { id: alc } }">
          <img src="../assets/category-banners/alcohol-banner.jpg" alt="banner-img" class="category-img">
          <div class="overlay-bot">
            <div class="overlay-text">
              Alcohol drinks
            </div>
          </div>
        </router-link>
      </div>
      <div class="item-category">
        <router-link :to="{ name: 'store', params: { id: soda } }">
          <img src="../assets/category-banners/soft-drinks-banner.jpg" alt="banner-img" class="category-img">
          <div class="overlay-bot">
            <div class="overlay-text">
              Soda & Soft drinks
            </div>
          </div>
        </router-link>
      </div>
      <div class="item-category">
        <router-link :to="{ name: 'store', params: { id: hot } }">
          <img src="../assets/category-banners/hot-drinks-banner.jpg" alt="banner-img" class="category-img">
          <div class="overlay-bot">
            <div class="overlay-text">
              Hot drinks
            </div>
          </div>
        </router-link>
      </div>
      <div class="item-category">
        <router-link :to="{ name: 'store', params: { id: snacks } }">
          <img src="../assets/category-banners/snacks-banner.jpg" alt="banner-img" class="category-img">
          <div class="overlay-bot">
            <div class="overlay-text">
              Snacks
            </div>
          </div>
        </router-link>
      </div>
      <div class="item-category">
        <router-link :to="{ name: 'store', params: { id: meals } }">
          <img src="../assets/category-banners/meal-banner.jpg" alt="banner-img" class="category-img">
          <div class="overlay-bot">
            <div class="overlay-text">
              Meals & lunchboxes
            </div>
          </div>
        </router-link>
      </div>
      <div class="item-category">
        <router-link :to="{ name: 'store', params: { id: cigarettes } }">
          <img src="../assets/category-banners/tobacco-banner.jpg" alt="banner-img" class="category-img">
          <div class="overlay-bot">
            <div class="overlay-text">
              Tobacco
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      alc: '158e839ad0f4f057f869',
      soda: '7873dbcb044096724539',
      snacks: '56d2ce3d37ad758ef7a9',
      hot: '70401304a345b243b4d5',
      cigarettes: '7ff4310b835b4a4988e8',
      meals: 'aee8eea4a5b8e34e819d'
    }
  },
}
</script>

<style>
/* Flicker effect */
@keyframes letter-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 0.1;
  }

  4% {
    opacity: 1;
  }


  19% {
    opacity: 1;
  }

  21% {
    opacity: 0.1;
  }

  23% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

/* Flicker effect */
.main-top-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 453px;
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
  justify-content: center;
  height: 100px;
  padding: .5rem;
  width: 100%;
  border-bottom: 1px solid #202020;
  margin-bottom: 1rem;
}

.category-selection-title {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: .7mm;
  color: #ced4da;
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

.category-selection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  padding: 0 1rem 0 1rem;
  width: 100%;
}

.item-category {
  position: relative;
  height: 350px;
  width: 100%;
  border-radius: 10px;
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
  border: 2px solid transparent;
  border-radius: 10px;
  transition: 200ms ease-in-out;
}

.overlay-bot {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: #f1f1f1;
  width: 100%;
  height: 100%;
  transition: .5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: .5rem;
  text-align: center;
}

.item-category:hover .overlay-bot {
  opacity: 1;
}
</style>
