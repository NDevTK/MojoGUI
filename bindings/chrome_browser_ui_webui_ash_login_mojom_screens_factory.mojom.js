// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_factory.mojom
 // Module: ash.screens_factory.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.screens_factory = mojo.internal.bindings.ash.screens_factory || {};
mojo.internal.bindings.ash.screens_factory.mojom = mojo.internal.bindings.ash.screens_factory.mojom || {};

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory = {};
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory.$interfaceName = 'ash.screens_factory.mojom.ScreensFactory';
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec = { $: {} };

// Interface: ScreensFactory
mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.AiIntroPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParams', [
      mojo.internal.StructField('arg_pending', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.AiIntroPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.AppDownloadingPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.DrivePinningPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParams', [
      mojo.internal.StructField('arg_pending', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.DrivePinningPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.FjordStationSetupPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.GaiaInfoPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParams', [
      mojo.internal.StructField('arg_pending', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.GaiaInfoPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.GestureNavigationPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_common.mojom.GeminiIntroPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParams', [
      mojo.internal.StructField('arg_pending', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_oobe.mojom.ConsumerUpdatePageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParams', [
      mojo.internal.StructField('arg_pending', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_login.mojom.ArcVmDataMigrationPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParams', [
      mojo.internal.StructField('arg_pending', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_login.mojom.EncryptionMigrationPageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec, 'ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.screens_factory.mojom.ScreensFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  establishAiIntroScreenPipe(arg_handler) {
    return this.$.establishAiIntroScreenPipe(arg_handler);
  }
  establishAppDownloadingScreenPipe(arg_handler) {
    return this.$.establishAppDownloadingScreenPipe(arg_handler);
  }
  establishDrivePinningScreenPipe(arg_handler) {
    return this.$.establishDrivePinningScreenPipe(arg_handler);
  }
  establishFjordStationSetupScreenPipe(arg_handler) {
    return this.$.establishFjordStationSetupScreenPipe(arg_handler);
  }
  establishGaiaInfoScreenPipe(arg_handler) {
    return this.$.establishGaiaInfoScreenPipe(arg_handler);
  }
  establishGestureNavigationScreenPipe(arg_handler) {
    return this.$.establishGestureNavigationScreenPipe(arg_handler);
  }
  establishGeminiIntroScreenPipe(arg_handler) {
    return this.$.establishGeminiIntroScreenPipe(arg_handler);
  }
  establishConsumerUpdateScreenPipe(arg_handler) {
    return this.$.establishConsumerUpdateScreenPipe(arg_handler);
  }
  establishPackagedLicenseScreenPipe(arg_handler) {
    return this.$.establishPackagedLicenseScreenPipe(arg_handler);
  }
  establishArcVmDataMigrationScreenPipe(arg_handler) {
    return this.$.establishArcVmDataMigrationScreenPipe(arg_handler);
  }
  establishEncryptionMigrationScreenPipe(arg_handler) {
    return this.$.establishEncryptionMigrationScreenPipe(arg_handler);
  }
  establishLocalDataLossWarningScreenPipe(arg_handler) {
    return this.$.establishLocalDataLossWarningScreenPipe(arg_handler);
  }
};

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScreensFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  establishAiIntroScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec,
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec,
      [arg_handler],
      false);
  }

  establishAppDownloadingScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

  establishDrivePinningScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec,
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec,
      [arg_handler],
      false);
  }

  establishFjordStationSetupScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

  establishGaiaInfoScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec,
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec,
      [arg_handler],
      false);
  }

  establishGestureNavigationScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

  establishGeminiIntroScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

  establishConsumerUpdateScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec,
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec,
      [arg_handler],
      false);
  }

  establishPackagedLicenseScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

  establishArcVmDataMigrationScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec,
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec,
      [arg_handler],
      false);
  }

  establishEncryptionMigrationScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec,
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec,
      [arg_handler],
      false);
  }

  establishLocalDataLossWarningScreenPipe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

};

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_factory.mojom.ScreensFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScreensFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: EstablishAiIntroScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishAiIntroScreenPipe (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EstablishAppDownloadingScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishAppDownloadingScreenPipe (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EstablishDrivePinningScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishDrivePinningScreenPipe (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: EstablishFjordStationSetupScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishFjordStationSetupScreenPipe (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: EstablishGaiaInfoScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishGaiaInfoScreenPipe (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EstablishGestureNavigationScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishGestureNavigationScreenPipe (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: EstablishGeminiIntroScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishGeminiIntroScreenPipe (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EstablishConsumerUpdateScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishConsumerUpdateScreenPipe (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: EstablishPackagedLicenseScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishPackagedLicenseScreenPipe (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: EstablishArcVmDataMigrationScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishArcVmDataMigrationScreenPipe (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: EstablishEncryptionMigrationScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishEncryptionMigrationScreenPipe (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: EstablishLocalDataLossWarningScreenPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishLocalDataLossWarningScreenPipe (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishAiIntroScreenPipe');
          const result = this.impl.establishAiIntroScreenPipe(params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAiIntroScreenPipe_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EstablishAiIntroScreenPipe FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishAppDownloadingScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishAppDownloadingScreenPipe');
          const result = this.impl.establishAppDownloadingScreenPipe(params.arg_handler);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishDrivePinningScreenPipe');
          const result = this.impl.establishDrivePinningScreenPipe(params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishDrivePinningScreenPipe_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EstablishDrivePinningScreenPipe FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishFjordStationSetupScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishFjordStationSetupScreenPipe');
          const result = this.impl.establishFjordStationSetupScreenPipe(params.arg_handler);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishGaiaInfoScreenPipe');
          const result = this.impl.establishGaiaInfoScreenPipe(params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGaiaInfoScreenPipe_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EstablishGaiaInfoScreenPipe FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGestureNavigationScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishGestureNavigationScreenPipe');
          const result = this.impl.establishGestureNavigationScreenPipe(params.arg_handler);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishGeminiIntroScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishGeminiIntroScreenPipe');
          const result = this.impl.establishGeminiIntroScreenPipe(params.arg_handler);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishConsumerUpdateScreenPipe');
          const result = this.impl.establishConsumerUpdateScreenPipe(params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishConsumerUpdateScreenPipe_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EstablishConsumerUpdateScreenPipe FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishPackagedLicenseScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishPackagedLicenseScreenPipe');
          const result = this.impl.establishPackagedLicenseScreenPipe(params.arg_handler);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishArcVmDataMigrationScreenPipe');
          const result = this.impl.establishArcVmDataMigrationScreenPipe(params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishArcVmDataMigrationScreenPipe_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EstablishArcVmDataMigrationScreenPipe FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishEncryptionMigrationScreenPipe');
          const result = this.impl.establishEncryptionMigrationScreenPipe(params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishEncryptionMigrationScreenPipe_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EstablishEncryptionMigrationScreenPipe FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactory_EstablishLocalDataLossWarningScreenPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.establishLocalDataLossWarningScreenPipe');
          const result = this.impl.establishLocalDataLossWarningScreenPipe(params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryReceiver = mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryReceiver;

mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryPtr = mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryRemote;
mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryRequest = mojo.internal.bindings.ash.screens_factory.mojom.ScreensFactoryPendingReceiver;

