import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class UserRegistrationComponent extends Component {
  @service
  localStorage;

  @tracked
  userInfo = this.localStorage.getItem('USER_INFO');

  @action
  handleRegistration(event) {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;

    this.localStorage.setItem('USER_INFO', {
      name,
      email,
      userId: this.args.userId,
      hasSubmittedOnce: false,
    });

    this.userInfo = this.localStorage.getItem('USER_INFO');
  }
}
