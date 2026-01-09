// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/skyvault/local_files_migration.mojom
// Module: policy.local_user_files.mojom

'use strict';

// Module namespace
var policy = policy || {};
policy.local_user_files = policy.local_user_files || {};
policy.local_user_files.mojom = policy.local_user_files.mojom || {};


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

// Interface: PageHandlerFactory
policy.local_user_files.mojom.PageHandlerFactory = {};

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
      policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
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

// ParamsSpec for CreatePageHandler
policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
policy.local_user_files.mojom.PageHandlerFactoryPtr = policy.local_user_files.mojom.PageHandlerFactoryRemote;
policy.local_user_files.mojom.PageHandlerFactoryRequest = policy.local_user_files.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
policy.local_user_files.mojom.PageHandler = {};

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
      policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec.$,
      policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec.$,
      []);
  }

  uploadOrDeleteNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec.$,
      null,
      []);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      policy.local_user_files.mojom.PageHandler_Close_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for GetInitialDialogInfo
policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.GetInitialDialogInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.GetInitialDialogInfo_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'cloud_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'remaining_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'start_date_and_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UploadOrDeleteNow
policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.UploadOrDeleteNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Close
policy.local_user_files.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
policy.local_user_files.mojom.PageHandlerPtr = policy.local_user_files.mojom.PageHandlerRemote;
policy.local_user_files.mojom.PageHandlerRequest = policy.local_user_files.mojom.PageHandlerPendingReceiver;


// Interface: Page
policy.local_user_files.mojom.Page = {};

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
      policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec.$,
      null,
      [remaining_time]);
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

// ParamsSpec for UpdateRemainingTime
policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.Page.UpdateRemainingTime_Params',
      packedSize: 16,
      fields: [
        { name: 'remaining_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
policy.local_user_files.mojom.PagePtr = policy.local_user_files.mojom.PageRemote;
policy.local_user_files.mojom.PageRequest = policy.local_user_files.mojom.PagePendingReceiver;

