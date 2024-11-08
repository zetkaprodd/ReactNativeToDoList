import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Button } from 'react-native';

interface CustomTextInputProps {
    newTask: string;
    setNewTask: (task: string) => void;
    addTask: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ newTask, setNewTask, addTask }) => {

    const styles = StyleSheet.create({
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 8,
            marginBottom: 10,
        },
        container: {
            padding: 20,
        },
        task: {
            fontSize: 18,
            marginVertical: 5,
        },
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setNewTask}
                value={newTask}
                placeholder="Ajouter une nouvelle tâche"
            />
            <Button title='Ajouter à la liste des tâches' onPress={addTask} />
        </View>
    );
}

function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    const styles = StyleSheet.create({
        task: {
            fontSize: 18,
            marginVertical: 5,
        },
    });

    return (
        <View>
            <CustomTextInput
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
            />
            {tasks.map((task, index) => (
                <Text key={index} style={styles.task}>{task}</Text>
            ))}
        </View>
    );
}

export default App;
