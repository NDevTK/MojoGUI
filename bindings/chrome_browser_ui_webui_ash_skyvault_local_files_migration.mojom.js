// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/skyvault/local_files_migration.mojom
// Module: policy.local_user_files.mojom

'use strict';

// Module namespace
var policy = policy || {};
policy.local_user_files = policy.local_user_files || {};
policy.local_user_files.mojom = policy.local_user_files.mojom || {};

policy.local_user_files.mojom.CloudProviderSpec = { $: mojo.internal.Enum() };
policy.local_user_files.mojom.TimeUnitSpec = { $: mojo.internal.Enum() };
policy.local_user_files.mojom.TimeUnitAndValueSpec = { $: {} };
policy.local_user_files.mojom.PageHandlerFactory = {};
policy.local_user_files.mojom.PageHandlerFactory.$interfaceName = 'policy.local_user_files.mojom.PageHandlerFactory';
policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler = {};
policy.local_user_files.mojom.PageHandler.$interfaceName = 'policy.local_user_files.mojom.PageHandler';
policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler_Close_ParamsSpec = { $: {} };
policy.local_user_files.mojom.Page = {};
policy.local_user_files.mojom.Page.$interfaceName = 'policy.local_user_files.mojom.Page';
policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec = { $: {} };

// Enum: CloudProvider
policy.local_user_files.mojom.CloudProvider = {
  kGoogleDrive: 0,
  kOneDrive: 1,
  kDelete: 2,
};

// Enum: TimeUnit
policy.local_user_files.mojom.TimeUnit = {
  kMinutes: 0,
  kHours: 1,
};

// Struct: TimeUnitAndValue
mojo.internal.Struct(
    policy.local_user_files.mojom.TimeUnitAndValueSpec, 'policy.local_user_files.mojom.TimeUnitAndValue', [
      mojo.internal.StructField('unit', 0, 0, policy.local_user_files.mojom.TimeUnitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(policy.local_user_files.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(policy.local_user_files.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

policy.local_user_files.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new policy.local_user_files.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

policy.local_user_files.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new policy.local_user_files.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

policy.local_user_files.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    }});
  }
};

policy.local_user_files.mojom.PageHandlerFactoryReceiver = policy.local_user_files.mojom.PageHandlerFactoryReceiver;

policy.local_user_files.mojom.PageHandlerFactoryPtr = policy.local_user_files.mojom.PageHandlerFactoryRemote;
policy.local_user_files.mojom.PageHandlerFactoryRequest = policy.local_user_files.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec, 'policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec, 'policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParams', [
      mojo.internal.StructField('cloud_provider', 0, 0, policy.local_user_files.mojom.CloudProviderSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remaining_time', 8, 0, policy.local_user_files.mojom.TimeUnitAndValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_date_and_time', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec, 'policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_Close_ParamsSpec, 'policy.local_user_files.mojom.PageHandler_Close_Params', [
    ],
    [[0, 8]]);

policy.local_user_files.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new policy.local_user_files.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInitialDialogInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec,
      policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec,
      [],
      false);
  }

  uploadOrDeleteNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec,
      null,
      [],
      false);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      policy.local_user_files.mojom.PageHandler_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

policy.local_user_files.mojom.PageHandler.getRemote = function() {
  let remote = new policy.local_user_files.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.PageHandler',
    'context');
  return remote.$;
};

policy.local_user_files.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getInitialDialogInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.uploadOrDeleteNow();
          break;
        }
        case 2: {
          const params = policy.local_user_files.mojom.PageHandler_Close_ParamsSpec.$.decode(message.payload);
          const result = this.impl.close();
          break;
        }
      }
    }});
  }
};

policy.local_user_files.mojom.PageHandlerReceiver = policy.local_user_files.mojom.PageHandlerReceiver;

policy.local_user_files.mojom.PageHandlerPtr = policy.local_user_files.mojom.PageHandlerRemote;
policy.local_user_files.mojom.PageHandlerRequest = policy.local_user_files.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec, 'policy.local_user_files.mojom.Page_UpdateRemainingTime_Params', [
      mojo.internal.StructField('remaining_time', 0, 0, policy.local_user_files.mojom.TimeUnitAndValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

policy.local_user_files.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.mojom.PagePendingReceiver,
      handle);
    this.$ = new policy.local_user_files.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateRemainingTime(remaining_time) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec,
      null,
      [remaining_time],
      false);
  }

};

policy.local_user_files.mojom.Page.getRemote = function() {
  let remote = new policy.local_user_files.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.Page',
    'context');
  return remote.$;
};

policy.local_user_files.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateRemainingTime(params.remaining_time);
          break;
        }
      }
    }});
  }
};

policy.local_user_files.mojom.PageReceiver = policy.local_user_files.mojom.PageReceiver;

policy.local_user_files.mojom.PagePtr = policy.local_user_files.mojom.PageRemote;
policy.local_user_files.mojom.PageRequest = policy.local_user_files.mojom.PagePendingReceiver;

