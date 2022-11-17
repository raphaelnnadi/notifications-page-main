'use strict';

const unreadMessages = document.querySelectorAll('.unread');
const markAll = document.querySelector('.mark');
const counter = document.querySelector('.counter');

counter.innerText = unreadMessages.length;

unreadMessages.forEach(message => {
  message.addEventListener('click', function () {
    message.classList.remove('unread');
    const newUnreadMessages = document.querySelectorAll('.unread');
    counter.innerText = newUnreadMessages.length;
  });
});

markAll.addEventListener('click', function () {
  unreadMessages.forEach(message => message.classList.remove('unread'));
  const newUnreadMessages = document.querySelectorAll('.unread');
  counter.innerText = newUnreadMessages.length;
});
