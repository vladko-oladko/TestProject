import * as Yup from 'yup';

export const todoSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  due: Yup.string(),
  priority: Yup.number().min(0, 'Value should be from 0 to 5').max(5, 'Value should be from 0 to 5'),
});