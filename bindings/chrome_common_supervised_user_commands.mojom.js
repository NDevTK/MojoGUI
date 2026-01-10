// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/supervised_user_commands.mojom
// Module: supervised_user.mojom

'use strict';

// Module namespace
var supervised_user = supervised_user || {};
supervised_user.mojom = supervised_user.mojom || {};

supervised_user.mojom.SupervisedUserCommands = {};
supervised_user.mojom.SupervisedUserCommands.$interfaceName = 'supervised_user.mojom.SupervisedUserCommands';
supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec = { $: {} };
supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec = { $: {} };

// Interface: SupervisedUserCommands
mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_GoBack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParams', [
      mojo.internal.StructField('request_issued', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParams', [
      mojo.internal.StructField('request_issued', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_LearnMore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec, 'supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParams', [
    ],
    [[0, 8]]);

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
      supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec,
      null,
      [],
      false);
  }

  requestUrlAccessRemote() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec,
      [],
      false);
  }

  requestUrlAccessLocal() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec,
      [],
      false);
  }

  learnMore() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec,
      supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec,
      [],
      false);
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
};

supervised_user.mojom.SupervisedUserCommandsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = supervised_user.mojom.SupervisedUserCommands_GoBack_ParamsSpec.$.decode(message.payload);
          const result = this.impl.goBack();
          break;
        }
        case 1: {
          const params = supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestUrlAccessRemote();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessRemote_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestUrlAccessLocal();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, supervised_user.mojom.SupervisedUserCommands_RequestUrlAccessLocal_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = supervised_user.mojom.SupervisedUserCommands_LearnMore_ParamsSpec.$.decode(message.payload);
          const result = this.impl.learnMore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, supervised_user.mojom.SupervisedUserCommands_LearnMore_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

supervised_user.mojom.SupervisedUserCommandsReceiver = supervised_user.mojom.SupervisedUserCommandsReceiver;

supervised_user.mojom.SupervisedUserCommandsPtr = supervised_user.mojom.SupervisedUserCommandsRemote;
supervised_user.mojom.SupervisedUserCommandsRequest = supervised_user.mojom.SupervisedUserCommandsPendingReceiver;

