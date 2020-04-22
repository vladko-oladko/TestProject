import moment from 'moment';
import shortid from 'shortid';

export const getTodoItems = () => [
  {
    id: shortid(),
    title: 'Test 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    due: moment().format(),
    priority: 3,
  },
  {
    id: shortid(),
    title: 'Test 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    due: moment().format(),
    priority: 4,
  },
  {
    id: shortid(),
    title: 'Test 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    due: moment().format(),
    priority: 5,
  },
  {
    id: shortid(),
    title: 'Test 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    due: moment().format(),
    priority: 4,
  },
  {
    id: shortid(),
    title: 'Test 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    due: moment().format(),
    priority: 4,
  },
];
