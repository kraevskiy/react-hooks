import React from "react"

export const Repos = ({repos}) => (
	<React.Fragment>
		{repos.map(repo => (
			<div className="card mb-4" key={repo.id}>
				<div className="card-body">
					<a
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
					>{repo.name}</a>
				</div>
			</div>
		))}
	</React.Fragment>
)