<template>
  <b-navbar toggleable="md" type="dark" variant="info" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <nuxt-link tag="b-navbar-brand" to="/">Enjoy Vue</nuxt-link>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/" exact>Top</b-nav-item>
        <b-nav-item to="/presentation?page=0">Presentation</b-nav-item>
        <b-nav-item to="/samples">Samples</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item href="https://sway.com/6Ud33iBEH2hO6nEX" target="_blank" right>2018/05/28 TDC Tech Forum</b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

