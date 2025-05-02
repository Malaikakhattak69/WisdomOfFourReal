import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform
} from 'react-native';

export default function MalikChatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: '0', text: '🤖 Salaam! How can I assist you with Imam Malik’s teachings today?', sender: 'bot' }
  ]);

  const handleSend = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    // User message
    const userMessage = { id: Date.now().toString(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput(''); // Clear input field

    try {
      const response = await fetch('https://malkakhattak-imam-malik-chatbot.hf.space/run/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [userText] }), // Adjusted the body format according to Hugging Face API requirements
      });

      const data = await response.json();
      // Assuming response contains answers array
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: data?.data?.[0] || '⚠️ No response from the bot.',
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 2).toString(),
        text: '⚠️ Could not fetch a response. Please try again later.',
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userContainer : styles.botContainer
      ]}
    >
      <View style={[styles.messageBubble, item.sender === 'user' ? styles.userBubble : styles.botBubble]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContainer}
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type your question..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity onPress={() => handleSend(input)} style={styles.sendButton}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  inner: { flex: 1 },
  chatContainer: { padding: 16 },
  messageContainer: { flexDirection: 'row', marginVertical: 4 },
  userContainer: { justifyContent: 'flex-end' },
  botContainer: { justifyContent: 'flex-start' },
  messageBubble: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  userBubble: {
    backgroundColor: '#0D9488',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  botBubble: {
    backgroundColor: '#E5E7EB',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 15,
    color: '#111',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f1f1f1',
    color: '#000',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#0D9488',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 40,
  },
  sendText: { color: '#fff', fontWeight: 'bold' },
});
