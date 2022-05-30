import styles from '../../styles/People.module.css'
import Link from 'next/link';
export const getStaticProps = async () =>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    return {
        props: { people: data }
    }
}
const People = ({ people }) => {
    return ( 
        <div>
            <h1>People Names</h1>
            {people.map(people => (
                <Link href={'/people/'+ people.id} key={people.id}>
                    <a className={styles.single  }>
                        <h3>
                            { people.name}
                        </h3>
                    </a>
                    </Link>
            ))}
        </div>
     );
}
 
export default People;