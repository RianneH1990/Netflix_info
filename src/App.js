import header from './image/Checkflix1_small.png'
import styles from './App.module.css';
import {
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './page/home/Home';
import FindMovie from './page/findmovie/FindMovie';
import ComingSoon from './page/comingSoon/ComingSoon';
import GoneSoon from './page/goneSoon/GoneSoon';
import Login from './page/Authentication/Login';
import SignUp from './page/Authentication/SignUp';
import Result from './component/Result/Result';
import CountryResult from "./component/CountryResult/CountryResult";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
    const history = useHistory();

  return (
      <AuthProvider>
    <div className={styles["App"]}>
      <Navbar />
      <header className={styles["App-header"]}>
          <img src={header} alt="checkflix"/>
      </header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/FindMovie" component={FindMovie} />
            <Route path="/ComingSoon" component={ComingSoon} />
            <Route path="/GoneSoon" component={GoneSoon} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Result/:title" component={Result} />
            <Route path="/CountryResult/:id" component={CountryResult} />
        </Switch>
    </div>
      </AuthProvider>
  );
}

export default App;
