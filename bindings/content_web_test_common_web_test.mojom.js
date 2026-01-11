// Auto-generated MojoJS binding
 // Source: chromium_src/content/web_test/common/web_test.mojom
 // Module: content.mojom

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
 

 mojo.internal.bindings.content = mojo.internal.bindings.content || {};
mojo.internal.bindings.content.mojom = mojo.internal.bindings.content.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.content.mojom.AutoResponseModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.content.mojom.WorkItemSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRunTestConfigurationSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRendererDumpResultSpec = { $: {} };
mojo.internal.bindings.content.mojom.WorkItemBackForwardSpec = { $: {} };
mojo.internal.bindings.content.mojom.WorkItemLoadSpec = { $: {} };
mojo.internal.bindings.content.mojom.WorkItemReloadSpec = { $: {} };
mojo.internal.bindings.content.mojom.WorkItemLoadingScriptSpec = { $: {} };
mojo.internal.bindings.content.mojom.WorkItemNonLoadingScriptSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame = {};
mojo.internal.bindings.content.mojom.WebTestRenderFrame.$interfaceName = 'content.mojom.WebTestRenderFrame';
mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_StartTest_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost = {};
mojo.internal.bindings.content.mojom.WebTestControlHost.$interfaceName = 'content.mojom.WebTestControlHost';
mojo.internal.bindings.content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_Reload_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_GoToOffset_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost = {};
mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost.$interfaceName = 'content.mojom.NonAssociatedWebTestControlHost';
mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec = { $: {} };

// Enum: AutoResponseMode
mojo.internal.bindings.content.mojom.AutoResponseMode = {
  kNone: 0,
  kAutoAccept: 1,
  kAutoReject: 2,
};

// Union: WorkItem
mojo.internal.Union(
    mojo.internal.bindings.content.mojom.WorkItemSpec, 'content.mojom.WorkItem', {
      'arg_back_forward': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.content.mojom.WorkItemBackForwardSpec.$,
        'nullable': false,
      },
      'arg_load': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.content.mojom.WorkItemLoadSpec.$,
        'nullable': false,
      },
      'arg_reload': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.content.mojom.WorkItemReloadSpec.$,
        'nullable': false,
      },
      'arg_loading_script': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.content.mojom.WorkItemLoadingScriptSpec.$,
        'nullable': false,
      },
      'arg_non_loading_script': {
        'ordinal': 4,
        'type': mojo.internal.bindings.mojo.internal.bindings.content.mojom.WorkItemNonLoadingScriptSpec.$,
        'nullable': false,
      },
    });

