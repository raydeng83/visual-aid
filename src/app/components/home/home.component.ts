import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';

export const keyArr = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
// const chordTypeArr = ['Major7', 'Minor7', 'Dominant7', 'Half-diminished']
export const chordTypeArr = ['Δ', '-7', '7', 'Φ'];
export const chordToneNumberArr = ['3rd', '5th', '7th', '9th', '11th', '13th'];
export const majorFragmentPatternsArr = ['123', '321', '345', '543', '567', '765', '712', '217', '23#4', '#432', '#456', '65#4', '3#4#5', '#5#43', '#567', '76#5', '5#56', '6b65']; // 18 items
export const minorFragmentPatternsArr = ['123', '321', '345', '543', '567', '765', '712', '217', '23#4', '#432', '#456', '65#4', '1b9#9', '#9b91', 'b9#93', '3#9b9', '3#4#5', '#5#43', '#567', '76#5', 'b917', '71b9', '7b65']; // 23 items
export const dominantFragmentPatternsArr = ['123', '321', '345', '543', '567', '765', '712', '217', '234', '432', '456', '654', '56M7', 'M765', 'M712', '21M7', '5b67', '7b65']; // 18 items
export const halfDiminishedFragmentPatternsArr = ['123', '321', '345', '543', '567', '765', '71N2', 'N217', 'N234', '43N2', '456', '654']; // 12 items


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public majorFragmentPatternsArr = majorFragmentPatternsArr;
  public minorFragmentPatternsArr = minorFragmentPatternsArr;
  public dominantFragmentPatternsArr = dominantFragmentPatternsArr;
  public halfDiminishedFragmentPatternsArr = halfDiminishedFragmentPatternsArr;


  public keys = [true, true, true, true, true, true, true, true, true, true, true, true];
  public chordTypes = [true, true, true, true];
  public chordToneNumber = [true, true, true, true, true, true];
  public majorFragmentPatterns = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  public minorFragmentPatterns = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  public dominantFragmentPatterns = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  public halfDiminishedFragmentPatterns = [true, true, true, true, true, true, true, true, true, true, true, true];

  public currentKeys = [];
  public currentChordTypes = [];
  public currentChordTones = [];
  public currentMajorFragmentPatterns = [];
  public currentMinorFragmentPatterns = [];
  public currentDominantFragmentPatterns = [];
  public currentHalfDiminishedFragmentPatterns = [];

  public currentKey;
  public currentChordType;
  public currentChordTone;
  public currentFragmentPattern;

  public counter = 0;
  public timerRef;
  public running = false;
  public startText = 'Start';
  public record = 0;
  public displayCounter = false;
  public displayRecord = false;
  public showCounter = false;
  public chordToneNumberEnabled = true;
  public fragmentPatternEnabled = true;

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
    this.currentMajorFragmentPatterns = [];
    this.currentMinorFragmentPatterns = [];
    this.currentDominantFragmentPatterns = [];
    this.currentHalfDiminishedFragmentPatterns = [];

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

    for (let i = 0; i < this.majorFragmentPatterns.length; i++) {
      if (this.majorFragmentPatterns[i]) {
        this.currentMajorFragmentPatterns.push(majorFragmentPatternsArr[i]);
        console.log(this.currentMajorFragmentPatterns);
      }
    }

    for (let i = 0; i < this.minorFragmentPatterns.length; i++) {
      if (this.minorFragmentPatterns[i]) {
        this.currentMinorFragmentPatterns.push(minorFragmentPatternsArr[i]);
      }
    }

    for (let i = 0; i < this.dominantFragmentPatterns.length; i++) {
      if (this.dominantFragmentPatterns[i]) {
        this.currentDominantFragmentPatterns.push(dominantFragmentPatternsArr[i]);
      }
    }

    for (let i = 0; i < this.halfDiminishedFragmentPatterns.length; i++) {
      if (this.halfDiminishedFragmentPatterns[i]) {
        this.currentHalfDiminishedFragmentPatterns.push(halfDiminishedFragmentPatternsArr[i]);
      }
    }

    // alert('Configuration has reset');
    this.toasterService.pop('info', 'Configuration has reset!');
  }

  onNewValue() {
    this.currentKey = this.currentKeys[Math.floor(Math.random() * this.currentKeys.length)];
    const chordTypeIndex = Math.floor(Math.random() * this.currentChordTypes.length);
    this.currentChordType = this.currentChordTypes[chordTypeIndex];
    this.currentChordTone = this.currentChordTones[Math.floor(Math.random() * this.currentChordTones.length)];
    
    switch (chordTypeIndex) {
      case 0: this.currentFragmentPattern = this.currentMajorFragmentPatterns[Math.floor(Math.random() * this.currentMajorFragmentPatterns.length)]; break;
      case 1: this.currentFragmentPattern = this.currentMinorFragmentPatterns[Math.floor(Math.random() * this.currentMinorFragmentPatterns.length)]; break;
      case 2: this.currentFragmentPattern = this.currentDominantFragmentPatterns[Math.floor(Math.random() * this.currentDominantFragmentPatterns.length)]; break;
      case 3: this.currentFragmentPattern = this.currentHalfDiminishedFragmentPatterns[Math.floor(Math.random() * this.currentHalfDiminishedFragmentPatterns.length)]; break;
      default:
        this.currentFragmentPattern = this.currentMajorFragmentPatterns[Math.floor(Math.random() * this.currentMajorFragmentPatterns.length)];
    }

    console.log(this.currentFragmentPattern);
    
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

    for (let i = 0; i < this.majorFragmentPatterns.length; i++) {
      if (this.majorFragmentPatterns[i]) {
        this.currentMajorFragmentPatterns.push(majorFragmentPatternsArr[i]);
        console.log(this.currentMajorFragmentPatterns);
      }
    }

    for (let i = 0; i < this.minorFragmentPatterns.length; i++) {
      if (this.minorFragmentPatterns[i]) {
        this.currentMinorFragmentPatterns.push(minorFragmentPatternsArr[i]);
      }
    }

    for (let i = 0; i < this.dominantFragmentPatterns.length; i++) {
      if (this.dominantFragmentPatterns[i]) {
        this.currentDominantFragmentPatterns.push(dominantFragmentPatternsArr[i]);
      }
    }

    for (let i = 0; i < this.halfDiminishedFragmentPatterns.length; i++) {
      if (this.halfDiminishedFragmentPatterns[i]) {
        this.currentHalfDiminishedFragmentPatterns.push(halfDiminishedFragmentPatternsArr[i]);
      }
    }
  }

}
