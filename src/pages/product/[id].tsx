import { NextPage } from 'next'
import Image from 'next/future/image'

import * as S from '../../styles/pages/product'

const ProductDetails: NextPage = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src="https://files.stripe.com/links/MDB8YWNjdF8xTGpzOHRJUERIMWlKQkNkfGZsX3Rlc3RfSXU5aGUycTNuSWN0dUFPZnlYWFlzUFFs00AeJ5YBA0"
          alt=""
          width={500}
          height={500}
        />
      </S.ImageContainer>

      <S.ProductDetails>
        <h1>Camiseta X</h1>

        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora
          ipsa corrupti impedit, dolores, ea eveniet eaque dolor, magni
          praesentium nam? Minima illum eos facilis voluptas officiis.
          Doloremque, odit libero.
        </p>

        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.Container>
  )
}

export default ProductDetails
