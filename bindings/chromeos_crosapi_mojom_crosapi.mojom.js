// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/crosapi/mojom/crosapi.mojom
 // Module: crosapi.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.media_session = mojo.internal.bindings.media_session || {};

mojo.internal.bindings.crosapi.mojom.Crosapi = {};
mojo.internal.bindings.crosapi.mojom.Crosapi.$interfaceName = 'crosapi.mojom.Crosapi';
mojo.internal.bindings.crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindHidManager_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec = { $: {} };

// Interface: Crosapi
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec, 'crosapi.mojom.Crosapi_BindAccountManager_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.AccountManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec, 'crosapi.mojom.Crosapi_BindBrowserCdmFactory_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.bindings.mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec, 'crosapi.mojom.Crosapi_BindCfmServiceContext_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chromeos.cfm.mojom.CfmServiceContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec, 'crosapi.mojom.Crosapi_BindCrosDisplayConfigController_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec, 'crosapi.mojom.Crosapi_BindDiagnosticsService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.DiagnosticsServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec, 'crosapi.mojom.Crosapi_BindDocumentScan_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.DocumentScanRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec, 'crosapi.mojom.Crosapi_BindInSessionAuth_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chromeos.auth.mojom.InSessionAuthRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec, 'crosapi.mojom.Crosapi_BindKeystoreService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.KeystoreServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec, 'crosapi.mojom.Crosapi_BindLocalPrinter_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.LocalPrinterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec, 'crosapi.mojom.Crosapi_BindMachineLearningService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chromeos.machine_learning.mojom.MachineLearningServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec, 'crosapi.mojom.Crosapi_BindSensorHalClient_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.sensors.mojom.SensorHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindHidManager_ParamsSpec, 'crosapi.mojom.Crosapi_BindHidManager_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device.mojom.HidManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec, 'crosapi.mojom.Crosapi_BindMediaSessionController_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media_session.mojom.MediaControllerManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec, 'crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media_session.mojom.AudioFocusManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec, 'crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media_session.mojom.AudioFocusManagerDebugRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec, 'crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec, 'crosapi.mojom.Crosapi_BindTelemetryManagementService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.TelemetryManagementServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec, 'crosapi.mojom.Crosapi_BindTelemetryProbeService_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec, 'crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.VideoCaptureDeviceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec, 'crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.crosapi.mojom.GuestOsSkForwarderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.CrosapiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.CrosapiRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Crosapi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.CrosapiPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.CrosapiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindAccountManager(arg_receiver) {
    return this.$.bindAccountManager(arg_receiver);
  }
  bindBrowserCdmFactory(arg_receiver) {
    return this.$.bindBrowserCdmFactory(arg_receiver);
  }
  bindCfmServiceContext(arg_receiver) {
    return this.$.bindCfmServiceContext(arg_receiver);
  }
  bindCrosDisplayConfigController(arg_receiver) {
    return this.$.bindCrosDisplayConfigController(arg_receiver);
  }
  bindDiagnosticsService(arg_receiver) {
    return this.$.bindDiagnosticsService(arg_receiver);
  }
  bindDocumentScan(arg_receiver) {
    return this.$.bindDocumentScan(arg_receiver);
  }
  bindInSessionAuth(arg_receiver) {
    return this.$.bindInSessionAuth(arg_receiver);
  }
  bindKeystoreService(arg_receiver) {
    return this.$.bindKeystoreService(arg_receiver);
  }
  bindLocalPrinter(arg_receiver) {
    return this.$.bindLocalPrinter(arg_receiver);
  }
  bindMachineLearningService(arg_receiver) {
    return this.$.bindMachineLearningService(arg_receiver);
  }
  bindSensorHalClient(arg_receiver) {
    return this.$.bindSensorHalClient(arg_receiver);
  }
  bindHidManager(arg_receiver) {
    return this.$.bindHidManager(arg_receiver);
  }
  bindMediaSessionController(arg_receiver) {
    return this.$.bindMediaSessionController(arg_receiver);
  }
  bindMediaSessionAudioFocus(arg_receiver) {
    return this.$.bindMediaSessionAudioFocus(arg_receiver);
  }
  bindMediaSessionAudioFocusDebug(arg_receiver) {
    return this.$.bindMediaSessionAudioFocusDebug(arg_receiver);
  }
  bindTelemetryDiagnosticRoutinesService(arg_receiver) {
    return this.$.bindTelemetryDiagnosticRoutinesService(arg_receiver);
  }
  bindTelemetryManagementService(arg_receiver) {
    return this.$.bindTelemetryManagementService(arg_receiver);
  }
  bindTelemetryProbeService(arg_receiver) {
    return this.$.bindTelemetryProbeService(arg_receiver);
  }
  bindVideoCaptureDeviceFactory(arg_receiver) {
    return this.$.bindVideoCaptureDeviceFactory(arg_receiver);
  }
  bindGuestOsSkForwarderFactory(arg_receiver) {
    return this.$.bindGuestOsSkForwarderFactory(arg_receiver);
  }
};

