<!--<template>-->
	<!--<span class="input typeahead {{classes ? classes : ''}}">-->
		<!--<label class="input__label" for="{{id}}" v-if="label">-->
			<!--{{label}}-->
		<!--</label>-->
		<!--<span class="typeahead__field-wrap">-->
			<!--<input class="input__field  typeahead__field"-->
				   <!--id="{{id}}"-->
				   <!--type="text"-->
				   <!--:placeholder="placeholder"-->
				   <!--autocomplete="off"-->
				   <!--v-model="query"-->
				   <!--@keydown.down="down"-->
				   <!--@keydown.up="up"-->
				   <!--@keydown.enter="hit"-->
				   <!--@keydown.esc="reset"-->
				   <!--@input="update"/>-->

			<!--<span class="typeahead__icons">-->
				<!--<i class="fa fa-spinner fa-spin" v-if="loading"></i>-->
				<!--<template v-else>-->
					<!--<i class="fa fa-search" v-show="isEmpty"></i>-->
					<!--<i class="fa fa-times" v-show="isDirty" @click="reset"></i>-->
				<!--</template>-->
			<!--</span>-->
		<!--</span>-->

	<!--<ul v-show="hasItems" class="typeahead__result">-->
		<!--<li class="typeahead__result-item" v-for="item in items" :class="activeClass($index)" @mousedown="hit" @mousemove="setActive($index)">-->
			<!--<span v-text="item"></span>-->
		<!--</li>-->
	<!--</ul>-->
	<!--</span>-->
<!--</template>-->

<!--<script>-->
	<!--import VueTypeahead from 'vue-typeahead'-->
	<!--export default {-->
		<!--mixins: [VueTypeahead], // vue@1.0.21- -->

		<!--props: ["placeholder", "data", "classes", "data", "label"],-->
		<!--computed: {-->
			<!--id: function () {-->
				<!--function s4() {-->
					<!--return Math.floor((1 + Math.random()) * 0x10000)-->
						<!--.toString(16)-->
						<!--.substring(1);-->
				<!--}-->
				<!--return s4() + s4() + s4();-->
			<!--}-->
		<!--},-->
		<!--data() {-->
			<!--return {-->
				<!--src: '...',-->
				<!--// Limit the number of items which is shown at the list-->
				<!--// (optional)-->
				<!--limit: 10,-->
				<!--// The minimum character length needed before triggering-->
				<!--// (optional)-->
				<!--minChars: 2,-->
				<!--selectFirst: true,-->
			<!--}-->
		<!--},-->

		<!--methods: {-->
			<!--// The callback function which is triggered when the user hits on an item-->
			<!--// (required)-->
			<!--onHit(item) {-->
				<!--this.reset();-->
				<!--this.query = item;-->
			<!--},-->

			<!--fetch() {-->
				<!--let items = [];-->
				<!--if (this.data && this.data.length) {-->
					<!--items = this.data;-->
				<!--} else {-->
					<!--items = [-->
						<!--'abc',-->
						<!--'aabc',-->
						<!--'aaabc',-->
						<!--'aaaabc',-->
						<!--'aaaabbc',-->
						<!--'aaaabbbc',-->
						<!--'aaaabbbcc',-->
						<!--'aaaabbbccc'-->
					<!--]-->
				<!--}-->
				<!--return Promise.resolve({-->
					<!--data: items.filter((item) => {-->
						<!--return item.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;-->
					<!--})-->
				<!--})-->
			<!--}-->
		<!--}-->
	<!--}-->


<!--</script>-->

<!--<style lang="scss" scoped>-->
	<!--.typeahead {-->
		<!--position: relative;-->
		<!--&__field-wrap {-->
			<!--display: inline-block;-->
			<!--position: relative;-->
			<!--width: 100%;-->
		<!--}-->
		<!--&__icons {-->
			<!--position: absolute;-->
			<!--top: 50%;-->
			<!--right: 7px;-->
			<!--transform: translateY(-50%);-->
		<!--}-->
		<!--&__field {-->
			<!--padding-right: 18px;-->
		<!--}-->
		<!--&__result {-->
			<!--position: absolute;-->
			<!--z-index: 1;-->
			<!--width: 100%;-->
			<!--border: 1px solid #ccc;-->
		<!--}-->
		<!--&__result-item {-->
			<!--padding: 5px;-->
			<!--&.active {-->
				<!--background: #eee;-->
			<!--}-->
		<!--}-->
	<!--}-->
<!--</style>-->
