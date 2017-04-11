<template>
	<div class="grid">
		<div class="col--lg-6 col--sm-12">
			<h2>Suured teated</h2>
			<code webpack>
				<ig-alert alert="error" headline="Veateade">
					<p>
						Näidis: title="Pealkiri".
					</p>
					<ul class="list">
						<li>alert="error"</li>
						<li>alert="info"</li>
						<li>alert="success"</li>
					</ul>
				</ig-alert>

				<ig-alert alert="info" title="Info teade">
					<p>Suur infoteade</p>
				</ig-alert>
				<ig-alert alert="success" title="Success teade">
					<p>Suur õnnestumise teade</p>
				</ig-alert>
			</code>


			<h2>Suured teated ilma pealkirjata</h2>
			<code webpack>
				<ig-alert alert="error">
					<p>Suur veateade ilma pealkirjata.</p>
				</ig-alert>

				<ig-alert alert="info">
					<p>Suur infoteade ilma pealkirjata.</p>
				</ig-alert>

				<ig-alert alert="success">
					<p>Suur õnnestumise teade ilma pealkirjata.</p>
				</ig-alert>
			</code>
		</div>

		<div class="col--lg-6 col--sm-12">
			<h2>Teated konteineri sees. .alert--in-box</h2>
			<code webpack>
				<section class="box" >
				  <section  class="alert alert--success alert--in-box">
						<h2 class="alert__title">Kasutaja on loodud</h2>
						<div class="alert__content">
							<p>Ühel firmal on üks kasutaja. Kolleegide jagamiseks palun muutke enda parooli ajutiselt.</p>
						</div>
					</section>
					<h1>Lorem ipsum dolor sit amet</h1>
					<div>
						<p>A malesuada malesuada, rutrum urna vel maecenas arcu amet, maecenas ac sapien nibh dolores curabitur, viverra euismod nec in tempor.</p>
						<p>Donec eget curabitur sagittis, vitae omnis neque, tellus eu dolor libero nam at, viverra nullam in mauris, elementum odio. Nibh sodales ac ridiculus sit in metus</p>
					</div>
				</section>
			</code>

			<div class="box">
				<h2>Väiksed inline teated</h2>
				<code webpack>
					<ig-input type="password" label="Error" alert="error" alert-text="Erroriga input"></ig-input>
				</code>

				<code webpack>
					<ig-input type="password" label="Success" alert="success" alert-text="Successiga input"></ig-input>
				</code>

				<code webpack>
					<ig-input type="password" label="Info" alert="info" alert-text="Infoga input"></ig-input>
				</code>
			</div>
		</div>
	</div>
</template>
