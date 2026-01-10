// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/web_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var skia = skia || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var blink = blink || {};

content.mojom.AutoResponseModeSpec = { $: mojo.internal.Enum() };
content.mojom.WorkItemSpec = { $: {} };
content.mojom.WebTestRunTestConfigurationSpec = { $: {} };
content.mojom.WebTestRendererDumpResultSpec = { $: {} };
content.mojom.WorkItemBackForwardSpec = { $: {} };
content.mojom.WorkItemLoadSpec = { $: {} };
content.mojom.WorkItemReloadSpec = { $: {} };
content.mojom.WorkItemLoadingScriptSpec = { $: {} };
content.mojom.WorkItemNonLoadingScriptSpec = { $: {} };
content.mojom.WebTestRenderFrame = {};
content.mojom.WebTestRenderFrame.$interfaceName = 'content.mojom.WebTestRenderFrame';
content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_StartTest_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec = { $: {} };
content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost = {};
content.mojom.WebTestControlHost.$interfaceName = 'content.mojom.WebTestControlHost';
content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_PrintMessage_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_Reload_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GoToOffset_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPermission_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec = { $: {} };
content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec = { $: {} };
content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec = { $: {} };
content.mojom.NonAssociatedWebTestControlHost = {};
content.mojom.NonAssociatedWebTestControlHost.$interfaceName = 'content.mojom.NonAssociatedWebTestControlHost';
content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec = { $: {} };

// Enum: AutoResponseMode
content.mojom.AutoResponseMode = {
  kNone: 0,
  kAutoAccept: 1,
  kAutoReject: 2,
};

// Union: WorkItem
mojo.internal.Union(
    content.mojom.WorkItemSpec, 'content.mojom.WorkItem', {
      'back_forward': {
        'ordinal': 0,
        'type': content.mojom.WorkItemBackForwardSpec,
        'nullable': false,
      },
      'load': {
        'ordinal': 1,
        'type': content.mojom.WorkItemLoadSpec,
        'nullable': false,
      },
      'reload': {
        'ordinal': 2,
        'type': content.mojom.WorkItemReloadSpec,
        'nullable': false,
      },
      'loading_script': {
        'ordinal': 3,
        'type': content.mojom.WorkItemLoadingScriptSpec,
        'nullable': false,
      },
      'non_loading_script': {
        'ordinal': 4,
        'type': content.mojom.WorkItemNonLoadingScriptSpec,
        'nullable': false,
      },
    });