// Struct: WebTestRunTestConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRunTestConfigurationSpec, 'content.mojom.WebTestRunTestConfiguration', [
      mojo.internal.StructField('arg_current_working_directory', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_temp_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_test_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_expected_pixel_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_external_pages', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wpt_print_mode', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_protocol_mode', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebTestRendererDumpResult
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRendererDumpResultSpec, 'content.mojom.WebTestRendererDumpResult', [
      mojo.internal.StructField('arg_audio', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_layout', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pixels', 16, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_actual_pixel_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_rect', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WorkItemBackForward
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WorkItemBackForwardSpec, 'content.mojom.WorkItemBackForward', [
      mojo.internal.StructField('arg_distance', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WorkItemLoad
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WorkItemLoadSpec, 'content.mojom.WorkItemLoad', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_target', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WorkItemReload
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WorkItemReloadSpec, 'content.mojom.WorkItemReload', [
    ],
    [[0, 8]]);

// Struct: WorkItemLoadingScript
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WorkItemLoadingScriptSpec, 'content.mojom.WorkItemLoadingScript', [
      mojo.internal.StructField('arg_script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WorkItemNonLoadingScript
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WorkItemNonLoadingScriptSpec, 'content.mojom.WorkItemNonLoadingScript', [
      mojo.internal.StructField('arg_script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: WebTestRenderFrame
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec, 'content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec, 'content.mojom.WebTestRenderFrame_DumpFrameLayout_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec, 'content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParams', [
      mojo.internal.StructField('arg_frame_layout_dump', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec, 'content.mojom.WebTestRenderFrame_SetTestConfiguration_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.content.mojom.WebTestRunTestConfigurationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_starting_test', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec, 'content.mojom.WebTestRenderFrame_OnDeactivated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec, 'content.mojom.WebTestRenderFrame_OnReactivated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec, 'content.mojom.WebTestRenderFrame_BlockTestUntilStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_StartTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_StartTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec, 'content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec, 'content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_Params', [
      mojo.internal.StructField('arg_changed_layout_test_runtime_flags', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec, 'content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec, 'content.mojom.WebTestRenderFrame_ProcessWorkItem_Params', [
      mojo.internal.StructField('arg_work_item', 0, 0, mojo.internal.bindings.content.mojom.WorkItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec, 'content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_Params', [
      mojo.internal.StructField('arg_work_queue_states', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.content.mojom.WebTestRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.WebTestRenderFrameRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.WebTestRenderFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.WebTestRenderFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  synchronouslyCompositeAfterTest() {
    return this.$.synchronouslyCompositeAfterTest();
  }
  dumpFrameLayout() {
    return this.$.dumpFrameLayout();
  }
  setTestConfiguration(arg_config, arg_starting_test) {
    return this.$.setTestConfiguration(arg_config, arg_starting_test);
  }
  onDeactivated() {
    return this.$.onDeactivated();
  }
  onReactivated() {
    return this.$.onReactivated();
  }
  blockTestUntilStart() {
    return this.$.blockTestUntilStart();
  }
  startTest() {
    return this.$.startTest();
  }
  setupRendererProcessForNonTestWindow() {
    return this.$.setupRendererProcessForNonTestWindow();
  }
  replicateWebTestRuntimeFlagsChanges(arg_changed_layout_test_runtime_flags) {
    return this.$.replicateWebTestRuntimeFlagsChanges(arg_changed_layout_test_runtime_flags);
  }
  testFinishedFromSecondaryRenderer() {
    return this.$.testFinishedFromSecondaryRenderer();
  }
  resetRendererAfterWebTest() {
    return this.$.resetRendererAfterWebTest();
  }
  processWorkItem(arg_work_item) {
    return this.$.processWorkItem(arg_work_item);
  }
  replicateWorkQueueStates(arg_work_queue_states) {
    return this.$.replicateWorkQueueStates(arg_work_queue_states);
  }
};

mojo.internal.bindings.content.mojom.WebTestRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTestRenderFrame', [
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
      { explicit: null },
    ]);
  }

  synchronouslyCompositeAfterTest() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec,
      [],
      false);
  }

  dumpFrameLayout() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec,
      [],
      false);
  }

  setTestConfiguration(arg_config, arg_starting_test) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec,
      null,
      [arg_config, arg_starting_test],
      false);
  }

  onDeactivated() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec,
      null,
      [],
      false);
  }

  onReactivated() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec,
      null,
      [],
      false);
  }

  blockTestUntilStart() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec,
      null,
      [],
      false);
  }

  startTest() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_StartTest_ParamsSpec,
      null,
      [],
      false);
  }

  setupRendererProcessForNonTestWindow() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec,
      null,
      [],
      false);
  }

  replicateWebTestRuntimeFlagsChanges(arg_changed_layout_test_runtime_flags) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec,
      null,
      [arg_changed_layout_test_runtime_flags],
      false);
  }

  testFinishedFromSecondaryRenderer() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  resetRendererAfterWebTest() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec,
      null,
      [],
      false);
  }

  processWorkItem(arg_work_item) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec,
      null,
      [arg_work_item],
      false);
  }

  replicateWorkQueueStates(arg_work_queue_states) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec,
      null,
      [arg_work_queue_states],
      false);
  }

};

