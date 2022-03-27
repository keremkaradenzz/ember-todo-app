import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ApplicationController extends Controller {
  @tracked _myValue = '';
  @tracked todo = ['firstTodo'];
  @action
  myValue(event) {
    event.preventDefault();
    this._myValue = event.target.value;
  }

  @action 
  handleDelete(index) {
    let filtered = this.todo.filter((item, i) => i !== index);
    this.todo = [...filtered];
  }

  @action
  handleClick() {
    if (this._myValue.length > 0) {
      this.todo = [...this.todo, this._myValue];
    }
  }
}
