import React from 'react';
import {string, instanceOf, number, shape} from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import moment from 'moment';

const TodoItem = ({data}) => {
  const {title, description, due, priority} = data;

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <Text style={styles.title}>{title}</Text>
        <Text>{due && moment(due).format('DD.MM.YYYY')}</Text>
      </View>
      <View style={[styles.row, styles.description]}>
        <Text>{description}</Text>
      </View>
      <View style={[styles.row, styles.priority]}>
        <Text>Priority {priority} / 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 5,
    justifyContent: 'flex-start',
  },
  priority: {
    justifyContent: 'flex-end',
  },
});

TodoItem.propTypes = {
  data: shape({
    title: string,
    description: string,
    due: instanceOf(Date),
    priority: number,
  }),
};

export default TodoItem;
