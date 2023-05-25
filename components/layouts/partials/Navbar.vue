<template>
  <div class="mx-auto h-100 w-100 position-relative">
    <b-navbar class="style-navbar h-100 justify-content-center" toggleable="lg" type="light"
      variant="light">
      <div class="container d-flex justify-content-between">
        <nav class="navbar py-1 py-md-0">
          <h2 @click.prevent="$router.push({ path: '/home' })" class="d-flex align-items-center pointer ml-1 ml-sm-0">
            <a href="#" class="branding-logo">
              <img src="@/assets/images/home/logo_header.png" alt="">
            </a>
            <span class="font-weight-bold text-default ml-1 ml-md-2 hide-name d-flex flex-wrap flex-column pointer">
              <span class="header-font-1 no-wrap mb-0 mb-sm-1">Xã Thông Minh</span>
              <span class="header-font-2 no-wrap text-warning d-flex align-items-center" style="font-weight:400" @click="showExplore">
                Khám phá
                <i class='bx bx-right-arrow-alt animate-size text-success'></i>
              </span>
            </span>
          </h2>
          <!-- Mobile/Tablet Controller -->
          <button class="px-1" @click="isOpenMenu = !isOpenMenu" v-b-toggle="'mobile-menu'" style="border: none; background-color: transparent;">
            <div class="hamburger" :class="{'close': isOpenMenu}"></div>
          </button>
          <!-- Desktop -->
          <ul class="menu d-none d-md-flex">
            <li class="position-relative" v-for="(item, index) in menu" :key="index" :class="{ 'has-dropdown': item.children }">
              <a @click.prevent="changePage(item)" class="menu-link pointer">{{ item.name }}<span
                  v-if="item.children.length" class="arrow"><i class='bx bxs-down-arrow'></i></span></a>
              <ul v-if="item.children.length" class="submenu">
                <li v-for="(item_1, index_1) in item.children" :key="`${index_1}_1`"
                  :class="{ 'has-dropdown': item_1.children }">
                  <a @click.prevent="changePage(item_1)" class="menu-link pointer">{{ item_1.name }}
                    <span v-if="item_1.children.length" class="arrow">
                      <i class='bx bxs-down-arrow'></i>
                    </span>
                  </a>
                  <ul v-if="item_1.children.length" class="submenu">
                    <li v-for="(item_2, index_2) in item_1.children" :key="`${index_2}_2`"
                      :class="{ 'has-dropdown': item_2.children }">
                      <a @click.prevent="changePage(item_2)" class="menu-link pointer">{{ item_2.name }}<span
                          v-if="item_2.children.length" class="arrow"><i class='bx bxs-down-arrow'></i></span></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <b-collapse v-if="isOpenMenu" id="mobile-menu" class="mobile-menu bg-light d-md-none pb-2 py-2">
        <div class="container d-flex flex-column mx-auto pl-3 pl-sm-0" style="font-size: 18px;">
          <div v-for="(item, index) in menu" :key="index" class="py-2 ml-auto mr-4 sub-menu-0" :class="{ 'has-dropdown': item.children }">
            <a @click.prevent="changePage(item)" class="pointer d-flex justify-content-end">
              {{ item.name }}
              <span v-if="item.children.length" class="arrow mt-1">
                <i class='bx bxs-down-arrow'></i>
              </span>
            </a>
            <div v-if="item.children.length" class="sub-menu-1">
              <div
                class="pr-3"
                v-for="(item_1, index_1) in item.children" :key="`${index_1}_1`"
                :class="{ 'has-dropdown': item_1.children }"
              >
                <a class="py-1 menu-link pointer d-flex justify-content-end" @click.prevent="changePage(item_1)" style="color: #1B6869">
                  {{ item_1.name }}
                  <span v-if="item_1.children.length" class="arrow mt-1">
                    <i class='bx bxs-down-arrow'></i>
                  </span>
                </a>
                <div v-if="item_1.children.length" class="sub-menu-2 py-1">
                  <div
                    class="pl-2 py-1"
                    v-for="(item_2, index_2) in item.children" :key="`${index_2}_1`"
                    :class="{ 'has-dropdown': item_2.children }"
                  >
                    <a class="py-2 menu-link pointer" @click.prevent="changePage(item_2)">
                      {{ item_2.name }}
                      <span v-if="item_2.children.length" class="arrow">
                        <i class='bx bxs-down-arrow'></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
    <div>
      <model-explore :openExplore="openExplore" />
    </div>
  </div>
