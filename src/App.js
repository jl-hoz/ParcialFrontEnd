import React from 'react';
import './App.css';
import sw_data from './sw';
import Film from "./components/Film";
import FilmDetails from './components/FilmDetails';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: sw_data,
      showFilm: -1,
    };
    this.filmHandler = this.filmHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  filmHandler(film_id){
    this.setState({
      showFilm: film_id,
    });
  }

  closeHandler(){
    this.setState({
      showFilm: -1,
    });
  }
  
  render(){
    let showFilms = this.state.data.map(film => {
      return (
          <Film film={film} key={film.episode_id} handler={this.filmHandler}></Film>
      );
    });

    let aside;

    if(this.state.showFilm !== -1){
      let film = this.state.data[this.state.showFilm-1];
      aside = <FilmDetails film={film} key={film.episode_id} closeHandler={this.closeHandler}/>;
    }


    return (
      <div className="App">
        <div className="ListOfFilms">
            {showFilms}
        </div>
        <aside>
          {aside}
        </aside>
      </div>
    );
  }
}

export default App;
