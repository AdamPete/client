import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';

import './App.css';

const cookies = new Cookies();
const authToken = cookies.get('token');

const API_KEY = 't4sg4a68zcx6';

const client = StreamChat.getInstance(API_KEY);

if (authToken) {
  client.connectUser(
    {
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      id: cookies.get('userId'),
      phoneNumber: cookies.get('phoneNumber'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
    },
    authToken
  );
}

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
