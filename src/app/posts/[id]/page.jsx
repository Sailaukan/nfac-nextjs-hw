import { useRouter } from 'next/router';
import jsonData from '../../data.json';
import classes from './postPage.module.css';

const PostPage = () => {
    const router = useRouter();
    const { id } = router.slack;
    const post = jsonData.find((p) => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className={classes.postWrapper}>
            <h1 className={classes.postTitle}>{post.title}</h1>
            <p className={classes.postDate}>Date: {post.date}</p>
            <p className={classes.postAuthor}>Author: {post.author}</p>
            <p className={classes.postContent}>{post.description}</p>
        </div>
    );
};

export default PostPage;
