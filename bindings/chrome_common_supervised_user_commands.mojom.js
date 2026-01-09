// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/supervised_user_commands.mojom
// Module: supervised_user.mojom

'use strict';

// Module namespace
var supervised_user = supervised_user || {};
supervised_user.mojom = supervised_user.mojom || {};


// Interface: SupervisedUserCommands
supervised_user.mojom.SupervisedUserCommandsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'supervised_user.mojom.SupervisedUserCommands';
  }

  goBack() {
    // Method: GoBack
    // Call: GoBack()
  }

  requestUrlAccessRemote() {
    // Method: RequestUrlAccessRemote
    return new Promise((resolve) => {
      // Call: RequestUrlAccessRemote()
      resolve({});
    });
  }

  requestUrlAccessLocal() {
    // Method: RequestUrlAccessLocal
    return new Promise((resolve) => {
      // Call: RequestUrlAccessLocal()
      resolve({});
    });
  }

  learnMore() {
    // Method: LearnMore
    // Call: LearnMore()
  }

};

supervised_user.mojom.SupervisedUserCommandsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
