import { useKeenSlider } from 'keen-slider/react'
import type { NextPage } from 'next'
import Image from 'next/future/image'
import Link from 'next/link'

import tShirt1 from '../assets/t-shirts/1.png'
import tShirt2 from '../assets/t-shirts/2.png'
import tShirt3 from '../assets/t-shirts/3.png'
import * as S from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

const Home: NextPage = () => {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  })

  return (
    <S.Container ref={sliderRef} className="keen-slider">
      <Link href="/product/1" passHref>
        <S.Product className="keen-slider__slide">
          <Image src={tShirt1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </S.Product>
      </Link>

      <Link href="/product/2" passHref>
        <S.Product className="keen-slider__slide">
          <Image src={tShirt2} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </S.Product>
      </Link>

      <Link href="/product/3" passHref>
        <S.Product className="keen-slider__slide">
          <Image src={tShirt3} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </S.Product>
      </Link>
    </S.Container>
  )
}

export default Home
