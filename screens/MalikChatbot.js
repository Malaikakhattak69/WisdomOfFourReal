import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';

export default function MalikChatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '0',
      text: '🤖 Salaam! How can I assist you with Imam Malik’s teachings today?',
      sender: 'bot'
    }
  ]);

  const flatListRef = useRef(null);

  const handleSend = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    const userMessage = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    Keyboard.dismiss();

    try {
      const response = await fetch('http://172.0.3.153:5000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userText }),
      });

      const data = await response.json();

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: data?.text || '⚠ No response from the bot.',
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 2).toString(),
        text: '⚠ Could not connect to the server. Please ensure the backend is running.',
        sender: 'bot'
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

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContainer}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask about Muwatta, Ramadan, Fiqh..."
            placeholderTextColor="#aaa"
            onSubmitEditing={() => handleSend(input)}
            returnKeyType="send"
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
  container: { flex: 1, backgroundColor: '#F0F4F8' },
  inner: { flex: 1 },
  chatContainer: { padding: 16, paddingBottom: 10 },
  messageContainer: { flexDirection: 'row', marginVertical: 6 },
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
    backgroundColor: '#2563EB',
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
    lineHeight: 22,
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
    height: 42,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#2563EB',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 42,
  },
  sendText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});