// Struct: WebTestRunTestConfiguration
mojo.internal.Struct(
    content.mojom.WebTestRunTestConfigurationSpec, 'content.mojom.WebTestRunTestConfiguration', [
      mojo.internal.StructField('current_working_directory', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('temp_path', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('test_url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('allow_external_pages', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('expected_pixel_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('wpt_print_mode', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('protocol_mode', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WebTestRendererDumpResult
mojo.internal.Struct(
    content.mojom.WebTestRendererDumpResultSpec, 'content.mojom.WebTestRendererDumpResult', [
      mojo.internal.StructField('audio', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('layout', 8, 0, mojo_base.mojom.ByteStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('pixels', 16, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('actual_pixel_hash', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selection_rect', 32, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WorkItemBackForward
mojo.internal.Struct(
    content.mojom.WorkItemBackForwardSpec, 'content.mojom.WorkItemBackForward', [
      mojo.internal.StructField('distance', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WorkItemLoad
mojo.internal.Struct(
    content.mojom.WorkItemLoadSpec, 'content.mojom.WorkItemLoad', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WorkItemReload
mojo.internal.Struct(
    content.mojom.WorkItemReloadSpec, 'content.mojom.WorkItemReload', [
    ],
    [{version: 0, packedSize: 8}]);

// Struct: WorkItemLoadingScript
mojo.internal.Struct(
    content.mojom.WorkItemLoadingScriptSpec, 'content.mojom.WorkItemLoadingScript', [
      mojo.internal.StructField('script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WorkItemNonLoadingScript
mojo.internal.Struct(
    content.mojom.WorkItemNonLoadingScriptSpec, 'content.mojom.WorkItemNonLoadingScript', [
      mojo.internal.StructField('script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: WebTestRenderFrame
mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec, 'content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec, 'content.mojom.WebTestRenderFrame_DumpFrameLayout_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec, 'content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParams', [
      mojo.internal.StructField('frame_layout_dump', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec, 'content.mojom.WebTestRenderFrame_SetTestConfiguration_Params', [
      mojo.internal.StructField('config', 0, 0, content.mojom.WebTestRunTestConfigurationSpec, null, false, 0, undefined),
      mojo.internal.StructField('starting_test', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec, 'content.mojom.WebTestRenderFrame_OnDeactivated_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec, 'content.mojom.WebTestRenderFrame_OnReactivated_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec, 'content.mojom.WebTestRenderFrame_BlockTestUntilStart_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_StartTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_StartTest_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec, 'content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec, 'content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_Params', [
      mojo.internal.StructField('changed_layout_test_runtime_flags', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec, 'content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec, 'content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec, 'content.mojom.WebTestRenderFrame_ProcessWorkItem_Params', [
      mojo.internal.StructField('work_item', 0, 0, content.mojom.WorkItemSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec, 'content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_Params', [
      mojo.internal.StructField('work_queue_states', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.WebTestRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebTestRenderFrameRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebTestRenderFramePendingReceiver,
      handle);
    this.$ = new content.mojom.WebTestRenderFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.WebTestRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  synchronouslyCompositeAfterTest() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ParamsSpec,
      content.mojom.WebTestRenderFrame_SynchronouslyCompositeAfterTest_ResponseParamsSpec,
      []);
  }

  dumpFrameLayout() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ParamsSpec,
      content.mojom.WebTestRenderFrame_DumpFrameLayout_ResponseParamsSpec,
      []);
  }

  setTestConfiguration(config, starting_test) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.WebTestRenderFrame_SetTestConfiguration_ParamsSpec,
      null,
      [config, starting_test]);
  }

  onDeactivated() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.WebTestRenderFrame_OnDeactivated_ParamsSpec,
      null,
      []);
  }

  onReactivated() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.WebTestRenderFrame_OnReactivated_ParamsSpec,
      null,
      []);
  }

  blockTestUntilStart() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.WebTestRenderFrame_BlockTestUntilStart_ParamsSpec,
      null,
      []);
  }

  startTest() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.WebTestRenderFrame_StartTest_ParamsSpec,
      null,
      []);
  }

  setupRendererProcessForNonTestWindow() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.WebTestRenderFrame_SetupRendererProcessForNonTestWindow_ParamsSpec,
      null,
      []);
  }

  replicateWebTestRuntimeFlagsChanges(changed_layout_test_runtime_flags) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.WebTestRenderFrame_ReplicateWebTestRuntimeFlagsChanges_ParamsSpec,
      null,
      [changed_layout_test_runtime_flags]);
  }

  testFinishedFromSecondaryRenderer() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.WebTestRenderFrame_TestFinishedFromSecondaryRenderer_ParamsSpec,
      null,
      []);
  }

  resetRendererAfterWebTest() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.WebTestRenderFrame_ResetRendererAfterWebTest_ParamsSpec,
      null,
      []);
  }

  processWorkItem(work_item) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.WebTestRenderFrame_ProcessWorkItem_ParamsSpec,
      null,
      [work_item]);
  }

  replicateWorkQueueStates(work_queue_states) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.WebTestRenderFrame_ReplicateWorkQueueStates_ParamsSpec,
      null,
      [work_queue_states]);
  }

};

content.mojom.WebTestRenderFrame.getRemote = function() {
  let remote = new content.mojom.WebTestRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestRenderFrame',
    'context');
  return remote.$;
};

content.mojom.WebTestRenderFramePtr = content.mojom.WebTestRenderFrameRemote;
content.mojom.WebTestRenderFrameRequest = content.mojom.WebTestRenderFramePendingReceiver;


// Interface: WebTestControlHost
mojo.internal.Struct(
    content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec, 'content.mojom.WebTestControlHost_InitiateCaptureDump_Params', [
      mojo.internal.StructField('result', 0, 0, content.mojom.WebTestRendererDumpResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('capture_navigation_history', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('capture_pixels', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec, 'content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec, 'content.mojom.WebTestControlHost_PrintMessageToStderr_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_PrintMessage_ParamsSpec, 'content.mojom.WebTestControlHost_PrintMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec, 'content.mojom.WebTestControlHost_OverridePreferences_Params', [
      mojo.internal.StructField('web_preferences', 0, 0, blink.mojom.WebPreferencesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_Reload_ParamsSpec, 'content.mojom.WebTestControlHost_Reload_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec, 'content.mojom.WebTestControlHost_CheckForLeakedWindows_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec, 'content.mojom.WebTestControlHost_SetMainWindowHidden_Params', [
      mojo.internal.StructField('hidden', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec, 'content.mojom.WebTestControlHost_SetFrameWindowHidden_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('hidden', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GoToOffset_ParamsSpec, 'content.mojom.WebTestControlHost_GoToOffset_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec, 'content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_Params', [
      mojo.internal.StructField('event', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('argument', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec, 'content.mojom.WebTestControlHost_SetBluetoothManualChooser_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec, 'content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec, 'content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParams', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec, 'content.mojom.WebTestControlHost_SetPopupBlockingEnabled_Params', [
      mojo.internal.StructField('block_popups', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec, 'content.mojom.WebTestControlHost_LoadURLForFrame_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPermission_ParamsSpec, 'content.mojom.WebTestControlHost_SetPermission_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 24, 0, blink.mojom.PermissionStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('embedding_origin', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec, 'content.mojom.WebTestControlHost_BlockThirdPartyCookies_Params', [
      mojo.internal.StructField('block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec, 'content.mojom.WebTestControlHost_GetWritableDirectory_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec, 'content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParams', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec, 'content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec, 'content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_Params', [
      mojo.internal.StructField('disallowed_suffixes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec, 'content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec, 'content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec, 'content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_Params', [
      mojo.internal.StructField('raw_commitments', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec, 'content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec, 'content.mojom.WebTestControlHost_ClearTrustTokenState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec, 'content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebNotificationClick_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('reply', 8, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebNotificationClose_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('by_user', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec, 'content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec, 'content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_Params', [
      mojo.internal.StructField('changed_web_test_runtime_flags', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec, 'content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_Params', [
      mojo.internal.StructField('file_paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec, 'content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParams', [
      mojo.internal.StructField('filesystem_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec, 'content.mojom.WebTestControlHost_DropPointerLock_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec, 'content.mojom.WebTestControlHost_SetPointerLockWillFail_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec, 'content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec, 'content.mojom.WebTestControlHost_AllowPointerLock_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec, 'content.mojom.WebTestControlHost_WorkItemAdded_Params', [
      mojo.internal.StructField('work_item', 0, 0, content.mojom.WorkItemSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec, 'content.mojom.WebTestControlHost_RequestWorkItem_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec, 'content.mojom.WebTestControlHost_WorkQueueStatesChanged_Params', [
      mojo.internal.StructField('changed_work_queue_states', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec, 'content.mojom.WebTestControlHost_SetAcceptLanguages_Params', [
      mojo.internal.StructField('accept_languages', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec, 'content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_Params', [
      mojo.internal.StructField('mode', 0, 0, content.mojom.AutoResponseModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec, 'content.mojom.WebTestControlHost_EnableAutoResize_Params', [
      mojo.internal.StructField('min_size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec, 'content.mojom.WebTestControlHost_DisableAutoResize_Params', [
      mojo.internal.StructField('new_size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.WebTestControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebTestControlHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebTestControlHostPendingReceiver,
      handle);
    this.$ = new content.mojom.WebTestControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.WebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initiateCaptureDump(result, capture_navigation_history, capture_pixels) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.WebTestControlHost_InitiateCaptureDump_ParamsSpec,
      null,
      [result, capture_navigation_history, capture_pixels]);
  }

  testFinishedInSecondaryRenderer() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.WebTestControlHost_TestFinishedInSecondaryRenderer_ParamsSpec,
      null,
      []);
  }

  printMessageToStderr(message) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.WebTestControlHost_PrintMessageToStderr_ParamsSpec,
      null,
      [message]);
  }

  printMessage(message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.WebTestControlHost_PrintMessage_ParamsSpec,
      null,
      [message]);
  }

  overridePreferences(web_preferences) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.WebTestControlHost_OverridePreferences_ParamsSpec,
      null,
      [web_preferences]);
  }

  reload() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.WebTestControlHost_Reload_ParamsSpec,
      null,
      []);
  }

  checkForLeakedWindows() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.WebTestControlHost_CheckForLeakedWindows_ParamsSpec,
      null,
      []);
  }

  setMainWindowHidden(hidden) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.WebTestControlHost_SetMainWindowHidden_ParamsSpec,
      null,
      [hidden]);
  }

  setFrameWindowHidden(frame_token, hidden) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.WebTestControlHost_SetFrameWindowHidden_ParamsSpec,
      null,
      [frame_token, hidden]);
  }

  goToOffset(offset) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.WebTestControlHost_GoToOffset_ParamsSpec,
      null,
      [offset]);
  }

  sendBluetoothManualChooserEvent(event, argument) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.WebTestControlHost_SendBluetoothManualChooserEvent_ParamsSpec,
      null,
      [event, argument]);
  }

  setBluetoothManualChooser(enable) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.WebTestControlHost_SetBluetoothManualChooser_ParamsSpec,
      null,
      [enable]);
  }

  getBluetoothManualChooserEvents() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ParamsSpec,
      content.mojom.WebTestControlHost_GetBluetoothManualChooserEvents_ResponseParamsSpec,
      []);
  }

  setPopupBlockingEnabled(block_popups) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.WebTestControlHost_SetPopupBlockingEnabled_ParamsSpec,
      null,
      [block_popups]);
  }

  loadURLForFrame(url, frame_name) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.WebTestControlHost_LoadURLForFrame_ParamsSpec,
      null,
      [url, frame_name]);
  }

  simulateScreenOrientationChanged() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.mojom.WebTestControlHost_SimulateScreenOrientationChanged_ParamsSpec,
      null,
      []);
  }

  setPermission(name, status, origin, embedding_origin) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.mojom.WebTestControlHost_SetPermission_ParamsSpec,
      null,
      [name, status, origin, embedding_origin]);
  }

  blockThirdPartyCookies(block) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.mojom.WebTestControlHost_BlockThirdPartyCookies_ParamsSpec,
      null,
      [block]);
  }

  getWritableDirectory() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.mojom.WebTestControlHost_GetWritableDirectory_ParamsSpec,
      content.mojom.WebTestControlHost_GetWritableDirectory_ResponseParamsSpec,
      []);
  }

  setFilePathForMockFileDialog(path) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      content.mojom.WebTestControlHost_SetFilePathForMockFileDialog_ParamsSpec,
      null,
      [path]);
  }

  createSubresourceFilterRulesetFile(disallowed_suffixes) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ParamsSpec,
      content.mojom.WebTestControlHost_CreateSubresourceFilterRulesetFile_ResponseParamsSpec,
      [disallowed_suffixes]);
  }

  focusDevtoolsSecondaryWindow() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      content.mojom.WebTestControlHost_FocusDevtoolsSecondaryWindow_ParamsSpec,
      null,
      []);
  }

  setTrustTokenKeyCommitments(raw_commitments) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ParamsSpec,
      content.mojom.WebTestControlHost_SetTrustTokenKeyCommitments_ResponseParamsSpec,
      [raw_commitments]);
  }

  clearTrustTokenState() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      content.mojom.WebTestControlHost_ClearTrustTokenState_ParamsSpec,
      content.mojom.WebTestControlHost_ClearTrustTokenState_ResponseParamsSpec,
      []);
  }

  simulateWebNotificationClick(title, action_index, reply) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClick_ParamsSpec,
      null,
      [title, action_index, reply]);
  }

  simulateWebNotificationClose(title, by_user) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebNotificationClose_ParamsSpec,
      null,
      [title, by_user]);
  }

  simulateWebContentIndexDelete(id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      content.mojom.WebTestControlHost_SimulateWebContentIndexDelete_ParamsSpec,
      null,
      [id]);
  }

  webTestRuntimeFlagsChanged(changed_web_test_runtime_flags) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      content.mojom.WebTestControlHost_WebTestRuntimeFlagsChanged_ParamsSpec,
      null,
      [changed_web_test_runtime_flags]);
  }

  registerIsolatedFileSystem(file_paths) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ParamsSpec,
      content.mojom.WebTestControlHost_RegisterIsolatedFileSystem_ResponseParamsSpec,
      [file_paths]);
  }

  dropPointerLock() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      content.mojom.WebTestControlHost_DropPointerLock_ParamsSpec,
      null,
      []);
  }

  setPointerLockWillFail() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillFail_ParamsSpec,
      null,
      []);
  }

  setPointerLockWillRespondAsynchronously() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      content.mojom.WebTestControlHost_SetPointerLockWillRespondAsynchronously_ParamsSpec,
      null,
      []);
  }

  allowPointerLock() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      content.mojom.WebTestControlHost_AllowPointerLock_ParamsSpec,
      null,
      []);
  }

  workItemAdded(work_item) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      content.mojom.WebTestControlHost_WorkItemAdded_ParamsSpec,
      null,
      [work_item]);
  }

  requestWorkItem() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      content.mojom.WebTestControlHost_RequestWorkItem_ParamsSpec,
      null,
      []);
  }

  workQueueStatesChanged(changed_work_queue_states) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      content.mojom.WebTestControlHost_WorkQueueStatesChanged_ParamsSpec,
      null,
      [changed_work_queue_states]);
  }

  setAcceptLanguages(accept_languages) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      content.mojom.WebTestControlHost_SetAcceptLanguages_ParamsSpec,
      null,
      [accept_languages]);
  }

  setRegisterProtocolHandlerMode(mode) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      content.mojom.WebTestControlHost_SetRegisterProtocolHandlerMode_ParamsSpec,
      null,
      [mode]);
  }

  enableAutoResize(min_size, max_size) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      content.mojom.WebTestControlHost_EnableAutoResize_ParamsSpec,
      null,
      [min_size, max_size]);
  }

  disableAutoResize(new_size) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      content.mojom.WebTestControlHost_DisableAutoResize_ParamsSpec,
      null,
      [new_size]);
  }

};