</template>
<script>
import ModelExplore from './ModalExplore.vue'
export default {
  name: 'Navbar',
  components: {
    ModelExplore
  },
  data() {
    return {
      menu: {},
      entries: [],
      hamburger: "",
      makerSelected: {},
      openExplore: false,
      isOpenMenu: false
    }
  },
  watch: {
    "$route.params": {
      handler() {
        this.setMenu()
      },
      deep: true
    },
  },
  methods: {
    showExplore() {
      this.openExplore = !this.openExplore
    },
    changePage(item) {
      if (item.url !== '#' && item.url) {
        if (item.url.startsWith("https://")) {
          window.open(item.url, '_blank', 'noreferrer');
        } 
        else if(item.url.includes('admin')) {
          window.location.href = '/admin/home'
        }
        else {
          this.$router.push({ path: item.url })
        }
        this.isOpenMenu = false
      }
    },
    async getMenu() {
      let response = await this.$store.dispatch('home/ListMenu')
      if (response.code === 200) {
        this.entries = response.data.entries
      }
      this.setMenu()
    },
    setMenu() {
      if (this.$route.params.slug !== 'admin' && this.$route.params.slug) {
        this.menu = this.entries[1].content
      }
      else {
        this.menu = this.entries[0].content
      }
    },
  },
  created() {
    this.getMenu()
  },
}
</script>

<style scoped lang="scss">
:root {
  box-sizing: border-box;

  --primary: #e70146;
  --hover-color: #fdd052;
  --dark: #171917;
  --light: #fff;

  --header-bg: var(--primary);
}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: "josefin sans", "helvetica", sans-serif;
  font-size: 1rem;
}

header {
  padding-left: 1.5em;
  position: sticky;
  top: 0;
}

ul.submenu a {
  color: #000;
}

