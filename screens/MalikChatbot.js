import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const MalikChatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (userMessage.trim() === '') return;

    // Add user's message to the chat
    const newMessages = [...messages, { text: userMessage, sender: 'user' }];

    // Add a fake bot reply (placeholder for real AI integration)
    newMessages.push({ text: '📖 Imam Malik Bot is thinking... (Real AI reply will come soon)', sender: 'bot' });

    setMessages(newMessages);
    setUserMessage('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.sender === 'user' ? styles.userBubble : styles.botBubble
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          value={userMessage}
          onChangeText={setUserMessage}
          placeholder="Ask Imam Malik Bot..."
          style={styles.input}
          returnKeyType="send"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MalikChatbot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  messagesContainer: {
    padding: 10,
    flexGrow: 1,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#d1e7ff',
    alignSelf: 'flex-end',
  },
  botBubble: {
    backgroundColor: '#e2e2e2',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sendButton: {
    backgroundColor: '#4a90e2',
    marginLeft: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 45,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});