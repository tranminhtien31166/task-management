import { Component, OnInit, Input } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { MatDialog } from '@angular/material/dialog';
import { ModelTaskCategory } from "@app/models";
import { TaskDetailComponent } from "../../task-detail/task-detail.component";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationService, CardsService, UsersService } from '@app/services';
import { ModelCard, ModelUser } from '@app/models';
import { State } from '@app/store/models/state.model';
import { CardAction } from '@app/store/actions/card.actions';
import * as moment from "moment";

@Component({
  selector: "app-task-column",
  templateUrl: "./task-column.component.html",
  styleUrls: ["./task-column.component.css"],
})
export class TaskColumnComponent implements OnInit {
  @Input() category: ModelTaskCategory;
  public dialogRef: any;
  public currentUser: ModelUser;
  public users: Array<ModelUser>;
  public cards: Array<ModelCard>
  constructor(
    private _authenticationService: AuthenticationService,
    private _cardsService: CardsService,
    private _usersService: UsersService,
    private store: Store<State>,
    public dialog: MatDialog
  ) {
    this._cardsService.cardObserver$.subscribe(data => this.cards = data);
    this._authenticationService.currentUser.subscribe(data => this.currentUser = data);
    this._usersService.userList.subscribe(data => this.users = data);
  }

  ngOnInit(): void {
  }

  public async drop(event: CdkDragDrop<string[]>, category: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let cardHandle = JSON.parse(JSON.stringify(event.container.data[event.currentIndex]));
      cardHandle.category = category;
      this.store.dispatch(new CardAction(cardHandle, "UPDATE_CARD_BY_ID"));
    }
  }
  public openModalCardDetail(data) {
    this.dialogRef = this.dialog.open(TaskDetailComponent, {
      width: '70vw',
      data: data
    });
    this.dialogRef.afterClosed().subscribe((result) => { });
  }
  public renderFieldTime(card) {
    if (card.deadline) {
      return moment(card.deadline).format('DD/MMM')
    }
  }
  public openFormAdd(el) {
    let parent = el.currentTarget.parentNode;
    parent.querySelector('.form-add').classList.remove('hidden');
    parent.querySelector('.btn-add').classList.add('hidden');
  }
  public closeFormAdd(el) {
    let parent = el.currentTarget.parentNode.parentNode.parentNode;
    parent.querySelector('.form-add').classList.add('hidden');
    parent.querySelector('.btn-add').classList.remove('hidden');
  }
  public renderFieldMembers() {

  }
  public addForm(el) {
    let parent = el.currentTarget.parentNode.parentNode.parentNode;
    let value = parent.querySelector('.input').value;
    if (value) {
      this.store.dispatch(new CardAction(
        {
          id: moment().unix(),
          name: value,
          description: "",
          priority: false,
          assign: [this.currentUser.id],
          checklist: [],
          deadline: '',
          comment: [],
          category: this.category.id,
        },
        "ADD_ITEM"));

      parent.querySelector('.input').value = "";
      this.closeFormAdd(el);
    }

  }
  public renderLinkAvatar(member) {
    let result = this.users.find((user) => { return member == user.id });
    return result.avatar
  }
}
