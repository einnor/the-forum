import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  session: service(),
  email: null,
  password: null,
  signIn: true,

  actions: {
    toggleSignIn() {
      this.toggleProperty('signIn');
    },

    async authenticate() {
      let { email, password } = this;
      try {
        await this.session.authenticate('authenticator:devise', email, password);
      } catch(error) {
        this.errorMessage = error.error || error;
      }
    },
  },
});
