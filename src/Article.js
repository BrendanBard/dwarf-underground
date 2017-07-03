import React, {Component} from 'react'
import './Article.css'
import ArticleBody from './ArticleBody'

import ArticleLink from './ArticleLink'

class Article extends Component{
    render(){
        return(
            <div>
            <ArticleBody />
            <ArticleLink /> 
            
            </div>
            
        )
    }
}
export default Article