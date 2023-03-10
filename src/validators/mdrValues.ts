import * as yup from 'yup';

export const schema = yup.object({
  amount: yup
    .string()
    .min(8, 'Informe um valor maior ou igual a R$ 10,00')
    .max(15, 'Informe um valor menor ou igual a R$ 1,000,000.00')
    .required('O campo valor é obrigatório'),
  installments: yup
    .number()
    .typeError('Informe um número')
    .min(1, 'Minímo de 1 parcela')
    .max(12, 'Máximo de 12 parcelas')
    .required('O campo parcelas é obrigatório'),
  mdr: yup
    .number()
    .typeError('Informe um número')
    .min(0, 'O percentual MDR não pode ser negativo')
    .required('O campo percentual é obrigatório'),
});