import css from "./FriendListItem.module.css"

export const FriendListItem = ({ name, avatar, isOnline, id })=> {
    const classStatus = isOnline ? css.statusOnline: css.statusOff;

    return <li className={css.item} key= {id}>
    <span className={`${css.status} ${classStatus}`}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
}