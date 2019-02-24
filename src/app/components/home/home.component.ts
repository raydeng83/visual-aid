import { Component, OnInit } from '@angular/core';

const keyArr = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
// const chordTypeArr = ['Major7', 'Minor7', 'Dominant7', 'Half-diminished']
const chordTypeArr = ['Δ', '-7', '7', 'Φ'];
const chordToneNumberArr = ['3rd', '5th', '7th', '9th', '11th', '13th'];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public keys = [true, true, true, true, true, true, true, true, true, true, true, true];
  public chordTypes = [true, true, true, true];
  public chordToneNumber = [true, true, true, true, true, true];

  public currentKeys = [];
  public currentChordTypes = [];
  public currentChordTones = [];

  public currentKey;
  public currentChordType;
  public currentChordTone;

  constructor() { }

  onStart() {
    this.currentKeys = [];
    this.currentChordTypes = [];
    this.currentChordTones = [];

    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i]) {
        this.currentKeys.push(keyArr[i]);
      }
    }

    for (let i = 0; i < this.chordTypes.length; i++) {
      if (this.chordTypes[i]) {
        this.currentChordTypes.push(chordTypeArr[i]);
      }
    }

    for (let i = 0; i < this.chordToneNumber.length; i++) {
      if (this.chordToneNumber[i]) {
        this.currentChordTones.push(chordToneNumberArr[i]);
      }
    }

    console.log(this.currentKeys);
    console.log(this.currentChordTypes);
    console.log(this.currentChordTones);

  }

  onNewValue() {
    this.currentKey = this.currentKeys[Math.floor(Math.random() * this.currentKeys.length)];
    this.currentChordType = this.currentChordTypes[Math.floor(Math.random() * this.currentChordTypes.length)];
    this.currentChordTone = this.currentChordTones[Math.floor(Math.random() * this.currentChordTones.length)];
  }

  ngOnInit() {
  }

}
