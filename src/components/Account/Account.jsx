import Preloader from '../Common/Preloader/Preloader';
import Account_style from './Account_style/Account.module.css'
import PostsContainer from './PostsContainer';
import AccountStatus from './AccountInfo/AccountStatus'

const Account = (props) => {

  

  if  (!props.account) {
    return <Preloader />
  } else return (
    <div className={Account_style.box}>
      <img src={props.account.photos.large} alt="" className={Account_style.header} />
      <div className={Account_style.user}>
        <img src={props.account.photos.small} alt="" className={Account_style.avatar} />
        <ul className={Account_style.info}>
          <li className={Account_style.name}>{props.account.fullName}</li>
          <li className={Account_style.item}>Date of Birth: 21 June</li>
          <li className={Account_style.item}>City: Sevastopol</li>
          <li className={Account_style.item}>Education: SevSU</li>
          <li className={Account_style.item}>Web Site: https//...</li>
          <li className={Account_style.item}>About me: {props.account.aboutMe}</li>
        </ul>
        <AccountStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
      <PostsContainer />
    </div>
  );
}
// https://yt3.ggpht.com/ytc/AKedOLQDpJL4j3zA9P_m9NpSA9NV8Fp2LoRg8Gdjy-OW=s900-c-k-c0x00ffffff-no-rj
export default Account;