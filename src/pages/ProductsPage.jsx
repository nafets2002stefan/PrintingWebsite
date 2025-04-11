import React, { useEffect} from 'react'
import Products from '../components/Products'
import { useTranslation } from 'react-i18next';

function ProductsPage() {

  const [t] = useTranslation('global');
  useEffect(() => {
      document.title = t('_products');
    }, []);

  return (
    <main className='relative min-h-screen overflow-x-hidden default-bg'>
        <Products/>
    </main>
  )
}

export default ProductsPage