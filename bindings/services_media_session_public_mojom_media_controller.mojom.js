// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_controller.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Interface: MediaControllerManager
media_session.mojom.MediaControllerManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaControllerManager';
  }

  0(receiver, request_id) {
    // Method: 0
    // Call: 0(receiver, request_id)
  }

  1(receiver) {
    // Method: 1
    // Call: 1(receiver)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

};

media_session.mojom.MediaControllerManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaController
media_session.mojom.MediaControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaController';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  4(observer) {
    // Method: 4
    // Call: 4(observer)
  }

  5() {
    // Method: 5
    // Call: 5()
  }

  6() {
    // Method: 6
    // Call: 6()
  }

  7(seek_time) {
    // Method: 7
    // Call: 7(seek_time)
  }

  8(type, minimum_size_px, desired_size_px, observer) {
    // Method: 8
    // Call: 8(type, minimum_size_px, desired_size_px, observer)
  }

  9(seek_time) {
    // Method: 9
    // Call: 9(seek_time)
  }

  scrub(seek") {
    // Method: Scrub
    // Call: Scrub(seek")
  }

  10(seek_time) {
    // Method: 10
    // Call: 10(seek_time)
  }

  11() {
    // Method: 11
    // Call: 11()
  }

  12() {
    // Method: 12
    // Call: 12()
  }

  13(id) {
    // Method: 13
    // Call: 13(id)
  }

  14() {
    // Method: 14
    // Call: 14()
  }

  15() {
    // Method: 15
    // Call: 15()
  }

  16() {
    // Method: 16
    // Call: 16()
  }

  mediaSession(the) {
    // Method: MediaSession
    // Call: MediaSession(the)
  }

  17() {
    // Method: 17
    // Call: 17()
  }

  18(mute) {
    // Method: 18
    // Call: 18(mute)
  }

  19() {
    // Method: 19
    // Call: 19()
  }

  source(in) {
    // Method: source
    // Call: source(in)
  }

  20() {
    // Method: 20
    // Call: 20()
  }

  21() {
    // Method: 21
    // Call: 21()
  }

};

media_session.mojom.MediaControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaControllerObserver
media_session.mojom.MediaControllerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaControllerObserver';
  }

  0(info) {
    // Method: 0
    // Call: 0(info)
  }

  1(metadata) {
    // Method: 1
    // Call: 1(metadata)
  }

  2(action) {
    // Method: 2
    // Call: 2(action)
  }

  3(request_id) {
    // Method: 3
    // Call: 3(request_id)
  }

  state(rate) {
    // Method: state
    // Call: state(rate)
  }

  4(position) {
    // Method: 4
    // Call: 4(position)
  }

};

media_session.mojom.MediaControllerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaControllerImageObserver
media_session.mojom.MediaControllerImageObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_session.mojom.MediaControllerImageObserver';
  }

  0(type, bitmap) {
    // Method: 0
    // Call: 0(type, bitmap)
  }

  1(index, bitmap) {
    // Method: 1
    // Call: 1(index, bitmap)
  }

};

media_session.mojom.MediaControllerImageObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
