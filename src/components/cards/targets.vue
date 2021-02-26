<template>
  <div>
    <b-row
      class="my-5"
      align-h="center">
      <b-col
        class="mt-2"
        cols="12">
        <hr>
        <span
          class="sub-title">
          🎯 Targets
        </span>
      </b-col>
      <b-col
        class="mb-1"
        sm="11"
        md="11"
        v-for="target in targets"
        :key="target.code">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-skeleton
              animation="wave"
              width="85%" />
            <b-skeleton
              animation="wave"
              width="100%" />
          </template>
          <b-card>
            <b-card-title>
              <b>{{ target.code }}</b>
            </b-card-title>
            <b-card-text>
              {{ target.description }}
            </b-card-text>

            <b v-if="target.indicators.length > 0">📊 Indicators</b>
            <b-list-group v-if="target.indicators.length > 0">
              <b-list-group-item
                v-for="indicator in target.indicators"
                :key="indicator.code">
                <small><b>{{ indicator.code }}</b></small>: {{ indicator.description }}
              </b-list-group-item>
            </b-list-group>
            <b-list-group v-else>
              <b-list-group-item>
                😐 No indicators
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-skeleton-wrapper>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	export default {
		name:"Targets",
		props:{
			targets: {
				type: Array,
				required: true
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
