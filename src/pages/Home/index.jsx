import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import BannerImg from '../../assets/banner.png';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import { useFetch } from '../../utils/hooks';

function Home() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/logements.json`
  );
  const logementsList = data;
    
  if (error) {
    return <span>Il y a un problème</span>
  };

  return (
    <div className='home'>
      <Banner image={BannerImg} alt="bannière image de forêt" />
      {isLoading ? (
        <div className='loader-container'>
          <Loader data-testid="loader" />
        </div>
      ) : (
        <section className='card-container'>
          {logementsList?.map((logement) => (
            <Link className='card' key={`Housing-${logement.id}`} to={`/Housing/${logement.id}`}>
              <Card
                title={logement.title}
                cover={logement.cover}
              />
            </Link>
          ))}
        </section>
      )}
    </div>
  )
};
  
export default Home;