import { gql } from '@apollo/client';
import client from '../apollo-client';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code} className={styles.card}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          name
          code
          emoji
        }
      }
    `,
  });
  return {
    props: {
      countries: data.countries,
    },
  };
};
