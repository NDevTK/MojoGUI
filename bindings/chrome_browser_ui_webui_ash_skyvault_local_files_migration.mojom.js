// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/skyvault/local_files_migration.mojom
// Module: policy.local_user_files.mojom

'use strict';

// Module namespace
var policy = policy || {};
policy.local_user_files = policy.local_user_files || {};
policy.local_user_files.local_user_files.mojom = policy.local_user_files.local_user_files.mojom || {};


// Enum: CloudProvider
policy.local_user_files.local_user_files.mojom.mojom.CloudProvider = {
  kGoogleDrive: 0,
  kOneDrive: 1,
  kDelete: 2,
};
policy.local_user_files.local_user_files.mojom.mojom.CloudProviderSpec = { $: mojo.internal.Enum() };

// Enum: TimeUnit
policy.local_user_files.local_user_files.mojom.mojom.TimeUnit = {
  kMinutes: 0,
  kHours: 1,
};
policy.local_user_files.local_user_files.mojom.mojom.TimeUnitSpec = { $: mojo.internal.Enum() };

// Struct: TimeUnitAndValue
policy.local_user_files.local_user_files.mojom.mojom.TimeUnitAndValueSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.TimeUnitAndValue',
      packedSize: 16,
      fields: [
        { name: 'unit', packedOffset: 0, packedBitOffset: 0, type: policy.local_user_files.mojom.TimeUnitSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PageHandlerFactory
policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactory = {};

policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(policy.local_user_files.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(policy.local_user_files.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryPtr = policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryRemote;
policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryRequest = policy.local_user_files.local_user_files.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
policy.local_user_files.local_user_files.mojom.mojom.PageHandler = {};

policy.local_user_files.local_user_files.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.local_user_files.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.local_user_files.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new policy.local_user_files.local_user_files.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.local_user_files.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInitialDialogInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.local_user_files.mojom.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec,
      policy.local_user_files.local_user_files.mojom.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec,
      []);
  }

  uploadOrDeleteNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      policy.local_user_files.local_user_files.mojom.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec,
      null,
      []);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      policy.local_user_files.local_user_files.mojom.mojom.PageHandler_Close_ParamsSpec,
      null,
      []);
  }

};

policy.local_user_files.local_user_files.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new policy.local_user_files.local_user_files.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetInitialDialogInfo
policy.local_user_files.local_user_files.mojom.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.GetInitialDialogInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

policy.local_user_files.local_user_files.mojom.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.GetInitialDialogInfo_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'cloud_provider', packedOffset: 16, packedBitOffset: 0, type: policy.local_user_files.mojom.CloudProviderSpec, nullable: false, minVersion: 0 },
        { name: 'remaining_time', packedOffset: 0, packedBitOffset: 0, type: policy.local_user_files.mojom.TimeUnitAndValueSpec, nullable: false, minVersion: 0 },
        { name: 'start_date_and_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UploadOrDeleteNow
policy.local_user_files.local_user_files.mojom.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.UploadOrDeleteNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Close
policy.local_user_files.local_user_files.mojom.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.PageHandler.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
policy.local_user_files.local_user_files.mojom.mojom.PageHandlerPtr = policy.local_user_files.local_user_files.mojom.mojom.PageHandlerRemote;
policy.local_user_files.local_user_files.mojom.mojom.PageHandlerRequest = policy.local_user_files.local_user_files.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
policy.local_user_files.local_user_files.mojom.mojom.Page = {};

policy.local_user_files.local_user_files.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.local_user_files.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.local_user_files.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new policy.local_user_files.local_user_files.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.local_user_files.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateRemainingTime(remaining_time) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.local_user_files.mojom.mojom.Page_UpdateRemainingTime_ParamsSpec,
      null,
      [remaining_time]);
  }

};

policy.local_user_files.local_user_files.mojom.mojom.Page.getRemote = function() {
  let remote = new policy.local_user_files.local_user_files.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateRemainingTime
policy.local_user_files.local_user_files.mojom.mojom.Page_UpdateRemainingTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'policy.local_user_files.mojom.Page.UpdateRemainingTime_Params',
      packedSize: 16,
      fields: [
        { name: 'remaining_time', packedOffset: 0, packedBitOffset: 0, type: policy.local_user_files.mojom.TimeUnitAndValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
policy.local_user_files.local_user_files.mojom.mojom.PagePtr = policy.local_user_files.local_user_files.mojom.mojom.PageRemote;
policy.local_user_files.local_user_files.mojom.mojom.PageRequest = policy.local_user_files.local_user_files.mojom.mojom.PagePendingReceiver;

