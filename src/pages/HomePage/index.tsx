import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../../components/Container';
import {
  Form,
  ThemeErrorForm,
  ThemeInput,
  ThemeLabel,
} from '../../components/Form';
import { ShowResult } from '../../components/ShowResult';
import {
  CalculateMdrContext,
  ICalculateMdr,
} from '../../contexts/CalculateMdrContext';
import { ThemeText } from '../../styles/typography';
import { schema } from '../../validators/mdrValues';
import { StyledHomePage } from './styles';

export const HomePage = () => {
  const { calculateMdr, values } = useContext(CalculateMdrContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICalculateMdr>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <StyledHomePage>
        <div className='homeContent'>
          <Form onChange={handleSubmit(calculateMdr)}>
            <ThemeText className='' tag='h1' titleSize='title1' color='gray-1'>
              Simule sua Antecipação
            </ThemeText>

            <ThemeLabel htmlFor='amount'>Informe o valor da venda *</ThemeLabel>
            <ThemeInput
              type='text'
              id='amount'
              {...register('amount')}
              placeholder='R$ 1000,00'
              borderColor={errors.amount?.message ? 'error' : 'success'}
            />
            <ThemeErrorForm>{errors.amount?.message}</ThemeErrorForm>

            <ThemeLabel htmlFor='installments'>
              Em quantas parcelas *
            </ThemeLabel>
            <ThemeInput
              type='text'
              id='installments'
              {...register('installments')}
              placeholder='1'
              borderColor={errors.installments?.message ? 'error' : 'success'}
            />
            <ThemeErrorForm>{errors.installments?.message}</ThemeErrorForm>
            <ThemeLabel htmlFor='mdr'>Informe o percentual de MDR *</ThemeLabel>
            <ThemeInput
              type='text'
              id='mdr'
              {...register('mdr')}
              placeholder='1'
              borderColor={errors.mdr?.message ? 'error' : 'success'}
            />
            <ThemeErrorForm>{errors.mdr?.message}</ThemeErrorForm>
          </Form>

          <div className='resultMdrSection'>
            <div>
              <ThemeText
                className=''
                tag='h2'
                titleSize='title2'
                color='blue-1'
              >
                VOCÊ RECEBERÁ:
              </ThemeText>
              <ShowResult text='Amanhã: ' value={values[0]} />
              <ShowResult text='Em 15 dias: ' value={values[1]} />
              <ShowResult text='Em 30 dias: ' value={values[1]} />
              <ShowResult text='Em 90 dias: ' value={values[1]} />
            </div>
          </div>
        </div>
      </StyledHomePage>
    </Container>
  );
};
