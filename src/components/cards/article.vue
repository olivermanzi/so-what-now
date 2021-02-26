<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton
                animation="wave"
                width="100%" />
              <b-skeleton
                animation="wave"
                width="85%" />
              <b-skeleton
                animation="wave"
                width="40%" />
            </b-card>
          </template>
          <span class="sub-title">
            📰 Random Article
          </span>
          <hr>
          <span v-if="article">
            <p>
              <b>{{ article.title }}</b>
            </p>
            <p>
              <small><i>{{ article.description }}</i></small>
            </p>
            <b-link
              :href="article.url"
              target="_blank">
              click me to read full article
            </b-link>
          </span>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	export default {
		name:"Article",
		props:{
			article: {
				type: Object,
				default: null,
				required: false
			},
			loading: {
				type: Boolean,
				default: false
			}
		}
	};
</script>

<style>

</style>
