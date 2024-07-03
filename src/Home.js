import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'How to build a website', body: 'Hi, welcome to . . .', author: 'mario', id: 1 },
        { title: 'Welcome Blog', body: 'Hi, welcome to . . .', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'Hi, welcome to . . .', author: 'mario', id: 3 }
    ]);
    return ( 
        <div className='home'>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;