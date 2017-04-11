<script>
import Vue from 'vue'
var self = {
	addSample: function(el) {
//		var lines = self.code.split('\n');
//		if (self.arg !== "wrap") {
//			if (lines.length && lines[0] == "") {
//				lines.splice(0, 1);
//			}
//			var matches;
//			var indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
//			if (!!indentation) {
//				lines = lines.map(function(line) {
//					return line.replace(indentation, '');
//				});
//				self.code = lines.join('\n').trim();
//			}
//		}
//		el.innerHTML = el.innerHTML + '<ig-code code="' + self.escapeHtml(self.code) + '"></ig-code>';
	},
	escapeHtml: function(unsafe) {
		return unsafe
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;")
	},
};

export default {
	bind: function(el, binding, vmodel) {
		var createAnchor = Vue.util.createAnchor;
		var replace = Vue.util.replace;
		self.code = el.innerHTML;
//		self.anchor = createAnchor('v-sample');
		self.addSample(el);
//		replace(el, self.anchor);
	},
	update: function(el) {
//		if (!self.factory) {
//			self.factory = new Vue.FragmentFactory(self.vm, el)
//		}
//		self.frag = self.factory.create(self._host, self._scope, self._frag);
//		self.frag.before(self.anchor);
	},
	unbind: function () {
//		var remove = Vue.util.remove
//		self.frag.remove()
//		remove(self.anchor)
	}
}
</script>

<style lang="scss" scoped>

</style>
