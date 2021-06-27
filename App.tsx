/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import useTodoList from './src/todo-hooks';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [
    {inputValue, todoList},
    {setInputValue, createTodoItem, completeTodoItem, removeTodoItem},
  ] = useTodoList();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            ...styles.todoContainer,
          }}>
          <View style={styles.todoInputContainer}>
            <TextInput
              style={styles.todoInput}
              value={inputValue}
              onChangeText={e => setInputValue(e)}
              placeholder="输入待办事项"
            />

            <Button title="创建" onPress={() => createTodoItem()} />
          </View>

          <View>
            {todoList.map(item => {
              return (
                <View key={item.id} style={styles.todoItem}>
                  <View>
                    <Text
                      style={item.isComplete ? styles.completeTodoContent : {}}>
                      {item.content}
                    </Text>
                  </View>
                  {item.isComplete ? (
                    <Button
                      title="删除"
                      onPress={() => removeTodoItem(item.id)}
                    />
                  ) : (
                    <Button
                      title="完成"
                      onPress={() => completeTodoItem(item.id)}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    display: 'flex',
  },
  todoInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  todoInput: {
    // width: 250,
    flex: 1,
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completeTodoContent: {
    textDecorationLine: 'line-through',
  },
});

export default App;
