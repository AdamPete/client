import React, { useState, useEffect } from 'react';
import { getChannel, useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState('');

  const onSearch = (e) => {
    e.preventDefault();

    const getChannels = async () => {
      try {
        // TODO: fetch channels
      } catch (error) {
        setQuery('');
      }
    };

    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  };

  return (
    <div className='channel-search__container'>
      <div className='channel-search__input__wrapper'>
        <div className='channel-search__input__icon'>
          <SearchIcon />
        </div>
        <input
          className='channel-search__input__text'
          placeholder='Search'
          type='text'
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
