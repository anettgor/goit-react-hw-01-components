import Profile from './Profile/Profile';
import user from './../data/user.json';

import Statistics from './Statistics/Statistics';
import data from './../data/data.json';

import FriendList from './FriendList/FriendList';
import friends from './../data/friends.json';

import items from './../data/transactions.json';
import Transactions from './Transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        id={user.id}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={items} />
    </div>
  );
};