mojo.internal.bindings.content.mojom.WebTestRenderFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.WebTestRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestRenderFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.WebTestRenderFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTestRenderFrame', [
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
        
        // Try Method 0: SynchronouslyCompositeAfterTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SynchronouslyCompositeAfterTest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DumpFrameLayout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DumpFrameLayout (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetTestConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTestConfiguration (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnDeactivated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeactivated (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnReactivated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReactivated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BlockTestUntilStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockTestUntilStart (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_StartTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartTest (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetupRendererProcessForNonTestWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetupRendererProcessForNonTestWindow (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReplicateWebTestRuntimeFlagsChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplicateWebTestRuntimeFlagsChanges (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: TestFinishedFromSecondaryRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TestFinishedFromSecondaryRenderer (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ResetRendererAfterWebTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetRendererAfterWebTest (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ProcessWorkItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessWorkItem (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ReplicateWorkQueueStates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplicateWorkQueueStates (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.synchronouslyCompositeAfterTest');
          const result = this.impl.synchronouslyCompositeAfterTest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SynchronouslyCompositeAfterTest FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dumpFrameLayout');
          const result = this.impl.dumpFrameLayout();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DumpFrameLayout FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTestConfiguration');
          const result = this.impl.setTestConfiguration(params.arg_config, params.arg_starting_test);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeactivated');
          const result = this.impl.onDeactivated();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReactivated');
          const result = this.impl.onReactivated();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blockTestUntilStart');
          const result = this.impl.blockTestUntilStart();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_StartTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startTest');
          const result = this.impl.startTest();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setupRendererProcessForNonTestWindow');
          const result = this.impl.setupRendererProcessForNonTestWindow();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replicateWebTestRuntimeFlagsChanges');
          const result = this.impl.replicateWebTestRuntimeFlagsChanges(params.arg_changed_layout_test_runtime_flags);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.testFinishedFromSecondaryRenderer');
          const result = this.impl.testFinishedFromSecondaryRenderer();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetRendererAfterWebTest');
          const result = this.impl.resetRendererAfterWebTest();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processWorkItem');
          const result = this.impl.processWorkItem(params.arg_work_item);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replicateWorkQueueStates');
          const result = this.impl.replicateWorkQueueStates(params.arg_work_queue_states);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.WebTestRenderFrameReceiver = mojo.internal.bindings.content.mojom.WebTestRenderFrameReceiver;

mojo.internal.bindings.content.mojom.WebTestRenderFramePtr = mojo.internal.bindings.content.mojom.WebTestRenderFrameRemote;
mojo.internal.bindings.content.mojom.WebTestRenderFrameRequest = mojo.internal.bindings.content.mojom.WebTestRenderFramePendingReceiver;


