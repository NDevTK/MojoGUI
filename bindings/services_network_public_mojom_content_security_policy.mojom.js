// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/content_security_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ContentSecurityPolicyType
network.mojom.ContentSecurityPolicyType = {
  kReport: 0,
  kEnforce: 1,
};

// Enum: ContentSecurityPolicySource
network.mojom.ContentSecurityPolicySource = {
  kHTTP: 0,
  kMeta: 1,
};

// Enum: CSPDisposition
network.mojom.CSPDisposition = {
  CHECK: 0,
  DO_NOT_CHECK: 1,
};

// Enum: CSPDirectiveName
network.mojom.CSPDirectiveName = {
  Unknown: 0,
  BaseURI: 1,
  BlockAllMixedContent: 2,
  ChildSrc: 3,
  ConnectSrc: 4,
  DefaultSrc: 5,
  FencedFrameSrc: 6,
  FontSrc: 7,
  FormAction: 8,
  FrameAncestors: 9,
  FrameSrc: 10,
  ImgSrc: 11,
  ManifestSrc: 12,
  MediaSrc: 13,
  ObjectSrc: 14,
  ReportTo: 15,
  ReportURI: 16,
  RequireTrustedTypesFor: 17,
  Sandbox: 18,
  ScriptSrc: 19,
  ScriptSrcV2: 20,
  ScriptSrcAttr: 21,
  ScriptSrcElem: 22,
  StyleSrc: 23,
  StyleSrcAttr: 24,
  StyleSrcElem: 25,
  TreatAsPublicAddress: 26,
  TrustedTypes: 27,
  UpgradeInsecureRequests: 28,
  WorkerSrc: 29,
};

// Enum: CSPRequireTrustedTypesFor
network.mojom.CSPRequireTrustedTypesFor = {
  None: 0,
  Script: 1,
};

// Struct: ContentSecurityPolicyHeader
network.mojom.ContentSecurityPolicyHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ContentSecurityPolicyHeader',
      packedSize: 16,
      fields: [
        { name: 'kHTTP', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSPSource
network.mojom.CSPSourceSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPSource',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSPSourceList
network.mojom.CSPSourceListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPSourceList',
      packedSize: 16,
      fields: [
        { name: 'report_hash_algorithm', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSPTrustedTypes
network.mojom.CSPTrustedTypesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPTrustedTypes',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentSecurityPolicy
network.mojom.ContentSecurityPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ContentSecurityPolicy',
      packedSize: 16,
      fields: [
        { name: 'parsing_errors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CSPViolation
network.mojom.CSPViolationSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CSPViolation',
      packedSize: 16,
      fields: [
        { name: 'source_location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
