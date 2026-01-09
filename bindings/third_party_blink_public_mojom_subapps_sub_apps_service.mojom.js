// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/subapps/sub_apps_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SubAppsServiceResultCode
blink.mojom.SubAppsServiceResultCode = {
  kSuccess: 0,
  kFailure: 1,
};

// Interface: SubAppsService
blink.mojom.SubAppsService = {};

blink.mojom.SubAppsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SubAppsServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SubAppsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SubAppsServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SubAppsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SubAppsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  add(sub_apps_to_add) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SubAppsService_Add_ParamsSpec.$,
      blink.mojom.SubAppsService_Add_ResponseParamsSpec.$,
      [sub_apps_to_add]);
  }

  list() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SubAppsService_List_ParamsSpec.$,
      blink.mojom.SubAppsService_List_ResponseParamsSpec.$,
      []);
  }

  remove(manifest_id_paths) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SubAppsService_Remove_ParamsSpec.$,
      blink.mojom.SubAppsService_Remove_ResponseParamsSpec.$,
      [manifest_id_paths]);
  }

};

blink.mojom.SubAppsService.getRemote = function() {
  let remote = new blink.mojom.SubAppsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SubAppsService',
    'context');
  return remote.$;
};

// ParamsSpec for Add
blink.mojom.SubAppsService_Add_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.Add_Params',
      packedSize: 16,
      fields: [
        { name: 'sub_apps_to_add', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SubAppsService_Add_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.Add_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for List
blink.mojom.SubAppsService_List_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.List_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SubAppsService_List_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.List_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Remove
blink.mojom.SubAppsService_Remove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.Remove_Params',
      packedSize: 16,
      fields: [
        { name: 'manifest_id_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SubAppsService_Remove_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.Remove_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SubAppsServicePtr = blink.mojom.SubAppsServiceRemote;
blink.mojom.SubAppsServiceRequest = blink.mojom.SubAppsServicePendingReceiver;