mojo.internal.bindings.crosapi.mojom.CrosapiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Crosapi', [
      { explicit: 7 },
      { explicit: 47 },
      { explicit: 142 },
      { explicit: 93 },
      { explicit: 99 },
      { explicit: 80 },
      { explicit: 96 },
      { explicit: 2 },
      { explicit: 30 },
      { explicit: 22 },
      { explicit: 19 },
      { explicit: 4 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 115 },
      { explicit: 129 },
      { explicit: 97 },
      { explicit: 25 },
      { explicit: 123 },
    ]);
  }

  bindAccountManager(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindBrowserCdmFactory(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindCfmServiceContext(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindCrosDisplayConfigController(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindDiagnosticsService(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindDocumentScan(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindInSessionAuth(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindKeystoreService(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindLocalPrinter(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindMachineLearningService(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindSensorHalClient(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindHidManager(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindHidManager_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindMediaSessionController(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindMediaSessionAudioFocus(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindMediaSessionAudioFocusDebug(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindTelemetryDiagnosticRoutinesService(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindTelemetryManagementService(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindTelemetryProbeService(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindVideoCaptureDeviceFactory(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindGuestOsSkForwarderFactory(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.Crosapi.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.CrosapiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Crosapi',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.CrosapiReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Crosapi', [
      { explicit: 7 },
      { explicit: 47 },
      { explicit: 142 },
      { explicit: 93 },
      { explicit: 99 },
      { explicit: 80 },
      { explicit: 96 },
      { explicit: 2 },
      { explicit: 30 },
      { explicit: 22 },
      { explicit: 19 },
      { explicit: 4 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 115 },
      { explicit: 129 },
      { explicit: 97 },
      { explicit: 25 },
      { explicit: 123 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindAccountManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAccountManager (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindBrowserCdmFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBrowserCdmFactory (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindCfmServiceContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindCfmServiceContext (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindCrosDisplayConfigController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindCrosDisplayConfigController (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BindDiagnosticsService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindDiagnosticsService (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BindDocumentScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindDocumentScan (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindInSessionAuth
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInSessionAuth (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BindKeystoreService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindKeystoreService (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: BindLocalPrinter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindLocalPrinter (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: BindMachineLearningService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMachineLearningService (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: BindSensorHalClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSensorHalClient (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: BindHidManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindHidManager_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindHidManager (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: BindMediaSessionController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMediaSessionController (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: BindMediaSessionAudioFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMediaSessionAudioFocus (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: BindMediaSessionAudioFocusDebug
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMediaSessionAudioFocusDebug (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: BindTelemetryDiagnosticRoutinesService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTelemetryDiagnosticRoutinesService (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: BindTelemetryManagementService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTelemetryManagementService (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: BindTelemetryProbeService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTelemetryProbeService (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: BindVideoCaptureDeviceFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindVideoCaptureDeviceFactory (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: BindGuestOsSkForwarderFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGuestOsSkForwarderFactory (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAccountManager');
          const result = this.impl.bindAccountManager(params.arg_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindBrowserCdmFactory');
          const result = this.impl.bindBrowserCdmFactory(params.arg_receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindCfmServiceContext');
          const result = this.impl.bindCfmServiceContext(params.arg_receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindCrosDisplayConfigController');
          const result = this.impl.bindCrosDisplayConfigController(params.arg_receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindDiagnosticsService');
          const result = this.impl.bindDiagnosticsService(params.arg_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindDocumentScan');
          const result = this.impl.bindDocumentScan(params.arg_receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindInSessionAuth');
          const result = this.impl.bindInSessionAuth(params.arg_receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindKeystoreService');
          const result = this.impl.bindKeystoreService(params.arg_receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindLocalPrinter');
          const result = this.impl.bindLocalPrinter(params.arg_receiver);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMachineLearningService');
          const result = this.impl.bindMachineLearningService(params.arg_receiver);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindSensorHalClient');
          const result = this.impl.bindSensorHalClient(params.arg_receiver);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindHidManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindHidManager');
          const result = this.impl.bindHidManager(params.arg_receiver);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMediaSessionController');
          const result = this.impl.bindMediaSessionController(params.arg_receiver);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMediaSessionAudioFocus');
          const result = this.impl.bindMediaSessionAudioFocus(params.arg_receiver);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMediaSessionAudioFocusDebug');
          const result = this.impl.bindMediaSessionAudioFocusDebug(params.arg_receiver);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTelemetryDiagnosticRoutinesService');
          const result = this.impl.bindTelemetryDiagnosticRoutinesService(params.arg_receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTelemetryManagementService');
          const result = this.impl.bindTelemetryManagementService(params.arg_receiver);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTelemetryProbeService');
          const result = this.impl.bindTelemetryProbeService(params.arg_receiver);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindVideoCaptureDeviceFactory');
          const result = this.impl.bindVideoCaptureDeviceFactory(params.arg_receiver);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindGuestOsSkForwarderFactory');
          const result = this.impl.bindGuestOsSkForwarderFactory(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.CrosapiReceiver = mojo.internal.bindings.crosapi.mojom.CrosapiReceiver;

mojo.internal.bindings.crosapi.mojom.CrosapiPtr = mojo.internal.bindings.crosapi.mojom.CrosapiRemote;
mojo.internal.bindings.crosapi.mojom.CrosapiRequest = mojo.internal.bindings.crosapi.mojom.CrosapiPendingReceiver;

