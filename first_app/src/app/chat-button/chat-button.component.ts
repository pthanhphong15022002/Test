import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-button.component.html',
  styleUrl: './chat-button.component.css'
})
export class ChatButtonComponent implements OnInit {
  isChatOpen: boolean = false;
  newMessage: string = '';
  chatMessages: string[] = []; //Mảng lưu trữ các tin nhắn

  constructor() {}

  ngOnInit(): void {
    
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  closeChat() {
    this.isChatOpen = false;
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatMessages.push(this.newMessage); // Thêm tin nhắn mới vào mảng
      this.newMessage = ''; // Xóa nội dung input sau khi gửi
    }
  }
}
