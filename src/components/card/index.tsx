import Image from 'next/image'
import { formatCurrencyToBrl } from '../../utils/formaterCurrency'
import { CardContainer, Price } from './styles'

export function Card() {
  return (
    <CardContainer>
      <Image
        src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
        alt="Imagem do produto: L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
        width={60}
        height={60}
      />
      <p>
        L&apos;Oréal Professionnel Expert Absolut Repair Cortex Lipidium -
        Máscara de Reconstrução 500g
      </p>
      <div>
        <Price hasDiscount>{formatCurrencyToBrl(225.9)}</Price>
        <Price>{formatCurrencyToBrl(225.9)}</Price>
      </div>
    </CardContainer>
  )
}
