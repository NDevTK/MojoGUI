// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/chrome_app_kiosk_service.mojom
// Module: crosapi.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.ChromeKioskInstallResultSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ChromeKioskLaunchResultSpec = { $: mojo.internal.Enum() };
crosapi.mojom.AppInstallParamsSpec = { $: {} };
crosapi.mojom.ChromeKioskLaunchController = {};
crosapi.mojom.ChromeKioskLaunchController.$interfaceName = 'crosapi.mojom.ChromeKioskLaunchController';
crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ParamsSpec = { $: {} };
crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ResponseParamsSpec = { $: {} };
crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ParamsSpec = { $: {} };
crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ResponseParamsSpec = { $: {} };
crosapi.mojom.ChromeAppKioskService = {};
crosapi.mojom.ChromeAppKioskService.$interfaceName = 'crosapi.mojom.ChromeAppKioskService';
crosapi.mojom.ChromeAppKioskService_BindLaunchController_ParamsSpec = { $: {} };

// Enum: ChromeKioskInstallResult
crosapi.mojom.ChromeKioskInstallResult = {
  kUnknown: 0,
  kSuccess: 1,
  kPrimaryAppNotCached: 2,
  kPrimaryAppInstallFailed: 3,
  kSecondaryAppInstallFailed: 4,
  kPrimaryAppNotKioskEnabled: 5,
  kPrimaryAppUpdateFailed: 6,
  kSecondaryAppUpdateFailed: 7,
};

// Enum: ChromeKioskLaunchResult
crosapi.mojom.ChromeKioskLaunchResult = {
  kUnknown: 0,
  kSuccess: 1,
  kUnableToLaunch: 2,
  kNetworkMissing: 3,
  kChromeAppDeprecated: 4,
};

// Struct: AppInstallParams
mojo.internal.Struct(
    crosapi.mojom.AppInstallParamsSpec, 'crosapi.mojom.AppInstallParams', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('crx_file_location', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_store_app', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ChromeKioskLaunchController
mojo.internal.Struct(
    crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ParamsSpec, 'crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_Params', [
      mojo.internal.StructField('params', 0, 0, crosapi.mojom.AppInstallParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ResponseParamsSpec, 'crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.ChromeKioskInstallResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ParamsSpec, 'crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_network_ready', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ResponseParamsSpec, 'crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.ChromeKioskLaunchResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.ChromeKioskLaunchControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ChromeKioskLaunchControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ChromeKioskLaunchController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ChromeKioskLaunchControllerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ChromeKioskLaunchControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  installKioskApp(params) {
    return this.$.installKioskApp(params);
  }
  launchKioskApp(app_id, is_network_ready) {
    return this.$.launchKioskApp(app_id, is_network_ready);
  }
};

crosapi.mojom.ChromeKioskLaunchControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromeKioskLaunchController', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  installKioskApp(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ParamsSpec,
      crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ResponseParamsSpec,
      [params],
      false);
  }

  launchKioskApp(app_id, is_network_ready) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ParamsSpec,
      crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ResponseParamsSpec,
      [app_id, is_network_ready],
      false);
  }

};

crosapi.mojom.ChromeKioskLaunchController.getRemote = function() {
  let remote = new crosapi.mojom.ChromeKioskLaunchControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ChromeKioskLaunchController',
    'context');
  return remote.$;
};

crosapi.mojom.ChromeKioskLaunchControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromeKioskLaunchController', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ParamsSpec.$.structSpec);
          const result = this.impl.installKioskApp(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.ChromeKioskLaunchController_InstallKioskApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ParamsSpec.$.structSpec);
          const result = this.impl.launchKioskApp(params.app_id, params.is_network_ready);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.ChromeKioskLaunchController_LaunchKioskApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

crosapi.mojom.ChromeKioskLaunchControllerReceiver = crosapi.mojom.ChromeKioskLaunchControllerReceiver;

crosapi.mojom.ChromeKioskLaunchControllerPtr = crosapi.mojom.ChromeKioskLaunchControllerRemote;
crosapi.mojom.ChromeKioskLaunchControllerRequest = crosapi.mojom.ChromeKioskLaunchControllerPendingReceiver;


// Interface: ChromeAppKioskService
mojo.internal.Struct(
    crosapi.mojom.ChromeAppKioskService_BindLaunchController_ParamsSpec, 'crosapi.mojom.ChromeAppKioskService_BindLaunchController_Params', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.ChromeKioskLaunchControllerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.ChromeAppKioskServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ChromeAppKioskServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ChromeAppKioskService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ChromeAppKioskServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ChromeAppKioskServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindLaunchController(controller) {
    return this.$.bindLaunchController(controller);
  }
};

crosapi.mojom.ChromeAppKioskServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromeAppKioskService', [
      { explicit: 0 },
    ]);
  }

  bindLaunchController(controller) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.ChromeAppKioskService_BindLaunchController_ParamsSpec,
      null,
      [controller],
      false);
  }

};

crosapi.mojom.ChromeAppKioskService.getRemote = function() {
  let remote = new crosapi.mojom.ChromeAppKioskServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ChromeAppKioskService',
    'context');
  return remote.$;
};

crosapi.mojom.ChromeAppKioskServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromeAppKioskService', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.ChromeAppKioskService_BindLaunchController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.ChromeAppKioskService_BindLaunchController_ParamsSpec.$.structSpec);
          const result = this.impl.bindLaunchController(params.controller);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

crosapi.mojom.ChromeAppKioskServiceReceiver = crosapi.mojom.ChromeAppKioskServiceReceiver;

crosapi.mojom.ChromeAppKioskServicePtr = crosapi.mojom.ChromeAppKioskServiceRemote;
crosapi.mojom.ChromeAppKioskServiceRequest = crosapi.mojom.ChromeAppKioskServicePendingReceiver;

