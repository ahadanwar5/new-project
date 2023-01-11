import axios from 'axios'
import React, { useEffect, useReducer} from 'react'
import logger from 'use-reducer-logger'
//import { products } from '../data'
import ProductHome from './ProductHome'



const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
      default:
        return state;
  }
}

const ProductsHome = () => {

  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  });

  //const [products, setProducts] = useState([]); //default is empty database or json, no products

  useEffect(() => {

    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }
      
      //setProducts(result.data);
    }
    fetchData();

  }, []);

  return (
    <section class="section-content mt-5">
    <h2 id='productsLatest'>Latest Products</h2>
    <div className='container-fluid container-fluid-styling'>  
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-5 g-3">
        {/* 0, 8 is first 8, but for latest 8 is -8 */}
        {
        loading ? (<h1 className='loading'>Loading...</h1>) : error ? (<h1 className='error'>{error}</h1>) : (
          products.slice(-10).map((item) => (
            <ProductHome item={item} key={item._id} />
        ))
        )
        }
      </div>
    </div>
    </section>
      
  )
}

export default ProductsHome
