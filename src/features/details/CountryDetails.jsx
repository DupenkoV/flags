import { Info } from './Info'
import { useDetails } from './use-details'

const CountryDetails = ({name, navigate}) => {
  const {status, error, currentCountry} = useDetails(name)

  return (
    <>
        {status === 'loading' && <h2>Data is loading...</h2>}
        {error && <h2>Something is wrong</h2>}
        {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  )
}

export {CountryDetails};