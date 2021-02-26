<template>
  <div>
    <b-row>
      <b-col
        class="mt-2"
        cols="12">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-skeleton
              animation="wave"
              width="85%" />
            <b-skeleton
              animation="wave"
              width="100%" />
          </template>
          <p>
            <span class="sub-title">
              📍 Goal {{ goal.code }} in 🌍 {{ area }}
            </span>
          </p>
          <hr>
          <b-card>
            <b-card-title>
              <b>🗃 Title</b>: {{ goal.title }}
            </b-card-title>
            <hr>
            <b-card-text>
              {{ goal.description }}
            </b-card-text>
          </b-card>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	export default {
		name:"Goal",
		props:{
			goal:{
				type: Object,
				required: true
			},
			area:{
				type: String,
				required: true
			},
			loading:{
				type: Boolean,
				default: false
			}
		}
	};
</script>

<style>

</style>
