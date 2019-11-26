import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as postsActionCreators from '../../redux/actions/postsActions';

import PostItem from './PostItem';

// ------------

class AboutUsContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts: []
    }
  };

  componentDidMount() {
    // console.log('componentDidMount')
    // console.log(this.props.posts)
    if (this.props.posts.length === 0) {
      this.props.initializeView();
      this.props.fetchPosts();      
    }
  }

  render() {
    const { posts, postsLoading } = this.props;
    // console.log(this.props)
    return (
      <div className="contentWrapper">
        <div className="container">
          <h1>About Us page</h1>
          <hr/>
          
          {postsLoading && <p>fetching posts...</p>}
                 
          {(!postsLoading && posts.length === 0) ? (
            <p>No posts found.</p>
          ) : (
            <ul className="articles-list" style={{opacity: postsLoading ? 0.5 : 1}}>
              {posts.map(post => (
                <PostItem 
                  key={'post-'+post.id}
                  post={post} 
                  // deleteLoading={!!this.props.removePostLoadingById[post.id]}
                  // onDelete={this.props.removePost.bind(this, post.id)} 
                />
              ))}
            </ul>
          )}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.posts)
  // const { visibilityFilter } = state;
  
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // console.log(todos)
  return  state.posts;
};

const mapDispatchToProps = dispatch => {
  // console.log(postsActionCreators)
  return bindActionCreators(postsActionCreators, dispatch);  
}


export default connect( 
  // state => state.posts,
  mapStateToProps,
  mapDispatchToProps
)(AboutUsContentContainer);

// export default AboutUsContentContainer;