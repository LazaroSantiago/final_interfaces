import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
  likes: number;
}

@Component({
  selector: 'app-comment-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss'
})
export class CommentSectionComponent {
  @Input() comments: Comment[] = [];
  @Output() commentAdded = new EventEmitter<string>();

  newComment: string = '';

  addComment(): void {
    if (this.newComment.trim()) {
      this.commentAdded.emit(this.newComment.trim());
      this.newComment = '';
    }
  }

  clearComment(): void {
    this.newComment = '';
  }
}