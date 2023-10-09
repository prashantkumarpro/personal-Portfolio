import React from 'react'
import './Blog.css'
export const Blog = () => {
  return (
    <>
      {/* <!-- blog section start from here  --> */}
    <div id="Blog">
        <div className="blog-container">
            <div className="header-text">
                <div className="lines">
                    <span className="horizontal-rule"></span>
                    <span className="period"></span>
                    <p>FROM BLOG</p>
                </div>
                <h1>Latest Article</h1>
            </div>
            <div className="post-container">
                <div className="post-part1">
                    <div className="blog-img">
                        <img src="https://demo.htmlcodex.com/1011/developer-portfolio-template/img/blog-1.jpg"
                            alt="blog-img1"/>
                    </div>
                    <div className="blog-text">
                        <div className="text1">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin
                                viverra
                                risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare
                                mattis
                                nisl
                                massa et eros vitae pulvin</p>
                            <button className="post-btn">Read more <i className="fa-solid fa-greater-than"></i></button>
                        </div>
                    </div>
                </div>

                <div className="post-part2">
                    <div className="blog-img">
                        <img src="https://demo.htmlcodex.com/1011/developer-portfolio-template/img/blog-2.jpg"
                            alt="blog-img2"/>
                    </div>
                    <div className="blog-text">
                        <div className="text1">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin
                                viverra
                                risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare
                                mattis
                                nisl
                                massa et eros vitae pulvin</p>
                            <button className="post-btn">Read more <i className="fa-solid fa-greater-than"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}
export default Blog;