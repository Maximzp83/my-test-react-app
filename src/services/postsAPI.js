// import axios from 'axios'

const posts = [
	{
		id: 1,
		title: 'Post 1',
		content: 'post 1 content'
	},
	{
		id: 2,
		title: 'Post 2',
		content: 'post 2 content'
	},
	{
		id: 3,
		title: 'Post 3',
		content: 'post 3 content'
	}
]

export const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var response = {
      	status: 200,
      	data: posts
      }
      // console.log(response.data)
      if (response && response.status === 200) {
      	resolve(response.data);
      } else {
      	reject(response)
      }
    }, 1000)
  });
}