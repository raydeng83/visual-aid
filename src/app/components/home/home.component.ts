import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';

const keyArr = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
// const chordTypeArr = ['Major7', 'Minor7', 'Dominant7', 'Half-diminished']
const chordTypeArr = ['Δ', '-7', '7', 'Φ'];
const chordToneNumberArr = ['3rd', '5th', '7th', '9th', '11th', '13th'];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public keys = [true, true, true, true, true, true, true, true, true, true, true, true];
  public chordTypes = [true, true, true, true];
  public chordToneNumber = [true, true, true, true, true, true];

  public currentKeys = [];
  public currentChordTypes = [];
  public currentChordTones = [];

  public currentKey;
  public currentChordType;
  public currentChordTone;

  public counter = 0;
  public timerRef;
  public running = false;
  public startText = 'Start';
  public record = 0;
  public displayCounter = true;
  public displayRecord = true;
  public showCounter = true;

  constructor(private toasterService: ToasterService, private hotkeysService: HotkeysService) {
    this.hotkeysService.add(new Hotkey('space', (event: KeyboardEvent): boolean => {
      this.onNewValue();
      return false; // Prevent bubbling
    }));
  }

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

    // alert('Configuration has reset');
    this.toasterService.pop('info', 'Configuration has reset!');
  }

  onNewValue() {
    this.currentKey = this.currentKeys[Math.floor(Math.random() * this.currentKeys.length)];
    this.currentChordType = this.currentChordTypes[Math.floor(Math.random() * this.currentChordTypes.length)];
    this.currentChordTone = this.currentChordTones[Math.floor(Math.random() * this.currentChordTones.length)];
    this.clearTimer();
    this.startTimer();
  }

  startTimer() {
    if (this.showCounter) {
      this.displayCounter = true;
    }

    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        if (this.counter > 15000) {
          this.displayCounter = false;
        }
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.record = this.counter;
    this.running = false;
    this.startText = 'Start';
    this.counter = 0;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  ngOnInit() {
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
  }

}
