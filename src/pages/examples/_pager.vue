<template>
    <div class="box">
        <h3>Pager</h3>
		<code webpack>
			<div class="pager">
				<ul class="pager__list">
					<li class="pager__list-item"><a href="#">
						<i class="fa fa-chevron-left is-hidden--sm is-hidden--md is-hidden--lg" aria-hidden="true"></i>
						<span class="is-hidden--xs">Previous</span>
					</a>
					</li>
					<li class="pager__list-item"><a class="active" href="#">1</a></li>
					<li class="pager__list-item"><a href="#">2</a></li>
					<li class="pager__list-item"><a href="#">3</a></li>
					<li class="pager__list-item"><a href="#">4</a></li>
					<li class="pager__list-item"><a href="#">5</a></li>
					<li class="pager__list-item">
						<a href="#">
							<i class="fa fa-chevron-right  is-hidden--sm is-hidden--md is-hidden--lg" aria-hidden="true"></i>
							<span class="is-hidden--xs">Next</span>
						</a>
					</li>
				</ul>
				<button class="pager__show-all btn btn--link">Show all</button>
			</div>

		</code>


        <h3>Pager without href</h3>
		<code webpack>
			<div class="pager">
				<ul class="pager__list">
					<li class="pager__list-item">
						<a>
							<i class="fa fa-chevron-left is-hidden--sm is-hidden--md is-hidden--lg" aria-hidden="true"></i>
							<span class="is-hidden--xs">Previous</span>
						</a>
					</li>
					<li class="pager__list-item"><a class="active">1</a></li>
					<li class="pager__list-item"><a>2</a></li>
					<li class="pager__list-item"><a>3</a></li>
					<li class="pager__list-item"><a>4</a></li>
					<li class="pager__list-item"><a>5</a></li>
					<li class="pager__list-item">
						<a>
							<i class="fa fa-chevron-right is-hidden--sm is-hidden--md is-hidden--lg" aria-hidden="true"></i>
							<span class="is-hidden--xs">Next</span>
						</a>
					</li>
				</ul>
				<button class="pager__show-all btn btn--link">Show all</button>
			</div>
		</code>
		<h3>pager--center</h3>
		<code webpack>
			<div class="pager pager--center">
				<ul class="pager__list">
					<li class="pager__list-item">
						<a>
							<i class="fa fa-chevron-left is-hidden--sm is-hidden--md is-hidden--lg" aria-hidden="true"></i>
							<span class="is-hidden--xs">Previous</span>
						</a>
					</li>
					<li class="pager__list-item"><a class="active">1</a></li>
					<li class="pager__list-item"><a>2</a></li>
					<li class="pager__list-item"><a>3</a></li>
					<li class="pager__list-item"><a>4</a></li>
					<li class="pager__list-item"><a>5</a></li>
					<li class="pager__list-item">
						<a>
							<i class="fa fa-chevron-right is-hidden--sm is-hidden--md is-hidden--lg" aria-hidden="true"></i>
							<span class="is-hidden--xs">Next</span>
						</a>
					</li>
				</ul>
			</div>
		</code>
    </div>
</template>
