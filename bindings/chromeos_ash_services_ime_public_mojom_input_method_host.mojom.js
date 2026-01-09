// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_host.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Enum: CommitTextCursorBehavior
ash.ime.mojom.CommitTextCursorBehavior = {
  kMoveCursorBeforeText: 0,
};

// Enum: CompositionSpanStyle
ash.ime.mojom.CompositionSpanStyle = {
  kNone: 0,
};

// Enum: InputMethodApiOperation
ash.ime.mojom.InputMethodApiOperation = {
  kCommitText: 0,
  kSetCompositionText: 1,
  kDeleteSurroundingText: 2,
};

// Enum: KoreanAction
ash.ime.mojom.KoreanAction = {
  kHanjaKey: 0,
  kHangeulKey: 1,
  kComposeOutOfOrder: 2,
};

// Enum: HistogramBucketType
ash.ime.mojom.HistogramBucketType = {
  kLinear: 0,
};

// Interface: InputMethodHost
ash.ime.mojom.InputMethodHost = {};

ash.ime.mojom.InputMethodHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputMethodHostRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputMethodHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputMethodHostPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputMethodHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputMethodHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.ime.mojom.InputMethodHost.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputMethodHost',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.ime.mojom.InputMethodHostPtr = ash.ime.mojom.InputMethodHostRemote;
ash.ime.mojom.InputMethodHostRequest = ash.ime.mojom.InputMethodHostPendingReceiver;

