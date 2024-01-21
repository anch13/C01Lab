import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
const { v4: uuidv4 } = require('uuid');
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
  const [toDos, setToDos] = useState(initialValues.map(
    (task) => ({ id: uuidv4(), title: task })
  ));

  const addToDo = (newTitle) => {
    console.log(newTitle)
    const newTodo = { id: uuidv4(), title: newTitle };
    setToDos((prevToDos) => [...prevToDos, newTodo]);
  };

  const removeToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id)
    );
  };

  return (
    <View styles={styles.todoListContainer}>
      {toDos.map((toDo) => (
        <View key={toDo.id} styles={styles.todoItem}>
          <Text>
            {toDo.title}
          </Text>
          <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
        </View>

      ))
      }
      <AddTask onAddTask={addToDo} />
    </View >

  );

}

ToDoList.defaultProps = {
  initialValues: [],
}

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList