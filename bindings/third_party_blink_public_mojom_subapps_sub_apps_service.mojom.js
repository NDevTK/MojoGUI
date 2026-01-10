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
blink.mojom.SubAppsServiceResultCodeSpec = { $: mojo.internal.Enum() };

// Struct: SubAppsServiceAddParameters
blink.mojom.SubAppsServiceAddParametersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsServiceAddParameters',
      packedSize: 24,
      fields: [
        { name: 'manifest_id_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'install_url_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SubAppsServiceAddResult
blink.mojom.SubAppsServiceAddResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsServiceAddResult',
      packedSize: 24,
      fields: [
        { name: 'manifest_id_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SubAppsServiceResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SubAppsServiceListResult
blink.mojom.SubAppsServiceListResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsServiceListResult',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SubAppsServiceResultCodeSpec, nullable: false, minVersion: 0 },
        { name: 'sub_apps_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SubAppsServiceListResultEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SubAppsServiceListResultEntry
blink.mojom.SubAppsServiceListResultEntrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsServiceListResultEntry',
      packedSize: 24,
      fields: [
        { name: 'manifest_id_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SubAppsServiceRemoveResult
blink.mojom.SubAppsServiceRemoveResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsServiceRemoveResult',
      packedSize: 24,
      fields: [
        { name: 'manifest_id_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SubAppsServiceResultCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
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
      blink.mojom.SubAppsService_Add_ParamsSpec,
      blink.mojom.SubAppsService_Add_ResponseParamsSpec,
      [sub_apps_to_add]);
  }

  list() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SubAppsService_List_ParamsSpec,
      blink.mojom.SubAppsService_List_ResponseParamsSpec,
      []);
  }

  remove(manifest_id_paths) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SubAppsService_Remove_ParamsSpec,
      blink.mojom.SubAppsService_Remove_ResponseParamsSpec,
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
        { name: 'sub_apps_to_add', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SubAppsServiceAddParametersSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SubAppsService_Add_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.Add_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SubAppsServiceAddResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.SubAppsService_List_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.List_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SubAppsServiceListResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'manifest_id_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SubAppsService_Remove_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SubAppsService.Remove_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SubAppsServiceRemoveResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.SubAppsServicePtr = blink.mojom.SubAppsServiceRemote;
blink.mojom.SubAppsServiceRequest = blink.mojom.SubAppsServicePendingReceiver;

