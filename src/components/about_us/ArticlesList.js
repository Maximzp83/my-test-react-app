import React from 'react';

const ArticlesList = (posts) => (
	<div className="container">
		<ul className="articles-list">
		{	posts && posts.length
		  ? posts.map((post, pIndex) => {
				return <li>{{post.title}}</li>
			}) :
			<div>нет постов</div>
		}
		</ul>
	</div>
)



export default ArticlesList;	   
