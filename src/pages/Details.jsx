import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { selectDetails } from '../store/details/details-selectors';
import { loadCoutryByName } from '../store/details/details-createActions';

import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch()
  const {currentCountry, status, error } = useSelector(selectDetails)
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(loadCoutryByName(name))
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Data is loading...</h2>}
      {error && <h2>Something is wrong</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