// Interface: WebTestControlHost
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec, 'content.mojom.WebTestControlHost_InitiateCaptureDump_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.content.mojom.WebTestRendererDumpResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_capture_navigation_history', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_capture_pixels', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec, 'content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec, 'content.mojom.WebTestControlHost_PrintMessageToStderr_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessage_ParamsSpec, 'content.mojom.WebTestControlHost_PrintMessage_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec, 'content.mojom.WebTestControlHost_OverridePreferences_Params', [
      mojo.internal.StructField('arg_web_preferences', 0, 0, mojo.internal.bindings.blink.mojom.WebPreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_Reload_ParamsSpec, 'content.mojom.WebTestControlHost_Reload_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec, 'content.mojom.WebTestControlHost_CheckForLeakedWindows_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec, 'content.mojom.WebTestControlHost_SetMainWindowHidden_Params', [
      mojo.internal.StructField('arg_hidden', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec, 'content.mojom.WebTestControlHost_SetFrameWindowHidden_Params', [
      mojo.internal.StructField('arg_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hidden', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_GoToOffset_ParamsSpec, 'content.mojom.WebTestControlHost_GoToOffset_Params', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec, 'content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_argument', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec, 'content.mojom.WebTestControlHost_SetBluetoothManualChooser_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec, 'content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec, 'content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParams', [
      mojo.internal.StructField('arg_events', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec, 'content.mojom.WebTestControlHost_SetPopupBlockingEnabled_Params', [
      mojo.internal.StructField('arg_block_popups', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec, 'content.mojom.WebTestControlHost_LoadURLForFrame_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetPermission_ParamsSpec, 'content.mojom.WebTestControlHost_SetPermission_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_embedding_origin', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec, 'content.mojom.WebTestControlHost_BlockThirdPartyCookies_Params', [
      mojo.internal.StructField('arg_block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec, 'content.mojom.WebTestControlHost_GetWritableDirectory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec, 'content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParams', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec, 'content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec, 'content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_Params', [
      mojo.internal.StructField('arg_disallowed_suffixes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec, 'content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParams', [
      mojo.internal.StructField('arg_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec, 'content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec, 'content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_Params', [
      mojo.internal.StructField('arg_raw_commitments', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec, 'content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec, 'content.mojom.WebTestControlHost_ClearTrustTokenState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec, 'content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebNotificationClick_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_reply', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_action_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebNotificationClose_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_by_user', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec, 'content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_Params', [
      mojo.internal.StructField('arg_changed_web_test_runtime_flags', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec, 'content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_Params', [
      mojo.internal.StructField('arg_file_paths', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec, 'content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParams', [
      mojo.internal.StructField('arg_filesystem_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec, 'content.mojom.WebTestControlHost_DropPointerLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec, 'content.mojom.WebTestControlHost_SetPointerLockWillFail_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec, 'content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec, 'content.mojom.WebTestControlHost_AllowPointerLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec, 'content.mojom.WebTestControlHost_WorkItemAdded_Params', [
      mojo.internal.StructField('arg_work_item', 0, 0, mojo.internal.bindings.content.mojom.WorkItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec, 'content.mojom.WebTestControlHost_RequestWorkItem_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec, 'content.mojom.WebTestControlHost_WorkQueueStatesChanged_Params', [
      mojo.internal.StructField('arg_changed_work_queue_states', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec, 'content.mojom.WebTestControlHost_SetAcceptLanguages_Params', [
      mojo.internal.StructField('arg_accept_languages', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec, 'content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.content.mojom.AutoResponseModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec, 'content.mojom.WebTestControlHost_EnableAutoResize_Params', [
      mojo.internal.StructField('arg_min_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec, 'content.mojom.WebTestControlHost_DisableAutoResize_Params', [
      mojo.internal.StructField('arg_new_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.content.mojom.WebTestControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.WebTestControlHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.WebTestControlHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.WebTestControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initiateCaptureDump(arg_result, arg_capture_navigation_history, arg_capture_pixels) {
    return this.$.initiateCaptureDump(arg_result, arg_capture_navigation_history, arg_capture_pixels);
  }
  testFinishedInSecondaryRenderer() {
    return this.$.testFinishedInSecondaryRenderer();
  }
  printMessageToStderr(arg_message) {
    return this.$.printMessageToStderr(arg_message);
  }
  printMessage(arg_message) {
    return this.$.printMessage(arg_message);
  }
  overridePreferences(arg_web_preferences) {
    return this.$.overridePreferences(arg_web_preferences);
  }
  reload() {
    return this.$.reload();
  }
  checkForLeakedWindows() {
    return this.$.checkForLeakedWindows();
  }
  setMainWindowHidden(arg_hidden) {
    return this.$.setMainWindowHidden(arg_hidden);
  }
  setFrameWindowHidden(arg_frame_token, arg_hidden) {
    return this.$.setFrameWindowHidden(arg_frame_token, arg_hidden);
  }
  goToOffset(arg_offset) {
    return this.$.goToOffset(arg_offset);
  }
  sendBluetoothManualChooserEvent(arg_event, arg_argument) {
    return this.$.sendBluetoothManualChooserEvent(arg_event, arg_argument);
  }
  setBluetoothManualChooser(arg_enable) {
    return this.$.setBluetoothManualChooser(arg_enable);
  }
  getBluetoothManualChooserEvents() {
    return this.$.getBluetoothManualChooserEvents();
  }
  setPopupBlockingEnabled(arg_block_popups) {
    return this.$.setPopupBlockingEnabled(arg_block_popups);
  }
  loadURLForFrame(arg_url, arg_frame_name) {
    return this.$.loadURLForFrame(arg_url, arg_frame_name);
  }
  simulateScreenOrientationChanged() {
    return this.$.simulateScreenOrientationChanged();
  }
  setPermission(arg_name, arg_status, arg_origin, arg_embedding_origin) {
    return this.$.setPermission(arg_name, arg_status, arg_origin, arg_embedding_origin);
  }
  blockThirdPartyCookies(arg_block) {
    return this.$.blockThirdPartyCookies(arg_block);
  }
  getWritableDirectory() {
    return this.$.getWritableDirectory();
  }
  setFilePathForMockFileDialog(arg_path) {
    return this.$.setFilePathForMockFileDialog(arg_path);
  }
  createSubresourceFilterRulesetFile(arg_disallowed_suffixes) {
    return this.$.createSubresourceFilterRulesetFile(arg_disallowed_suffixes);
  }
  focusDevtoolsSecondaryWindow() {
    return this.$.focusDevtoolsSecondaryWindow();
  }
  setTrustTokenKeyCommitments(arg_raw_commitments) {
    return this.$.setTrustTokenKeyCommitments(arg_raw_commitments);
  }
  clearTrustTokenState() {
    return this.$.clearTrustTokenState();
  }
  simulateWebNotificationClick(arg_title, arg_action_index, arg_reply) {
    return this.$.simulateWebNotificationClick(arg_title, arg_action_index, arg_reply);
  }
  simulateWebNotificationClose(arg_title, arg_by_user) {
    return this.$.simulateWebNotificationClose(arg_title, arg_by_user);
  }
  simulateWebContentIndexDelete(arg_id) {
    return this.$.simulateWebContentIndexDelete(arg_id);
  }
  webTestRuntimeFlagsChanged(arg_changed_web_test_runtime_flags) {
    return this.$.webTestRuntimeFlagsChanged(arg_changed_web_test_runtime_flags);
  }
  registerIsolatedFileSystem(arg_file_paths) {
    return this.$.registerIsolatedFileSystem(arg_file_paths);
  }
  dropPointerLock() {
    return this.$.dropPointerLock();
  }
  setPointerLockWillFail() {
    return this.$.setPointerLockWillFail();
  }
  setPointerLockWillRespondAsynchronously() {
    return this.$.setPointerLockWillRespondAsynchronously();
  }
  allowPointerLock() {
    return this.$.allowPointerLock();
  }
  workItemAdded(arg_work_item) {
    return this.$.workItemAdded(arg_work_item);
  }
  requestWorkItem() {
    return this.$.requestWorkItem();
  }
  workQueueStatesChanged(arg_changed_work_queue_states) {
    return this.$.workQueueStatesChanged(arg_changed_work_queue_states);
  }
  setAcceptLanguages(arg_accept_languages) {
    return this.$.setAcceptLanguages(arg_accept_languages);
  }
  setRegisterProtocolHandlerMode(arg_mode) {
    return this.$.setRegisterProtocolHandlerMode(arg_mode);
  }
  enableAutoResize(arg_min_size, arg_max_size) {
    return this.$.enableAutoResize(arg_min_size, arg_max_size);
  }
  disableAutoResize(arg_new_size) {
    return this.$.disableAutoResize(arg_new_size);
  }
};

mojo.internal.bindings.content.mojom.WebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTestControlHost', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initiateCaptureDump(arg_result, arg_capture_navigation_history, arg_capture_pixels) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec,
      null,
      [arg_result, arg_capture_navigation_history, arg_capture_pixels],
      false);
  }

  testFinishedInSecondaryRenderer() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec,
      null,
      [],
      false);
  }

  printMessageToStderr(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec,
      null,
      [arg_message],
      false);
  }

  printMessage(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessage_ParamsSpec,
      null,
      [arg_message],
      false);
  }

  overridePreferences(arg_web_preferences) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec,
      null,
      [arg_web_preferences],
      false);
  }

  reload() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_Reload_ParamsSpec,
      null,
      [],
      false);
  }

  checkForLeakedWindows() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec,
      null,
      [],
      false);
  }

  setMainWindowHidden(arg_hidden) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec,
      null,
      [arg_hidden],
      false);
  }

  setFrameWindowHidden(arg_frame_token, arg_hidden) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec,
      null,
      [arg_frame_token, arg_hidden],
      false);
  }

  goToOffset(arg_offset) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_GoToOffset_ParamsSpec,
      null,
      [arg_offset],
      false);
  }

  sendBluetoothManualChooserEvent(arg_event, arg_argument) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec,
      null,
      [arg_event, arg_argument],
      false);
  }

  setBluetoothManualChooser(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec,
      null,
      [arg_enable],
      false);
  }

  getBluetoothManualChooserEvents() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec,
      [],
      false);
  }

  setPopupBlockingEnabled(arg_block_popups) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec,
      null,
      [arg_block_popups],
      false);
  }

  loadURLForFrame(arg_url, arg_frame_name) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec,
      null,
      [arg_url, arg_frame_name],
      false);
  }

  simulateScreenOrientationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  setPermission(arg_name, arg_status, arg_origin, arg_embedding_origin) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetPermission_ParamsSpec,
      null,
      [arg_name, arg_status, arg_origin, arg_embedding_origin],
      false);
  }

  blockThirdPartyCookies(arg_block) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec,
      null,
      [arg_block],
      false);
  }

  getWritableDirectory() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec,
      [],
      false);
  }

  setFilePathForMockFileDialog(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec,
      null,
      [arg_path],
      false);
  }

  createSubresourceFilterRulesetFile(arg_disallowed_suffixes) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec,
      [arg_disallowed_suffixes],
      false);
  }

  focusDevtoolsSecondaryWindow() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec,
      null,
      [],
      false);
  }

  setTrustTokenKeyCommitments(arg_raw_commitments) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec,
      [arg_raw_commitments],
      false);
  }

  clearTrustTokenState() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec,
      [],
      false);
  }

  simulateWebNotificationClick(arg_title, arg_action_index, arg_reply) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec,
      null,
      [arg_title, arg_action_index, arg_reply],
      false);
  }

  simulateWebNotificationClose(arg_title, arg_by_user) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec,
      null,
      [arg_title, arg_by_user],
      false);
  }

  simulateWebContentIndexDelete(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  webTestRuntimeFlagsChanged(arg_changed_web_test_runtime_flags) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec,
      null,
      [arg_changed_web_test_runtime_flags],
      false);
  }

  registerIsolatedFileSystem(arg_file_paths) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec,
      mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec,
      [arg_file_paths],
      false);
  }

  dropPointerLock() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec,
      null,
      [],
      false);
  }

  setPointerLockWillFail() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec,
      null,
      [],
      false);
  }

  setPointerLockWillRespondAsynchronously() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec,
      null,
      [],
      false);
  }

  allowPointerLock() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec,
      null,
      [],
      false);
  }

  workItemAdded(arg_work_item) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec,
      null,
      [arg_work_item],
      false);
  }

  requestWorkItem() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec,
      null,
      [],
      false);
  }

  workQueueStatesChanged(arg_changed_work_queue_states) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec,
      null,
      [arg_changed_work_queue_states],
      false);
  }

  setAcceptLanguages(arg_accept_languages) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec,
      null,
      [arg_accept_languages],
      false);
  }

  setRegisterProtocolHandlerMode(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec,
      null,
      [arg_mode],
      false);
  }

  enableAutoResize(arg_min_size, arg_max_size) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec,
      null,
      [arg_min_size, arg_max_size],
      false);
  }

  disableAutoResize(arg_new_size) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec,
      null,
      [arg_new_size],
      false);
  }

};

