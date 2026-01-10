// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_browser.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};

chromeos.cfm.mojom.ExtensionDataSpec = { $: {} };
chromeos.cfm.mojom.ProcessMemoryInformationSpec = { $: {} };
chromeos.cfm.mojom.ProcessDataSpec = { $: {} };
chromeos.cfm.mojom.CfmBrowser = {};
chromeos.cfm.mojom.CfmBrowser.$interfaceName = 'chromeos.cfm.mojom.CfmBrowser';
chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ParamsSpec = { $: {} };
chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ParamsSpec = { $: {} };
chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ResponseParamsSpec = { $: {} };

// Struct: ExtensionData
mojo.internal.Struct(
    chromeos.cfm.mojom.ExtensionDataSpec, 'chromeos.cfm.mojom.ExtensionData', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hashed_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ProcessMemoryInformation
mojo.internal.Struct(
    chromeos.cfm.mojom.ProcessMemoryInformationSpec, 'chromeos.cfm.mojom.ProcessMemoryInformation', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('product_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('process_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('renderer_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('titles', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('extension_info', 40, 0, mojo.internal.Array(chromeos.cfm.mojom.ExtensionDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pid', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('num_processes', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('num_open_fds', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('open_fds_soft_limit', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('private_memory_footprint_kb', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ProcessData
mojo.internal.Struct(
    chromeos.cfm.mojom.ProcessDataSpec, 'chromeos.cfm.mojom.ProcessData', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('process_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('processes', 16, 0, mojo.internal.Array(chromeos.cfm.mojom.ProcessMemoryInformationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CfmBrowser
mojo.internal.Struct(
    chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ParamsSpec, 'chromeos.cfm.mojom.CfmBrowser_GetVariationsData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ResponseParamsSpec, 'chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ResponseParams', [
      mojo.internal.StructField('field_trial_parameters', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('field_trial_states', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled_features', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disabled_features', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ParamsSpec, 'chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ResponseParamsSpec, 'chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ResponseParams', [
      mojo.internal.StructField('process_data', 0, 0, mojo.internal.Array(chromeos.cfm.mojom.ProcessDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('gpu_memory_size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.cfm.mojom.CfmBrowserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.CfmBrowserRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.CfmBrowser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.CfmBrowserPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.CfmBrowserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.CfmBrowserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getVariationsData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ParamsSpec,
      chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ResponseParamsSpec,
      [],
      false);
  }

  getMemoryDetails() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ParamsSpec,
      chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ResponseParamsSpec,
      [],
      false);
  }

};

chromeos.cfm.mojom.CfmBrowser.getRemote = function() {
  let remote = new chromeos.cfm.mojom.CfmBrowserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.CfmBrowser',
    'context');
  return remote.$;
};

chromeos.cfm.mojom.CfmBrowserReceiver = class {
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
          const params = chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVariationsData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.CfmBrowser_GetVariationsData_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMemoryDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.CfmBrowser_GetMemoryDetails_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

chromeos.cfm.mojom.CfmBrowserReceiver = chromeos.cfm.mojom.CfmBrowserReceiver;

chromeos.cfm.mojom.CfmBrowserPtr = chromeos.cfm.mojom.CfmBrowserRemote;
chromeos.cfm.mojom.CfmBrowserRequest = chromeos.cfm.mojom.CfmBrowserPendingReceiver;

