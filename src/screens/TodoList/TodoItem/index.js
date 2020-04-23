import React from 'react';
import {string, number, shape} from 'prop-types';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

const TodoItem = ({data, onPressEdit}) => {
  const {title, description, due, priority} = data;

  const handlePressEdit = () => {
    onPressEdit(data);
  };

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
        <TouchableOpacity onPress={handlePressEdit}>
          <Text style={styles.link}>Edit</Text>
        </TouchableOpacity>
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
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  link: {
    color: '#0366d6',
  },
});

TodoItem.propTypes = {
  data: shape({
    title: string,
    description: string,
    due: string,
    priority: number,
  }),
};

export default TodoItem;
