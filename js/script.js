// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 24, 2025
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1

function checkNumber() {
  // input
  const userNumber = parseInt(document.getElementById('user-number').value)

  // process
  if (userNumber === randomNumber) {
    //output
    document.getElementById('result').innerHTML =
      '<p>You guessed the right number!</p>'
  }

  // process
  if (userNumber !== randomNumber) {
    //output
    document.getElementById('result').innerHTML =
      '<p>You guessed the wrong number!' +
      '<br>The correct number was: ' + randomNumber + '</p>'
  }
}