// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shortcut_customization_ui/mojom/shortcut_customization.mojom
// Module: ash.shortcut_customization.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.shortcut_customization = ash.shortcut_customization || {};
ash.shortcut_customization.mojom = ash.shortcut_customization.mojom || {};
var mojo_base = mojo_base || {};
var ui = ui || {};

ash.shortcut_customization.mojom.UserActionSpec = { $: mojo.internal.Enum() };
ash.shortcut_customization.mojom.EditDialogCompletedActionsSpec = { $: mojo.internal.Enum() };
ash.shortcut_customization.mojom.SubactionsSpec = { $: mojo.internal.Enum() };
ash.shortcut_customization.mojom.AcceleratorResultDataSpec = { $: {} };
ash.shortcut_customization.mojom.SimpleAcceleratorSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver = {};
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver.$interfaceName = 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver';
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.PolicyUpdatedObserver = {};
ash.shortcut_customization.mojom.PolicyUpdatedObserver.$interfaceName = 'ash.shortcut_customization.mojom.PolicyUpdatedObserver';
ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider = {};
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.$interfaceName = 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider';
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec = { $: {} };

// Enum: UserAction
ash.shortcut_customization.mojom.UserAction = {
  kOpenEditDialog: 0,
  kStartAddAccelerator: 1,
  kStartReplaceAccelerator: 2,
  kRemoveAccelerator: 3,
  kSuccessfulModification: 4,
  kResetAction: 5,
  kResetAll: 6,
};

// Enum: EditDialogCompletedActions
ash.shortcut_customization.mojom.EditDialogCompletedActions = {
  kNoAction: 0,
  kAdd: 1,
  kEdit: 2,
  kEditAdd: 3,
  kRemove: 4,
  kRemoveAdd: 5,
  kRemoveEdit: 6,
  kRemoveEditAdd: 7,
  kReset: 8,
  kResetAdd: 9,
  kResetEdit: 10,
  kResetEditAdd: 11,
  kResetRemove: 12,
  kResetRemoveAdd: 13,
  kResetRemoveEdit: 14,
  kResetRemoveEditAdd: 15,
};

// Enum: Subactions
ash.shortcut_customization.mojom.Subactions = {
  kNoErrorCancel: 0,
  kNoErrorSuccess: 1,
  kErrorCancel: 2,
  kErrorSuccess: 3,
};

// Struct: AcceleratorResultData
mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorResultDataSpec, 'ash.shortcut_customization.mojom.AcceleratorResultData', [
      mojo.internal.StructField('shortcut_name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('result', 8, 0, ash.mojom.AcceleratorConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SimpleAccelerator
mojo.internal.Struct(
    ash.shortcut_customization.mojom.SimpleAcceleratorSpec, 'ash.shortcut_customization.mojom.SimpleAccelerator', [
      mojo.internal.StructField('key_code', 0, 0, ash.mojom.VKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_state', 8, 0, ui.mojom.AcceleratorKeyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AcceleratorsUpdatedObserver
mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_Params', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.Map(ash.mojom.AcceleratorSourceSpec.$, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(ash.mojom.AcceleratorInfoSpec.$, false), false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcceleratorsUpdated(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec,
      null,
      [config],
      false);
  }

};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAcceleratorsUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAcceleratorsUpdated (0)');
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
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver_OnAcceleratorsUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAcceleratorsUpdated');
          const result = this.impl.onAcceleratorsUpdated(params.config);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverReceiver;

ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPtr = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRemote;
ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverRequest = ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverPendingReceiver;


// Interface: PolicyUpdatedObserver
mojo.internal.Struct(
    ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec, 'ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_Params', [
    ],
    [[0, 8]]);

ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.PolicyUpdatedObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.PolicyUpdatedObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCustomizationPolicyUpdated() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.shortcut_customization.mojom.PolicyUpdatedObserver.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.PolicyUpdatedObserver',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnCustomizationPolicyUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCustomizationPolicyUpdated (0)');
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
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.PolicyUpdatedObserver_OnCustomizationPolicyUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCustomizationPolicyUpdated');
          const result = this.impl.onCustomizationPolicyUpdated();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver = ash.shortcut_customization.mojom.PolicyUpdatedObserverReceiver;

ash.shortcut_customization.mojom.PolicyUpdatedObserverPtr = ash.shortcut_customization.mojom.PolicyUpdatedObserverRemote;
ash.shortcut_customization.mojom.PolicyUpdatedObserverRequest = ash.shortcut_customization.mojom.PolicyUpdatedObserverPendingReceiver;


// Interface: AcceleratorConfigurationProvider
mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParams', [
      mojo.internal.StructField('is_mutable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParams', [
      mojo.internal.StructField('is_customization_allowed_by_policy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParams', [
      mojo.internal.StructField('meta_key', 0, 0, ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_Params', [
      mojo.internal.StructField('action_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParams', [
      mojo.internal.StructField('accelerators', 0, 0, mojo.internal.Array(ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, mojo.internal.Map(ash.mojom.AcceleratorSourceSpec.$, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(ash.mojom.AcceleratorInfoSpec.$, false), false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.AcceleratorsUpdatedObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.PolicyUpdatedObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParams', [
      mojo.internal.StructField('layout_infos', 0, 0, mojo.internal.Array(ash.mojom.AcceleratorLayoutInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_Params', [
      mojo.internal.StructField('prevent_processing_accelerators', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('old_accelerator', 8, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_accelerator', 16, 0, ash.shortcut_customization.mojom.SimpleAcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.shortcut_customization.mojom.AcceleratorResultDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_Params', [
      mojo.internal.StructField('user_action', 0, 0, ash.shortcut_customization.mojom.UserActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_Params', [
      mojo.internal.StructField('category', 0, 0, ash.mojom.AcceleratorCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_Params', [
      mojo.internal.StructField('completed_actions', 0, 0, ash.shortcut_customization.mojom.EditDialogCompletedActionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_Params', [
      mojo.internal.StructField('subactions', 0, 0, ash.shortcut_customization.mojom.SubactionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_add', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec, 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParams', [
      mojo.internal.StructField('has_custom_accelerators', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isMutable(source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec,
      [source],
      false);
  }

  isCustomizationAllowedByPolicy() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getMetaKeyToDisplay() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      [],
      false);
  }

  getConflictAccelerator(source, action_id, accelerator) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator],
      false);
  }

  getDefaultAcceleratorsForId(action_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec,
      [action_id],
      false);
  }

  getAccelerators() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec,
      [],
      false);
  }

  addObserver(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  addPolicyObserver(observer) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getAcceleratorLayoutInfos() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec,
      [],
      false);
  }

  preventProcessingAccelerators(prevent_processing_accelerators) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec,
      [prevent_processing_accelerators],
      false);
  }

  addAccelerator(source, action_id, accelerator) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator],
      false);
  }

  removeAccelerator(source, action_id, accelerator) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec,
      [source, action_id, accelerator],
      false);
  }

  replaceAccelerator(source, action_id, old_accelerator, new_accelerator) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec,
      [source, action_id, old_accelerator, new_accelerator],
      false);
  }

  restoreDefault(source, action_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec,
      [source, action_id],
      false);
  }

  restoreAllDefaults() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec,
      [],
      false);
  }

  recordUserAction(user_action) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec,
      null,
      [user_action],
      false);
  }

  recordMainCategoryNavigation(category) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec,
      null,
      [category],
      false);
  }

  recordEditDialogCompletedActions(completed_actions) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec,
      null,
      [completed_actions],
      false);
  }

  recordAddOrEditSubactions(is_add, subactions) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec,
      null,
      [is_add, subactions],
      false);
  }

  hasCustomAccelerators() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec,
      ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec,
      [],
      false);
  }

};

