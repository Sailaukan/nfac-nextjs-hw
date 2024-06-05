import Link from 'next/link';

const Post = (props) => {
    return (
        <Link href={props.path} passHref>
            <div className="block w-full h-full m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        {props.title}
                    </p>
                    <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        {props.text}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Post;
