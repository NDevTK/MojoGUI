// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/user_data_japanese_dictionary.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Enum: JpPosType
ash.ime.mojom.JpPosType = {
  kNoPos: 0,
  kNoun: 1,
  kAbbreviation: 2,
  kSuggestionOnly: 3,
  kProperNoun: 4,
  kPersonalName: 5,
  kFamilyName: 6,
  kFirstName: 7,
  kOrganizationName: 8,
  kPlaceName: 9,
  kSaIrregularConjugationNoun: 10,
  kAdjectiveVerbalNoun: 11,
  kNumber: 12,
  kAlphabet: 13,
  kSymbol: 14,
  kEmoticon: 15,
  kAdverb: 16,
  kPrenounAdjectival: 17,
  kConjunction: 18,
  kInterjection: 19,
  kPrefix: 20,
  kCounterSuffix: 21,
  kGenericSuffix: 22,
  kPersonNameSuffix: 23,
  kPlaceNameSuffix: 24,
  kWaGroup1Verb: 25,
  kKaGroup1Verb: 26,
  kSaGroup1Verb: 27,
  kTaGroup1Verb: 28,
  kNaGroup1Verb: 29,
  kMaGroup1Verb: 30,
  kRaGroup1Verb: 31,
  kGaGroup1Verb: 32,
  kBaGroup1Verb: 33,
  kHaGroup1Verb: 34,
  kGroup2Verb: 35,
  kKuruGroup3Verb: 36,
  kSuruGroup3Verb: 37,
  kZuruGroup3Verb: 38,
  kRuGroup3Verb: 39,
  kAdjective: 40,
  kSentenceEndingParticle: 41,
  kPunctuation: 42,
  kFreeStandingWord: 43,
  kSuppressionWord: 44,
};
ash.ime.mojom.JpPosTypeSpec = { $: mojo.internal.Enum() };

// Struct: JapaneseDictionaryEntry
ash.ime.mojom.JapaneseDictionaryEntrySpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.JapaneseDictionaryEntry',
      packedSize: 40,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pos', packedOffset: 24, packedBitOffset: 0, type: ash.ime.mojom.JpPosTypeSpec, nullable: false, minVersion: 0 },
        { name: 'comment', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: JapaneseDictionary
ash.ime.mojom.JapaneseDictionarySpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.JapaneseDictionary',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'entries', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.ime.mojom.JapaneseDictionaryEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
