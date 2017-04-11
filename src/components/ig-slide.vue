<template>
	<transition
		name="ig-slide"
		mode="out-in"
		v-on:enter="enter"
		v-on:leave="leave"
	>
		<slot></slot>
	</transition>
</template>

<script>
	var TweenMax = require("gsap");

	export default {
		methods: {
			enter: function (el, done) {
				console.log('enter');
				var duration = 0.35; //seconds
				TweenMax.to(el, duration, {
					ease: Power4.easeOut,
					maxHeight: el.scrollHeight,
					onComplete: done
				});
			},
			leave: function (el, done) {
				console.log('leave');
				var duration = 0.35; //seconds
				el.style.maxHeight = el.scrollHeight + "px";
				TweenMax.to(el, duration, {
					maxHeight: "0",
					ease: Power4.easeOut,
					onComplete: done
				});
			}
		}
	}
</script>
