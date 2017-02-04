import passport from 'passport';

import {User} from '../db';
import {hash, asyncRequest} from '../util';

export default (app) => {
  app.post('/api/user/profile/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    const {name, surname, age, email, country, weight, height} = req.body;
    const {weekRunKm, finalWeight, activeTimeDay, weekExercises} = req.body;
    const user = await User.get(req.params.id);
    if (req.user.id !== req.params.id) {
      res.status(403).send({error: 'Not enough rights to change other user profile!'});
      return;
    }

    if (!user.objectives) {
      user.objectives = {};
    }
    // Update objectives data
    if (weekRunKm) {
      user.objectives.weekRunKm = weekRunKm;
    }
    if (finalWeight) {
      user.objectives.finalWeight = finalWeight;
    }
    if (activeTimeDay) {
      user.objectives.activeTimeDay = activeTimeDay;
    }
    if (weekExercises) {
      user.objectives.weekExercises = weekExercises;
    }

    // update profile data
    if (name) {
      user.name = name;
    }
    if (surname) {
      user.surname = surname;
    }
    if (age) {
      user.age = age;
    }
    if (email) {
      user.email = email;
    }
    if (country) {
      user.country = country;
    }
    if (weight) {
      user.weight = weight;
    }
    if (height) {
      user.height = height;
    }

    // send succcess
    try {
      await user.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }
    res.send(user);
  }));
};
