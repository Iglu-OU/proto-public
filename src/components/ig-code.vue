<template>
	<div class="code-wrap">
		<button class="code-btn" title="Vaata koodi" @click="visible = !visible"><i class="ion-code-working" aria-hidden="true"></i></button>
		<button class="code-btn code-btn--copy" ref="copy" title="Kopeeri kood" @click="copy"><i class="ion-ios-copy-outline" aria-hidden="true"></i></button>

		<div class="code" v-show="visible">
			<p class="code__title" >Kood:</p>
			<pre class="code__content language-html"><code ref="code" class="language-html"><slot></slot></code></pre>
		</div>
	</div>
</template>

<script>

import Clipboard from "clipboard";
import Prism from "prismjs";

require('prismjs/themes/prism-coy.css');
require('prismjs/components/prism-scss.js');

export default {
	data(){
		return {
			visible: false,
			clipboard: null
		}
	},
	mounted: function() {
		this.$nextTick(() => {
			Prism.highlightElement(this.$el.getElementsByTagName("code")[0]);
		})
		this.clipboard = new Clipboard(this.$refs.copy, {
			text: () => this.$refs.code.textContent
		});
		this.clipboard.on("success", (e) => {
			this.$message({
			    message: "Copied!",
				type: 'success'
			});
		})
	},
	methods: {
	    copy() {
//	        alert(this.$refs.code.textContent);
		},
		beforeDestroy() {
	      this.clipboard.destroy();
		}
	}
}
</script>

<style lang="scss">
	.code-wrap {
		position: relative;
	}
	.code-btn {
		background: #eee;
		border: none;
		width: 20px;
		height: 20px;
		border-radius: 2px;
		font-weight: bold;
		font-size: 15px;
		padding: 0;
		text-align: center;
		cursor: pointer;
		position: absolute;
		right: 0;
		z-index: 10;
		opacity: .75;
		&:hover {
			opacity: 1;
		}
	}
	.code-btn--copy {
		right: 30px;
	}
	.code {
		/*margin: 1em 0;*/
		&__title {
			font-family: monospace;
			font-weight: 600;
			margin: 0;
		}
		&__content {
			margin-top: 0;
			&:before, &:after {
				display: none !important;
			}
		}
	}
</style>
