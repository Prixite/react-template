import { Profile } from './Profile'
import { UserList } from './UserList'
import { CountryList } from './CountryList'

export default function App () {
  if (window.location.href.indexOf('/profile') >= 0) {
    return <Profile />
  } else if (window.location.href.indexOf('/users') >= 0) {
    return <UserList />
  } else if (window.location.href.indexOf('/countries') >= 0) {
    return <CountryList />
  } else {
    return (
      <ul>
        <h1>React Template</h1>
        <li><a href='/profile'>Profile</a></li>
        <li><a href='/users'>Users</a></li>
        <li><a href='/countries'>Countries</a></li>
      </ul>
    )
  }
}
