import React, { useState } from "react";
import { ScrollView, Keyboard, TouchableOpacity, KeyboardAvoidingView, Text, View, TextInput } from 'react-native';

import styles from './src/styles/appStyles';
import Task from './src/components/Task'

export default function App() {

  // FUNCTIONAL COMPONENT
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]); //take all the elements of the array, and add the current value of the task
    setTask(null);
  }

  const completeTask = (index) => {
    // create a var with ...taskItems
    let itemsCopy = [...taskItems];
    // remove the task
    itemsCopy.splice(index, 1);
    // send back the list updated
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/* Today's tasks container */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>


        <ScrollView style={styles.items}>
          {/* this is where tasks will go */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={"write a task"}
          onChangeText={ text => setTask(text)}
          value={task}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
