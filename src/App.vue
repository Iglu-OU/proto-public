  <template>
	<main>
		<router-view>

		</router-view>
	</main>
  </template>

  <script>

	var files = require.context('svg-sprite!../static/icons', false, /\.svg$/);
	files.keys().forEach(files);

	export default {
	  data(){
		return{
		  example: 'hello'
		}
	  }
	}
  </script>


  <style lang="scss" src="./scss/app.scss">
  </style>