mojo.internal.bindings.content.mojom.WebTestControlHost.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.WebTestControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestControlHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.WebTestControlHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTestControlHost', [
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
        
        // Try Method 0: InitiateCaptureDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitiateCaptureDump (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TestFinishedInSecondaryRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TestFinishedInSecondaryRenderer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: PrintMessageToStderr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintMessageToStderr (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PrintMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintMessage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OverridePreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverridePreferences (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Reload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_Reload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reload (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CheckForLeakedWindows
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckForLeakedWindows (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetMainWindowHidden
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMainWindowHidden (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetFrameWindowHidden
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameWindowHidden (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GoToOffset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_GoToOffset_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GoToOffset (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SendBluetoothManualChooserEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendBluetoothManualChooserEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetBluetoothManualChooser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBluetoothManualChooser (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetBluetoothManualChooserEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBluetoothManualChooserEvents (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetPopupBlockingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPopupBlockingEnabled (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: LoadURLForFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadURLForFrame (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SimulateScreenOrientationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateScreenOrientationChanged (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPermission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPermission (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: BlockThirdPartyCookies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockThirdPartyCookies (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: GetWritableDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWritableDirectory (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SetFilePathForMockFileDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFilePathForMockFileDialog (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: CreateSubresourceFilterRulesetFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSubresourceFilterRulesetFile (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: FocusDevtoolsSecondaryWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusDevtoolsSecondaryWindow (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetTrustTokenKeyCommitments
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTrustTokenKeyCommitments (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: ClearTrustTokenState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTrustTokenState (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: SimulateWebNotificationClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateWebNotificationClick (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: SimulateWebNotificationClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateWebNotificationClose (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: SimulateWebContentIndexDelete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SimulateWebContentIndexDelete (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: WebTestRuntimeFlagsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebTestRuntimeFlagsChanged (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: RegisterIsolatedFileSystem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterIsolatedFileSystem (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: DropPointerLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DropPointerLock (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: SetPointerLockWillFail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPointerLockWillFail (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: SetPointerLockWillRespondAsynchronously
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPointerLockWillRespondAsynchronously (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: AllowPointerLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowPointerLock (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: WorkItemAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WorkItemAdded (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: RequestWorkItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestWorkItem (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: WorkQueueStatesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WorkQueueStatesChanged (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: SetAcceptLanguages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAcceptLanguages (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: SetRegisterProtocolHandlerMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRegisterProtocolHandlerMode (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: EnableAutoResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAutoResize (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: DisableAutoResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableAutoResize (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initiateCaptureDump');
          const result = this.impl.initiateCaptureDump(params.arg_result, params.arg_capture_navigation_history, params.arg_capture_pixels);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.testFinishedInSecondaryRenderer');
          const result = this.impl.testFinishedInSecondaryRenderer();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printMessageToStderr');
          const result = this.impl.printMessageToStderr(params.arg_message);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_PrintMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printMessage');
          const result = this.impl.printMessage(params.arg_message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.overridePreferences');
          const result = this.impl.overridePreferences(params.arg_web_preferences);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_Reload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reload');
          const result = this.impl.reload();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkForLeakedWindows');
          const result = this.impl.checkForLeakedWindows();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMainWindowHidden');
          const result = this.impl.setMainWindowHidden(params.arg_hidden);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameWindowHidden');
          const result = this.impl.setFrameWindowHidden(params.arg_frame_token, params.arg_hidden);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_GoToOffset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.goToOffset');
          const result = this.impl.goToOffset(params.arg_offset);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendBluetoothManualChooserEvent');
          const result = this.impl.sendBluetoothManualChooserEvent(params.arg_event, params.arg_argument);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothManualChooser');
          const result = this.impl.setBluetoothManualChooser(params.arg_enable);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBluetoothManualChooserEvents');
          const result = this.impl.getBluetoothManualChooserEvents();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetBluetoothManualChooserEvents FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPopupBlockingEnabled');
          const result = this.impl.setPopupBlockingEnabled(params.arg_block_popups);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadURLForFrame');
          const result = this.impl.loadURLForFrame(params.arg_url, params.arg_frame_name);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateScreenOrientationChanged');
          const result = this.impl.simulateScreenOrientationChanged();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPermission');
          const result = this.impl.setPermission(params.arg_name, params.arg_status, params.arg_origin, params.arg_embedding_origin);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blockThirdPartyCookies');
          const result = this.impl.blockThirdPartyCookies(params.arg_block);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWritableDirectory');
          const result = this.impl.getWritableDirectory();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWritableDirectory FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFilePathForMockFileDialog');
          const result = this.impl.setFilePathForMockFileDialog(params.arg_path);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSubresourceFilterRulesetFile');
          const result = this.impl.createSubresourceFilterRulesetFile(params.arg_disallowed_suffixes);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSubresourceFilterRulesetFile FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusDevtoolsSecondaryWindow');
          const result = this.impl.focusDevtoolsSecondaryWindow();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTrustTokenKeyCommitments');
          const result = this.impl.setTrustTokenKeyCommitments(params.arg_raw_commitments);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTrustTokenKeyCommitments FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTrustTokenState');
          const result = this.impl.clearTrustTokenState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearTrustTokenState FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateWebNotificationClick');
          const result = this.impl.simulateWebNotificationClick(params.arg_title, params.arg_action_index, params.arg_reply);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateWebNotificationClose');
          const result = this.impl.simulateWebNotificationClose(params.arg_title, params.arg_by_user);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.simulateWebContentIndexDelete');
          const result = this.impl.simulateWebContentIndexDelete(params.arg_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webTestRuntimeFlagsChanged');
          const result = this.impl.webTestRuntimeFlagsChanged(params.arg_changed_web_test_runtime_flags);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerIsolatedFileSystem');
          const result = this.impl.registerIsolatedFileSystem(params.arg_file_paths);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterIsolatedFileSystem FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dropPointerLock');
          const result = this.impl.dropPointerLock();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPointerLockWillFail');
          const result = this.impl.setPointerLockWillFail();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPointerLockWillRespondAsynchronously');
          const result = this.impl.setPointerLockWillRespondAsynchronously();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allowPointerLock');
          const result = this.impl.allowPointerLock();
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.workItemAdded');
          const result = this.impl.workItemAdded(params.arg_work_item);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestWorkItem');
          const result = this.impl.requestWorkItem();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.workQueueStatesChanged');
          const result = this.impl.workQueueStatesChanged(params.arg_changed_work_queue_states);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAcceptLanguages');
          const result = this.impl.setAcceptLanguages(params.arg_accept_languages);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRegisterProtocolHandlerMode');
          const result = this.impl.setRegisterProtocolHandlerMode(params.arg_mode);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAutoResize');
          const result = this.impl.enableAutoResize(params.arg_min_size, params.arg_max_size);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableAutoResize');
          const result = this.impl.disableAutoResize(params.arg_new_size);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.WebTestControlHostReceiver = mojo.internal.bindings.content.mojom.WebTestControlHostReceiver;

mojo.internal.bindings.content.mojom.WebTestControlHostPtr = mojo.internal.bindings.content.mojom.WebTestControlHostRemote;
mojo.internal.bindings.content.mojom.WebTestControlHostRequest = mojo.internal.bindings.content.mojom.WebTestControlHostPendingReceiver;


// Interface: NonAssociatedWebTestControlHost
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec, 'content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_Params', [
      mojo.internal.StructField('arg_hint', 0, 0, mojo.internal.bindings.blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NonAssociatedWebTestControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setLCPPNavigationHint(arg_hint) {
    return this.$.setLCPPNavigationHint(arg_hint);
  }
};

mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NonAssociatedWebTestControlHost', [
      { explicit: null },
    ]);
  }

  setLCPPNavigationHint(arg_hint) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec,
      null,
      [arg_hint],
      false);
  }

};

mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NonAssociatedWebTestControlHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NonAssociatedWebTestControlHost', [
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
        
        // Try Method 0: SetLCPPNavigationHint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLCPPNavigationHint (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLCPPNavigationHint');
          const result = this.impl.setLCPPNavigationHint(params.arg_hint);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostReceiver = mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostReceiver;

mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostPtr = mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostRemote;
mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostRequest = mojo.internal.bindings.content.mojom.NonAssociatedWebTestControlHostPendingReceiver;

