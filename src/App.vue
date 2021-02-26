<template>
  <div id="app">
    <b-container
      id="content"
      fluid>
      <b-row
        class="title mt-5 mb-1"
        align-h="center">
        <b-col cols="auto">
          So-What-Now? 🤔
        </b-col>
      </b-row>
      <b-row
        class="my-2"
        align-h="center">
        <b-col cols="11">
          <home />
        </b-col>
      </b-row>
    </b-container>
    <footer id="foot">
      <b-row align-h="around">
        <b-col cols="auto">
          created by <a href="https://olivermanzi.com">oliver</a> with ☕️ and ♻️
        </b-col>
        <b-col cols="auto">
          contribute via <a
            href="https://github.com/olivermanzi/so-what-now"
            target="_blank">github</a>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script>
	import homeVue from "./components/home.vue";

	export default {
		name: "App",
		components: {
			home: homeVue
		}
	};
</script>
