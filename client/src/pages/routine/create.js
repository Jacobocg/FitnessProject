import React from 'react';
import {connect} from 'react-redux';
import {createRoutine, getExercises} from '../../store/actions';

import styles from './radio.css';

const mapStateToProps = state => ({
  userName: state.auth.user.login,
  exercises: state.routine.exercises,
});

const mapDispatchToProps = dispatch => ({
  onCreateRoutineClick: payload => dispatch(createRoutine(payload)),
  loadExercises: () => dispatch(getExercises()),
});

const Create = ({onCreateRoutineClick, loadExercises, userName, exercises}) => {
  let name;
  let level;
  let rest;
  let rounds;
  let restRounds;
  let routineExercises = [];
  // let time;

  const handleClick = (e) => {
    e.preventDefault();

    onCreateRoutineClick({
      user: userName,
      name: name.value,
      level,
      rest,
      rounds,
      restRounds,
      exercises: JSON.stringify(routineExercises),
    });
  };

  const handleClickExercise = (e) => {
    e.preventDefault();
    loadExercises();
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    routineExercises = [...routineExercises, {name: e.target.innerHTML, image: 'image' + e.target.innerHTML, time: 20}]
    console.log(routineExercises.map(ex => JSON.stringify(ex)));
  };

  const setLevel = (e) => {
    level = e.target.value;
  };

  const setRest = (e) => {
    rest = e.target.value;
  };

  const setRounds = (e) => {
    rounds = e.target.value;
  };

  const setRestRounds = (e) => {
    restRounds = e.target.value;
  };

  return (
    <div className="jumbotron animated fadeIn">
      <h2>Create routine</h2>
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="routine name"
            ref={(i) => { name = i; }}
          />
        </div>
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="inputLevel">Level</label>
            <div id="inputLevel" onChange={setLevel}>
              <label className={styles.radio} htmlFor="g11"><input type="radio" name="group1" value="1" id="g11" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                1
              </label>
              <label className={styles.radio} htmlFor="g12"><input type="radio" name="group1" value="2" id="g12" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                2
              </label>
              <label className={styles.radio} htmlFor="g13"><input type="radio" name="group1" value="3" id="g13" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                3
              </label>
              <label className={styles.radio} htmlFor="g14"><input type="radio" name="group1" value="4" id="g14" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                4
              </label>
              <label className={styles.radio} htmlFor="g15"><input type="radio" name="group1" value="5" id="g15" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                5
              </label>
            </div>
          </div>
        </div>
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="inputRest">Rest</label>
            <div id="inputRest" onChange={setRest}>
              <label className={styles.radio} htmlFor="g21"><input type="radio" name="group2" value="5" id="g21" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                5
              </label>
              <label className={styles.radio} htmlFor="g22"><input type="radio" name="group2" value="10" id="g22" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                10
              </label>
              <label className={styles.radio} htmlFor="g23"><input type="radio" name="group2" value="15" id="g23" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                15
              </label>
              <label className={styles.radio} htmlFor="g24"><input type="radio" name="group2" value="20" id="g24" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                20
              </label>
              <label className={styles.radio} htmlFor="g25"><input type="radio" name="group2" value="25" id="g25" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                25
              </label>
            </div>
          </div>
        </div>
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="inputRounds">Rounds</label>
            <div id="inputRounds" onChange={setRounds}>
              <label className={styles.radio} htmlFor="g31"><input type="radio" name="group3" value="1" id="g31" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                1
              </label>
              <label className={styles.radio} htmlFor="g32"><input type="radio" name="group3" value="2" id="g32" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                2
              </label>
              <label className={styles.radio} htmlFor="g33"><input type="radio" name="group3" value="3" id="g33" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                3
              </label>
              <label className={styles.radio} htmlFor="g34"><input type="radio" name="group3" value="4" id="g34" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                4
              </label>
              <label className={styles.radio} htmlFor="g35"><input type="radio" name="group3" value="5" id="g35" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                5
              </label>
            </div>
          </div>
        </div>
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="inputRestRounds">Rounds Rest</label>
            <div id="inputRestRounds" onChange={setRestRounds}>
              <label className={styles.radio} htmlFor="g41"><input type="radio" name="group4" value="30" id="g41" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                30
              </label>
              <label className={styles.radio} htmlFor="g42"><input type="radio" name="group4" value="60" id="g42" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                60
              </label>
              <label className={styles.radio} htmlFor="g43"><input type="radio" name="group4" value="90" id="g43" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                90
              </label>
              <label className={styles.radio} htmlFor="g44"><input type="radio" name="group4" value="120" id="g44" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                120
              </label>
              <label className={styles.radio} htmlFor="g45"><input type="radio" name="group4" value="150" id="g45" />
                <span className={styles.outer}><span className={styles.inner} /></span>
                150
              </label>
            </div>
          </div>
        </div>

        {routineExercises.map(e => <div className="card col-xs-6">ex: {e.name}, time: {e.time}</div>)}

        <button type="submit" className="btn btn-primary" onClick={handleClickExercise}>Show exercises</button>
        <div className="form-group row">

          {exercises.map(e =>
            <button className="btn col-xs-5" onClick={handleAddExercise}>
              {e.name}
            </button>)
          }
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);