.branding-logo {
  color: var(--light);
  font-size: calc(0.8rem + 1vw);
  text-decoration: none;
  img {
    width: 41px;
    height: 41px;
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
}

.menu li {
  list-style: none;
}

.menu>li>a {
  color: #44B97C;
}

.menu li a {
  display: block;
  text-decoration: none;
  padding: 0.8em 0.7em;
  font-size: 1rem;
}

/* Styling submenu */
.has-dropdown {
  position: relative;
}

.submenu {
  position: absolute;
  left: 0;
  background-color: #fff;
  white-space: nowrap;
  width: 200px;
  border-radius: 8px;

  /* hide submenus */
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top center;
  border: 0.5px solid #A3A3A3;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);
}

ul.submenu {
  position: absolute;
  top: 50px;
  left: 10px;
}

.submenu>li>a {
  padding: 0.8em 1em;
}

.submenu {
  left: 100%;
  top: 0;
}

.submenu {
  left: -100%;
  top: 0;
}

.menu>li:hover>a,
.submenu>li:hover>a {
  color: #03803f;
}

// .menu>li:hover>a {}

/* Arrows */

.arrow {
  width: 0.5em;
  height: 0.5em;
  font-size: 11px;
  margin-left: 6px;
  display: inline-block;
  transition: transform 100ms ease-in-out;
  color: #03803f;
}

/* Reveal  */
.menu>li:hover>a+.submenu,
.submenu>li:hover>a+.submenu {
  opacity: 1;
  transform: scaleY(1);
}

/* ANIMATE aRROWS */
.menu>li:hover>a>.arrow,
.submenu>li:hover>a>.arrow {
  transform: translateY(2px);
}

@media (max-width: 1268px) {
  .hide-name {
    display: none;
  }
}

@media only screen and (max-width: 78.75em) {
  .submenu .submenu .submenu {
    left: -100%;
    top: 0.5em;
  }

  .submenu {
    min-width: 12.5em;
  }

  .navbar {
    width: 100%;
  }
}

@media only screen and (max-width: 992px) {
  .menu li a {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 768px) {
  header {
    /*     position: relative; */
    padding: 1.5em 2em;
  }

  .menu {
    flex-flow: column;
    position: absolute;
    background: var(--light);
    top: 4.55em;
    left: 0;
    right: 0;
    height: 100vh;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top center;
    transition: 200ms transform cubic-bezier(0.36, 0.4, 0.42, 1.48) 100ms,
      100ms opacity ease-in-out;

    overflow-y: scroll;

  }

  .menu>li>a {
    font-size: 1rem;
    color: var(--dark);
  }

  .submenu>li>a {
    font-size: 1rem;
  }

  .submenu {
    top: 0;
    padding-left: 1.5em;
    // border-left: 0.12em dotted hsla(342, 99%, 45%, 0.95);
  }

  .submenu .submenu {
    left: 0;
    top: 0;
  }

  .submenu .submenu .submenu {
    left: 0;
    top: 0;
  }

  .menu>li:hover>a+.submenu,
  .submenu>li:hover>a+.submenu {
    position: relative;
  }

  .hamburger {
    width: 1.6em;
    height: 0.18em;
    margin-right: 10px;
    display: block;
    background: #000;
    position: relative;
    cursor: pointer;
    transition: 0.2s transform ease-in-out;
  }

  .hamburger::after,
  .hamburger::before {
    content: "";
    position: absolute;
    left: 0;
    background: inherit;
    width: inherit;
    height: inherit;
    transition: 0.2s transform ease-in-out;
  }

  .hamburger::after {
    top: 0.65em;
  }

  .hamburger::before {
    bottom: 0.65em;
  }
  .close {
    width: 1.2em;
    transform: rotate(45deg);
    transition: 0.2s transform ease-in-out;
  }
  .close::after,
  .close::before {
    top: 0;
    transition: 0.2s transform ease-in-out;
  }

  .close::before {
    display: none;
  }

  .close::after {
    transform: rotate(-90deg);
  }
}

main {
  /* just to make scrollable vertically to see sticky navbar    */
  height: 200vh;
}

.inter {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
.header-font-1 {
  font-size: 16px;
}
.header-font-2 {
  font-size: 14px;
}
.mobile-menu {
  position: absolute;
  top: 49px;
  left: 0;
  height: fit-content;
  width: 100vw;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.204);
}
.sub-menu-1 {
  display: none;
}
.sub-menu-2 {
  display: none;
}
.sub-menu-0:hover > .sub-menu-1 {
    display: block;
}
.sub-menu-1:hover > .sub-menu-2 {
    display: block;
}
@media screen and (min-width: 550px) {
  
}
@media screen and (min-width: 768px) {
  .mobile-menu {
    top: 64px;
  }
  .navbar {
    .branding-logo {
      img {
        width: 44px;
        height: 44px;
      }
    }
  }
  .header-font-1 {
    font-size: 16px;
  }
  .header-font-2 {
    font-size: 14px;
  }
}
@media screen and (min-width: 992px) {
  .navbar {
    .branding-logo {
      img {
        width: 66px;
        height: 66px;
      }
    }
  }
  .header-font-1 {
    font-size: 22px;
  }
  .header-font-2 {
    font-size: 18px;
  }
  .menu li a {
    padding: 0.8em 1em;
  }
}
</style>