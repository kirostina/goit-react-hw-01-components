import user from "data/user.json";
import transactions from "data/transactions.json";
import friends from "data/friends.json";
import data from "data/data.json";

import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        gap:50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions } />
    </div>
  );
};
