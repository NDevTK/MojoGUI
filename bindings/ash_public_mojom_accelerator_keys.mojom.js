// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/accelerator_keys.mojom
// Module: ash.mojom

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
var ash = ash || {};
ash.mojom = ash.mojom || {};

ash.mojom.VKeySpec = { $: mojo.internal.Enum() };

// Enum: VKey
ash.mojom.VKey = {
  kCancel: 3,
  kBack: 8,
  kTab: 9,
  kBackTab: 10,
  kClear: 12,
  kReturn: 13,
  kShift: 16,
  kControl: 17,
  kMenu: 18,
  kPause: 19,
  kCapital: 20,
  kKana: 21,
  kHangul: 21,
  kPaste: 22,
  kJunja: 23,
  kFinal: 24,
  kHanja: 25,
  kKanji: 25,
  kEscape: 27,
  kConvert: 28,
  kNonConvert: 29,
  kAccept: 30,
  kModeChange: 31,
  kSpace: 32,
  kPrior: 33,
  kNext: 34,
  kEnd: 35,
  kHome: 36,
  kLeft: 37,
  kUp: 38,
  kRight: 39,
  kDown: 40,
  kSelect: 41,
  kPrint: 42,
  kExecute: 43,
  kSnapshot: 44,
  kInsert: 45,
  kDelete: 46,
  kHelp: 47,
  kNum0: 48,
  kNum1: 49,
  kNum2: 50,
  kNum3: 51,
  kNum4: 52,
  kNum5: 53,
  kNum6: 54,
  kNum7: 55,
  kNum8: 56,
  kNum9: 57,
  kKeyA: 65,
  kKeyB: 66,
  kKeyC: 67,
  kKeyD: 68,
  kKeyE: 69,
  kKeyF: 70,
  kKeyG: 71,
  kKeyH: 72,
  kKeyI: 73,
  kKeyJ: 74,
  kKeyK: 75,
  kKeyL: 76,
  kKeyM: 77,
  kKeyN: 78,
  kKeyO: 79,
  kKeyP: 80,
  kKeyQ: 81,
  kKeyR: 82,
  kKeyS: 83,
  kKeyT: 84,
  kKeyU: 85,
  kKeyV: 86,
  kKeyW: 87,
  kKeyX: 88,
  kKeyY: 89,
  kKeyZ: 90,
  kLWin: 91,
  kCommand: 91,
  kRWin: 92,
  kApps: 93,
  kSleep: 95,
  kNumpad0: 96,
  kNumpad1: 97,
  kNumpad2: 98,
  kNumpad3: 99,
  kNumpad4: 100,
  kNumpad5: 101,
  kNumpad6: 102,
  kNumpad7: 103,
  kNumpad8: 104,
  kNumpad9: 105,
  kMultiply: 106,
  kAdd: 107,
  kSeparator: 108,
  kSubtract: 109,
  kDecimal: 110,
  kDivide: 111,
  kF1: 112,
  kF2: 113,
  kF3: 114,
  kF4: 115,
  kF5: 116,
  kF6: 117,
  kF7: 118,
  kF8: 119,
  kF9: 120,
  kF10: 121,
  kF11: 122,
  kF12: 123,
  kF13: 124,
  kF14: 125,
  kF15: 126,
  kF16: 127,
  kF17: 128,
  kF18: 129,
  kF19: 130,
  kF20: 131,
  kF21: 132,
  kF22: 133,
  kF23: 134,
  kF24: 135,
  kNumLock: 144,
  kScroll: 145,
  kLShift: 160,
  kRShift: 161,
  kLControl: 162,
  kRControl: 163,
  kLMenu: 164,
  kRMenu: 165,
  kBrowserBack: 166,
  kBrowserForward: 167,
  kBrowserRefresh: 168,
  kBrowserStop: 169,
  kBrowserSearch: 170,
  kBrowserFavorites: 171,
  kBrowserHome: 172,
  kVolumeMute: 173,
  kVolumeDown: 174,
  kVolumeUp: 175,
  kMediaNextTrack: 176,
  kMediaPrevTrack: 177,
  kMediaStop: 178,
  kMediaPlayPause: 179,
  kMediaLaunchMail: 180,
  kMediaLaunchMediaSelect: 181,
  kMediaLaunchApp1: 182,
  kMediaLaunchApp2: 183,
  kOem1: 186,
  kOemPlus: 187,
  kOemComma: 188,
  kOemMinus: 189,
  kOemPeriod: 190,
  kOem2: 191,
  kOem3: 192,
  kOem4: 219,
  kOem5: 220,
  kOem6: 221,
  kOem7: 222,
  kOem8: 223,
  kOem102: 226,
  kOem103: 227,
  kOem104: 228,
  kProcessKey: 229,
  kPacket: 231,
  kOemAttn: 240,
  kOemFinish: 241,
  kOemCopy: 242,
  kDbeSbcsChar: 243,
  kDbeDbcsChar: 244,
  kOemBacktab: 245,
  kAttn: 246,
  kCrsel: 247,
  kExsel: 248,
  kEreof: 249,
  kPlay: 250,
  kZoom: 251,
  kNoName: 252,
  kPA1: 253,
  kOemClear: 254,
  kFunction: 255,
  kQuickInsert: 256,
  kAccessibility: 257,
  kDoNotDisturb: 258,
  kCameraAccessToggle: 259,
  kUnknown: 0,
  kWlan: 151,
  kPower: 152,
  kAssistant: 153,
  kSettings: 154,
  kPrivacyScreenToggle: 155,
  kMicrophoneMuteToggle: 159,
  kBrightnessDown: 216,
  kBrightnessUp: 217,
  kKbdBrightnessToggle: 184,
  kKbdBrightnessDown: 218,
  kKbdBrightnessUp: 232,
  kAltGr: 225,
  kCompose: 230,
  kMediaPlay: 233,
  kMediaPause: 234,
  kNew: 235,
  kClose: 236,
  kEmojiPicker: 237,
  kDictate: 238,
  kAllApplications: 239,
  kButton0: 65280,
  kButton1: 65281,
  kButton2: 65282,
  kButton3: 65283,
  kButton4: 65284,
  kButton5: 65285,
  kButton6: 65286,
  kButton7: 65287,
  kButton8: 65288,
  kButton9: 65289,
  kButtonA: 65290,
  kButtonB: 65291,
  kButtonC: 65292,
  kButtonX: 65293,
  kButtonY: 65294,
  kButtonZ: 65295,
};
