import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/config';
import { ref, push, onValue } from 'firebase/database';

export const sendMessageThunk = createAsyncThunk(
  'firebase/sendMessage',
  async (message) => {
    const messagesRef = ref(db, 'messages');
    await push(messagesRef, { text: message });
  }
);

export const listenMessagesThunk = createAsyncThunk(
  'firebase/listenMessages',
  async () => {
    const messagesRef = ref(db, 'messages');
    return new Promise((resolve) => {
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        const formatted = data
          ? Object.keys(data).map((key) => ({
              id: key,
              text: data[key].text,
            }))
          : [];
        resolve(formatted);
      });
    });
  }
);
