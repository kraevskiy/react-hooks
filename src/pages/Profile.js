import React, {useContext, useEffect, Fragment} from 'react'
import {GithubContext} from "../context/github/githubContext"
import {Link} from "react-router-dom"
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
	const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
	const nameUrl = match.params.name
	useEffect(() => {
		getUser(nameUrl)
		getRepos(nameUrl)
		// eslint-disable-next-line
	}, [])

	if (loading) {
		return <p>load</p>
	}

	const {
		name, company, avatar_url,
		location, bio, blog,
		login, html_url, followers,
		following, public_repos, public_gists
	} = user

	return (
		<Fragment>
			<Link to={'/'} className="btn btn-link">Home</Link>

			<div className="card mb-4">
				<div className="card-body">
					<div className="row align-items-center">
						<div className="col-sm-4 text-center">
							<img src={avatar_url} alt={name} className="img-fluid"/>
							<h2>{name}</h2>
							{location && <p>City: {location}</p>}
						</div>
						<div className="col">
							{
								bio && <Fragment>
									<h3>BIO</h3>
									<p>{bio}</p>
								</Fragment>
							}
							<a
								href={html_url}
								className="btn btn-info"
								target="_blank"
								rel="noopener noreferrer"
							>Profile</a>
							<ul>
								{login && <li>
									<strong>Username: {login}</strong>
								</li>}
								{company && <li>
									<strong>Company: {company}</strong>
								</li>}
								{blog && <li>
									<strong>Blog: {blog}</strong>
								</li>}
							</ul>

							<div className="badge badge-dark">Followers: {followers}</div>
							<div className="badge badge-secondary">Following: {following}</div>
							<div className="badge badge-success">Repo: {public_repos}</div>
							<div className="badge badge-info">Gists: {public_gists}</div>
						</div>
					</div>
				</div>
			</div>
			<Repos repos={repos}/>
		</Fragment>
	)
}
