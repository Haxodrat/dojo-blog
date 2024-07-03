import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'How to build a website', body: 'Hi, welcome to . . .', author: 'mario', id: 1 },
        { title: 'Welcome Blog', body: 'Hi, welcome to . . .', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'Hi, welcome to . . .', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    };

    return ( 
        <div className='home'>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />
        </div>
    );
}
 
export default Home;