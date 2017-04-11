<template>
	<div class="grid">
		<div class="col--lg-6 col--sm-12">
			<div class="box">
				<h2>Input</h2>
				<h3>ig-input</h3>
				<code webpack>
					<p>
						<ig-input value="väärtus" label="input"></ig-input>
						<ig-loader></ig-loader>
					</p>
				</code>
				<code webpack>
					<p><ig-input classes="input--fluid" value="" label="input--fluid"></ig-input></p>
				</code>

				<code webpack>
					<p><ig-input type="password" label="error" alert="error" alert-text="Erroriga input"></ig-input></p>
				</code>

				<code webpack>
					<p><ig-input type="password" label="success" alert="success" alert-text="successiga input"></ig-input></p>
				</code>

			</div>
			<div class="box">
				<h2>Textarea</h2>
				<h3>ig-textarea</h3>
				<code webpack>
					<p><ig-textarea value="Sed nec volutpat enim." label="textarea"></ig-textarea></p>
				</code>
				<code webpack>
					<p><ig-textarea classes="textarea--fluid" value="Sed nec volutpat enim." label="textarea--fluid"></ig-textarea></p>
				</code>
			</div>
			<div class="box">
				<h2>Select</h2>
				<h3>ig-select</h3>
				<code webpack>
					<ig-select label="select" :options="[{text: 'Esimene', value: '1'}, {text: 'Teine', value: '2'}]" selected=""></ig-select>
				</code>
				<code webpack>
					<ig-select label="select--fluid" classes="select--fluid" :options="[{text: 'Esimene', value: '1'}, {text: 'Teine', value: '2'}]" selected="2"></ig-select>
				</code>
			</div>
		</div>
		<div class="col--lg-6 col--sm-12">

			<div class="box">
				<h2>Radio</h2>
				<h3>ig-radio</h3>
				<code webpack>
					<ig-radio name="raadio" value="üks" label="raadio 1"></ig-radio>
					<ig-radio name="raadio" value="kaks" :checked="true" label="raadio 2"></ig-radio>
				</code>

				<h3>ig-radio-group</h3>
				<code webpack>
					<ig-radio-group classes="test"
									:inline="false"
									:options="[{label: 'üks'}, { label: 'kaks'}, {label: 'muu', input: true, checked: true}]">
					</ig-radio-group>
				</code>
			</div>
			<div class="box">
				<h2>Checkbox</h2>

				<h3>ig-checkbox</h3>
				<code webpack>
					<ig-checkbox name="checkbox" value="üks" label="checkbox 1"></ig-checkbox>
					<ig-checkbox name="checkbox2" value="kaks" :checked="true" label="checkbox 2"></ig-checkbox>
				</code>


				<h3>ig-checkbox-group</h3>

				<code webpack>
					<ig-checkbox-group classes="test"
									   :inline="false"
									   :options="[{label: 'cbg üks'}, { label: 'cbg kaks'}, {label: 'cbg muu', input: true, checked: true}]">
					</ig-checkbox-group>
				</code>
			</div>
			<div class="box">
				<h2>Typeahead</h2>
				<h3>ig-typeahed</h3>
				<code webpack>
					<!--TODO: add typeahead-->
					<!--<ig-typeahead placeholder="Typeahead demo" label="Typeahead" classes="input&#45;&#45;fluid" :data="[-->
																		<!--'(809) 116-1294',-->
																		<!--'(809) 486-1234',-->
																		<!--'(801) 404-3970',-->
																		<!--'(805) 400-3032',-->
																		<!--'(958) 591-3361',-->
																		<!--'(821) 487-3209',-->
																		<!--'(959) 562-2635',-->
																		<!--'(839) 508-2638',-->
																		<!--'(920) 436-2833',-->
																		<!--'(841) 440-3755',-->
																		<!--'(997) 435-2249',-->
																		<!--'(981) 440-2614',-->
																		<!--'(923) 584-2861',-->
																		<!--'(935) 595-3134',-->
																		<!--'(945) 451-3477',-->
																		<!--'(860) 555-3069',-->
																		<!--'(935) 501-2767',-->
																		<!--'(830) 476-2233',-->
																		<!--'(968) 431-3281',-->
																		<!--'(821) 594-3565',-->
																		<!--'(821) 594-1165',-->
																		<!--'(936) 411-3796'-->
																		<!--]">-->

					<!--</ig-typeahead>-->
				</code>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
