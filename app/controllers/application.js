import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ApplicationController extends Controller {
  index = -1;
  @tracked _myValue = '';
  @tracked todo = ['firstTodo'];
  @tracked isEdit = false;
  @tracked isComplete = -1;
  @action
  myValue(event) {
    event.preventDefault();
    this._myValue = event.target.value;
  }
  @action
  handleEdit(index) {
    this.index = index;
    this._myValue = this.todo[index];
    this.isEdit = true;
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

  @action
  handleUpdate(){
    if (this._myValue.length > 0 && this.index >= 0) {
      let filtered = [...this.todo]
      filtered[this.index] = this._myValue;
      this.todo = [...filtered];
      this.isEdit = false;
      this._myValue = "";
    }
  }

  @action
  handleCheck(index, event) {
    if(event.target.checked) {
      this.isComplete = index
    }else{
      this.isComplete = -1;
    }

  }
}