ash.shortcut_customization.mojom.AcceleratorConfigurationProvider.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.AcceleratorConfigurationProvider',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: IsMutable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsMutable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsCustomizationAllowedByPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsCustomizationAllowedByPolicy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetMetaKeyToDisplay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMetaKeyToDisplay (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetConflictAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetConflictAccelerator (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetDefaultAcceleratorsForId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultAcceleratorsForId (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAccelerators
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAccelerators (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddPolicyObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPolicyObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetAcceleratorLayoutInfos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAcceleratorLayoutInfos (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PreventProcessingAccelerators
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreventProcessingAccelerators (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AddAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAccelerator (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RemoveAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveAccelerator (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ReplaceAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplaceAccelerator (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RestoreDefault
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreDefault (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RestoreAllDefaults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreAllDefaults (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RecordUserAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordUserAction (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RecordMainCategoryNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordMainCategoryNavigation (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RecordEditDialogCompletedActions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordEditDialogCompletedActions (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: RecordAddOrEditSubactions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordAddOrEditSubactions (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: HasCustomAccelerators
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasCustomAccelerators (19)');
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
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isMutable');
          const result = this.impl.isMutable(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsMutable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isCustomizationAllowedByPolicy');
          const result = this.impl.isCustomizationAllowedByPolicy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_IsCustomizationAllowedByPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMetaKeyToDisplay');
          const result = this.impl.getMetaKeyToDisplay();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetMetaKeyToDisplay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getConflictAccelerator');
          const result = this.impl.getConflictAccelerator(params.source, params.action_id, params.accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetConflictAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDefaultAcceleratorsForId');
          const result = this.impl.getDefaultAcceleratorsForId(params.action_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetDefaultAcceleratorsForId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAccelerators');
          const result = this.impl.getAccelerators();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAccelerators_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddPolicyObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addPolicyObserver');
          const result = this.impl.addPolicyObserver(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAcceleratorLayoutInfos');
          const result = this.impl.getAcceleratorLayoutInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_GetAcceleratorLayoutInfos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.preventProcessingAccelerators');
          const result = this.impl.preventProcessingAccelerators(params.prevent_processing_accelerators);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_PreventProcessingAccelerators_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addAccelerator');
          const result = this.impl.addAccelerator(params.source, params.action_id, params.accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_AddAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeAccelerator');
          const result = this.impl.removeAccelerator(params.source, params.action_id, params.accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RemoveAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.replaceAccelerator');
          const result = this.impl.replaceAccelerator(params.source, params.action_id, params.old_accelerator, params.new_accelerator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_ReplaceAccelerator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreDefault');
          const result = this.impl.restoreDefault(params.source, params.action_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreDefault_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreAllDefaults');
          const result = this.impl.restoreAllDefaults();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RestoreAllDefaults_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordUserAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordUserAction');
          const result = this.impl.recordUserAction(params.user_action);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordMainCategoryNavigation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordMainCategoryNavigation');
          const result = this.impl.recordMainCategoryNavigation(params.category);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordEditDialogCompletedActions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordEditDialogCompletedActions');
          const result = this.impl.recordEditDialogCompletedActions(params.completed_actions);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_RecordAddOrEditSubactions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordAddOrEditSubactions');
          const result = this.impl.recordAddOrEditSubactions(params.is_add, params.subactions);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasCustomAccelerators');
          const result = this.impl.hasCustomAccelerators();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.AcceleratorConfigurationProvider_HasCustomAccelerators_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderReceiver;

ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPtr = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRemote;
ash.shortcut_customization.mojom.AcceleratorConfigurationProviderRequest = ash.shortcut_customization.mojom.AcceleratorConfigurationProviderPendingReceiver;

