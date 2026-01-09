// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/supervised_user_commands.mojom
// Module: supervised_user.mojom

'use strict';

// Module namespace
var supervised_user = supervised_user || {};
supervised_user.mojom = supervised_user.mojom || {};


// Interface: SupervisedUserCommands
supervised_user.mojom.SupervisedUserCommandsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

supervised_user.mojom.SupervisedUserCommandsRemote = class {
  static get $interfaceName() {
    return 'supervised_user.mojom.SupervisedUserCommands';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      supervised_user.mojom.SupervisedUserCommandsPendingReceiver,
      handle);
    this.$ = new supervised_user.mojom.SupervisedUserCommandsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

supervised_user.mojom.SupervisedUserCommandsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  goBack() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec.$,
      null,
      []);
  }

  requestUrlAccessRemote() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec.$,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec.$,
      []);
  }

  requestUrlAccessLocal() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec.$,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec.$,
      []);
  }

  learnMore() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec.$,
      null,
      []);
  }

};

supervised_user.mojom.SupervisedUserCommands.getRemote = function() {
  let remote = new supervised_user.mojom.SupervisedUserCommandsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'supervised_user.mojom.SupervisedUserCommands',
    'context');
  return remote.$;
}};

// ParamsSpec for GoBack
supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'supervised_user.mojom.SupervisedUserCommands.GoBack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestUrlAccessRemote
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec = {
  $: {
    structSpec: {
      name: 'supervised_user.mojom.SupervisedUserCommands.RequestUrlAccessRemote_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'supervised_user.mojom.SupervisedUserCommands.RequestUrlAccessRemote_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'request_issued', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestUrlAccessLocal
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'supervised_user.mojom.SupervisedUserCommands.RequestUrlAccessLocal_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'supervised_user.mojom.SupervisedUserCommands.RequestUrlAccessLocal_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'request_issued', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LearnMore
supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'supervised_user.mojom.SupervisedUserCommands.LearnMore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
supervised_user.mojom.SupervisedUserCommandsPtr = supervised_user.mojom.SupervisedUserCommandsRemote;
supervised_user.mojom.SupervisedUserCommandsRequest = supervised_user.mojom.SupervisedUserCommandsPendingReceiver;

