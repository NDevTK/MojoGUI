// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_browser.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.cfm.mojom = chromeos.cfm.cfm.mojom || {};


// Struct: ExtensionData
chromeos.cfm.cfm.mojom.mojom.ExtensionDataSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ExtensionData',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'hashed_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ProcessMemoryInformation
chromeos.cfm.cfm.mojom.mojom.ProcessMemoryInformationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ProcessMemoryInformation',
      packedSize: 80,
      fields: [
        { name: 'pid', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'product_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'num_processes', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'process_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'num_open_fds', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'open_fds_soft_limit', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'renderer_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'titles', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'private_memory_footprint_kb', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'extension_info', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(chromeos.cfm.mojom.ExtensionDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: ProcessData
chromeos.cfm.cfm.mojom.mojom.ProcessDataSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.ProcessData',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'process_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'processes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(chromeos.cfm.mojom.ProcessMemoryInformationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: CfmBrowser
chromeos.cfm.cfm.mojom.mojom.CfmBrowser = {};

chromeos.cfm.cfm.mojom.mojom.CfmBrowserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmBrowserRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.CfmBrowser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.CfmBrowserPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.CfmBrowserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmBrowserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getVariationsData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetVariationsData_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetVariationsData_ResponseParamsSpec,
      []);
  }

  getMemoryDetails() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetMemoryDetails_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetMemoryDetails_ResponseParamsSpec,
      []);
  }

};

chromeos.cfm.cfm.mojom.mojom.CfmBrowser.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.CfmBrowserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.CfmBrowser',
    'context');
  return remote.$;
};

// ParamsSpec for GetVariationsData
chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetVariationsData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmBrowser.GetVariationsData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetVariationsData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmBrowser.GetVariationsData_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'field_trial_parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'field_trial_states', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled_features', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disabled_features', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for GetMemoryDetails
chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetMemoryDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmBrowser.GetMemoryDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmBrowser_GetMemoryDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmBrowser.GetMemoryDetails_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'process_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.cfm.mojom.ProcessDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'gpu_memory_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.CfmBrowserPtr = chromeos.cfm.cfm.mojom.mojom.CfmBrowserRemote;
chromeos.cfm.cfm.mojom.mojom.CfmBrowserRequest = chromeos.cfm.cfm.mojom.mojom.CfmBrowserPendingReceiver;

