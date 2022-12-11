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
import { ModelCard, } from '@app/models';
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
  private cardObserver: Observable<Array<ModelCard>>;
  public cards: Array<ModelCard>
  constructor(
    private store: Store<State>,
    public dialog: MatDialog
  ) {
    this.cardObserver = this.store.select((store) => {
      return store.cards
    });
    this.cardObserver.subscribe(data => this.cards = data);
  }

  ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<string[]>) {
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
    }
  }
  public openModalCardDetail(data) {
    this.dialogRef = this.dialog.open(TaskDetailComponent, {
      width: '70vw',
      data: data
    });
    this.dialogRef.afterClosed().subscribe((result) => { });
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
  public addForm(el) {
    let parent = el.currentTarget.parentNode.parentNode.parentNode;
    let value = parent.querySelector('.input').value;
    if (value) {
      this.store.dispatch(new CardAction(
        {
          id: moment().unix(),
          name: value,
          description: "",
          label: [],
          assign: [],
          checklist: [],
          deadline: '',
          comment: [],
          category: this.category.id,
        },
        "ADD_ITEM"));
    }

  }
  public async viewForm(el) {
    console.log(this.cards);
  }
}