content.mojom.WebTestControlHost.getRemote = function() {
  let remote = new content.mojom.WebTestControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestControlHost',
    'context');
  return remote.$;
};

content.mojom.WebTestControlHostPtr = content.mojom.WebTestControlHostRemote;
content.mojom.WebTestControlHostRequest = content.mojom.WebTestControlHostPendingReceiver;


// Interface: NonAssociatedWebTestControlHost
mojo.internal.Struct(
    content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec, 'content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_Params', [
      mojo.internal.StructField('hint', 0, 0, blink.mojom.LCPCriticalPathPredictorNavigationTimeHintSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.NonAssociatedWebTestControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.NonAssociatedWebTestControlHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NonAssociatedWebTestControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.NonAssociatedWebTestControlHostPendingReceiver,
      handle);
    this.$ = new content.mojom.NonAssociatedWebTestControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.NonAssociatedWebTestControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLCPPNavigationHint(hint) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.NonAssociatedWebTestControlHost_SetLCPPNavigationHint_ParamsSpec,
      null,
      [hint]);
  }

};

content.mojom.NonAssociatedWebTestControlHost.getRemote = function() {
  let remote = new content.mojom.NonAssociatedWebTestControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NonAssociatedWebTestControlHost',
    'context');
  return remote.$;
};

content.mojom.NonAssociatedWebTestControlHostPtr = content.mojom.NonAssociatedWebTestControlHostRemote;
content.mojom.NonAssociatedWebTestControlHostRequest = content.mojom.NonAssociatedWebTestControlHostPendingReceiver;

