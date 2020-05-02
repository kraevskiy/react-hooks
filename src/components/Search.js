import React, {useContext, useState} from 'react'
import {AlertContext} from "../context/alert/alerContext"
import {GithubContext} from "../context/github/githubContext"

export const Search = () => {
	const [value, setValue] = useState('')
	const alert = useContext(AlertContext)
	const github = useContext(GithubContext)

	const onSubmit = event => {
		if(event.key !== 'Enter'){
			return
		}
		github.clearUsers()
		if(value.trim()){
			alert.hide()
			github.search(value.trim())
		}else {
			alert.show('введите данные')
		}
	}

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Bведите ник пользователя"
				onKeyPress={onSubmit}
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
		</div>
	)
}

