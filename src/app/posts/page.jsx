import Post from '../components/post';
import classes from './home.module.css';
import jsonData from '../data.json';

const Home = () => {
    const cards = jsonData;
    return (
        <div className={classes.mainWrapper}>
            <main className={classes.mainContent}>
                <h1 className={classes.title}>Main Page</h1>
                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>Posts</h2>
                    <section className={classes.section}>
                        <ul className={classes.cardGrid}>
                            {cards.map((card) => (
                                <Post key={card.id}
                                    path={`./${card.id}`}
                                    title={card.title}
                                    text={card.description} />
                            ))}
                        </ul>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Home;