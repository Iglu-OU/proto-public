<template lang="html">
	<section class="alert" :class="'alert--' + alert">
		<h2 class="alert__title" v-if="headline || title">{{headline || title}}</h2>
		<div class="alert__content">
			<slot>

			</slot>
		</div>
	</section>
</template>

<script>
export default {
	props: ["alert", "headline", "title"]
};
</script>
