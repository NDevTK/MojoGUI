// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/keyboard_layout.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.LayoutKeyFunctionSpec = { $: mojo.internal.Enum() };
remoting.mojom.KeyActionSpec = { $: {} };
remoting.mojom.KeyBehaviorSpec = { $: {} };
remoting.mojom.KeyboardLayoutSpec = { $: {} };

// Enum: LayoutKeyFunction
remoting.mojom.LayoutKeyFunction = {
  kUnknown: 0,
  kControl: 1,
  kAlt: 2,
  kShift: 3,
  kMeta: 4,
  kAltGr: 5,
  kMod5: 6,
  kCompose: 7,
  kNumLock: 8,
  kCapsLock: 9,
  kScrollLock: 10,
  kBackspace: 11,
  kEnter: 12,
  kTab: 13,
  kInsert: 14,
  kDelete: 15,
  kHome: 16,
  kEnd: 17,
  kPageUp: 18,
  kPageDown: 19,
  kClear: 20,
  kArrowUp: 21,
  kArrowDown: 22,
  kArrowLeft: 23,
  kArrowRight: 24,
  kF1: 25,
  kF2: 26,
  kF3: 27,
  kF4: 28,
  kF5: 29,
  kF6: 30,
  kF7: 31,
  kF8: 32,
  kF9: 33,
  kF10: 34,
  kF11: 35,
  kF12: 36,
  kF13: 37,
  kF14: 38,
  kF15: 39,
  kF16: 40,
  kF17: 41,
  kF18: 42,
  kF19: 43,
  kF20: 44,
  kF21: 45,
  kF22: 46,
  kF23: 47,
  kF24: 48,
  kEscape: 49,
  kContextMenu: 50,
  kPause: 51,
  kPrintScreen: 52,
  kHankakuZenkakuKanji: 53,
  kHenkan: 54,
  kMuhenkan: 55,
  kKatakanaHiriganaRomaji: 56,
  kKana: 57,
  kEisu: 58,
  kHanYeong: 59,
  kHanja: 60,
  kOption: 61,
  kCommand: 62,
  kSearch: 63,
};

// Union: KeyAction
mojo.internal.Union(
    remoting.mojom.KeyActionSpec, 'remoting.mojom.KeyAction', {
      'function': {
        'ordinal': 0,
        'type': remoting.mojom.LayoutKeyFunctionSpec.$,
        'nullable': false,
      },
      'character': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: KeyBehavior
mojo.internal.Struct(
    remoting.mojom.KeyBehaviorSpec, 'remoting.mojom.KeyBehavior', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Map(mojo.internal.Uint32, remoting.mojom.KeyActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: KeyboardLayout
mojo.internal.Struct(
    remoting.mojom.KeyboardLayoutSpec, 'remoting.mojom.KeyboardLayout', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Map(mojo.internal.Uint32, remoting.mojom.KeyBehaviorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
