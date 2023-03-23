import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Input,
  InputError,
  PaymentContainer,
  PaymentForm,
  Title,
} from './styles'
import Head from 'next/head'
import { Footer } from '../../components/footer'
import { Button } from '../../@designSystem/Button'
import { useRouter } from 'next/router'

const paymentFormSchema = z.object({
  cardNumber: z
    .string()
    .min(11, { message: 'insira um número de cartão válido' }),
  cardholder: z.string().min(5, { message: 'insira um nome válido' }),
  cardExpirationDate: z.string().min(4, { message: 'insira uma data válida' }),
  cardSecurityCode: z
    .string()
    .min(3, { message: 'insira um cvv válido' })
    .max(3, { message: 'insira um cvv válido' }),
})

type PaymentFormData = z.infer<typeof paymentFormSchema>

export default function Payment() {
  const {
    register,
    watch,
    setValue,

    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    mode: 'onBlur',
    delayError: 200,
  })

  const router = useRouter()

  function handleCheckout(data: PaymentFormData) {
    router.push('/success')
  }
  const formatCreditCardNumber = (value: String | undefined) => {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
  }
  const cardNumber = watch('cardNumber')

  return (
    <>
      <Head>
        <title>Pagamento - Beleza na Web</title>
      </Head>
      <PaymentContainer>
        <PaymentForm id="payment" onSubmit={handleSubmit(handleCheckout)}>
          <Title>Cartão de crédito</Title>
          <label>
            Número
            <Input
              type="text"
              placeholder="0000 0000 0000 0000"
              {...register('cardNumber')}
              hasError={!!errors.cardNumber}
              onBlur={() =>
                setValue('cardNumber', formatCreditCardNumber(cardNumber))
              }
            />
            {errors.cardNumber && (
              <InputError>{errors.cardNumber.message}</InputError>
            )}
          </label>
          <label>
            Nome do titular do cartão
            <Input
              type="text"
              placeholder="Nome impresso no cartão"
              {...register('cardholder')}
              hasError={!!errors.cardholder}
            />
            {errors.cardholder && (
              <InputError>{errors.cardholder.message}</InputError>
            )}
          </label>
          <label>
            Data de validade
            <Input
              type="text"
              placeholder="MM/AA"
              {...register('cardExpirationDate')}
              hasError={!!errors.cardExpirationDate}
            />
            {errors.cardExpirationDate && (
              <InputError>{errors.cardExpirationDate.message}</InputError>
            )}
          </label>
          <label>
            Código CVV
            <Input
              type="text"
              placeholder="000"
              {...register('cardSecurityCode')}
              hasError={!!errors.cardSecurityCode}
            />
            {errors.cardSecurityCode && (
              <InputError>{errors.cardSecurityCode.message}</InputError>
            )}
          </label>
        </PaymentForm>
      </PaymentContainer>
      <Footer>
        <Button w-full type="submit" form="payment">
          Finalizar pedido
        </Button>
      </Footer>
    </>
  )
}
