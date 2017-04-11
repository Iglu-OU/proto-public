<template>
	<div class="ig-modal">
		<transition name="modal">
			<div class="ig-modal__mask" v-show="show">
				<div class="ig-modal__wrapper">
					<div class="ig-modal__container" :class="'ig-modal__container--' + size">
						<div class="ig-modal__header">
							<slot name="header">
								<h2 v-if="title">{{title}}</h2>
							</slot>
							<button class="ig-modal__close" @click="$emit('close')">
								Sulge <i class="fa fa-times" aria-hidden="true"></i>
							</button>
						</div>

						<div class="ig-modal__body" >
							<slot name="body">
								No content in modal, add it by adding slot="body" to modal content container
							</slot>
						</div>

						<div class="ig-modal__footer">
							<slot name="footer">
								<div class="controls controls--spaced">
									<button class="btn btn--link"
											@click="$emit('close')">Back</button>
									<button class="btn"
											@click="$emit('close')">Confirm</button>
								</div>
							</slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data(){
		return {
		}
	},
	props: ["show", "size", "title"],
	mounted: function () {
		document.addEventListener("keydown", (e) => {
			if (e.keyCode == 27) {
				this.$emit('close')
			}
		});
	}
}
</script>

<style lang="scss">
	.ig-modal__mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: opacity .3s ease;
		overflow: auto;
	}

	.ig-modal__wrapper {
		max-height: 100vh;
		padding: 50px 0;
	}

	.ig-modal__container {
		width: 550px;
		max-width: 90vw;
		margin: 0 auto;
		padding: 30px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: Helvetica, Arial, sans-serif;
		position: relative;
		&--large {
			width: 900px;
		}
		&--small {
			width: 400px;
		}
	}
	.ig-modal__header {
		h2 {
			margin-top: 0;
		}
	}
	.ig-modal__close {
		cursor: pointer;
		color: #9a9898;
		font-weight: 200;
		font-size: 13px;
		position: absolute;
		right: 20px;
		top: 20px;
		background: transparent;
		border: 0;
		outline: none;
		.fa {
			font-size: 14px;
		}
		&:hover {
			color: darken(#9a9898, 15%);
		}
	}

	.ig-modal__body {
		margin: 20px 0;
	}

	/*
     * the following styles are auto-applied to elements with
     * v-transition="modal" when their visiblity is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

	.modal-enter, .modal-leave-active {
		opacity: 0;
	}

	.modal-enter .ig-modal__container ,
	.modal-leave-active .ig-modal__container  {
		transform: scale(.8);
	}
</style>
