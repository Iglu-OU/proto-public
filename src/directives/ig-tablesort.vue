<script>
import tablesorterCss from 'tablesorter/dist/css/theme.materialize.min.css';

import Vue from 'vue'
import $ from 'jquery';
import tablesorter from 'tablesorter';


export default {
	bind: function(el) {
		$(el).addClass("tablesorter-materialize");
		$(el).tablesorter();
	},
	update: function() {

	},
	unbind: function (el) {
		$(el).trigger("destroy");
	}
}




</script>

<style lang="scss" scoped>

</style>
