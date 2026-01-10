// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/mojo_echo.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Union: TestUnion
content.mojom.TestUnionSpec = { $: mojo.internal.Union(
    'content.mojom.TestUnion', {
      'bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'int32_value': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
      'string_value': {
        'ordinal': 2,
        'type': mojo.internal.String,
      }},
    })
};

// Union: NestedUnion
content.mojom.NestedUnionSpec = { $: mojo.internal.Union(
    'content.mojom.NestedUnion', {
      'int8_value': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
      }},
      'union_value': {
        'ordinal': 1,
        'type': content.mojom.TestUnionSpec,
      }},
    })
};

// Interface: MojoEcho
content.mojom.MojoEcho = {};

content.mojom.MojoEchoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MojoEchoRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MojoEcho';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MojoEchoPendingReceiver,
      handle);
    this.$ = new content.mojom.MojoEchoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.MojoEchoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoBoolFromUnion(test_union) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoInt32FromUnion(test_union) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoStringFromUnion(test_union) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoBoolAsUnion(value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec,
      [value]);
  }

  echoInt32AsUnion(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec,
      [value]);
  }

  echoStringAsUnion(value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec,
      [value]);
  }

  echoNullFromOptionalUnion(test_union) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec,
      null,
      [test_union]);
  }

  echoBoolFromOptionalUnion(test_union) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoInt32FromOptionalUnion(test_union) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoStringFromOptionalUnion(test_union) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoNullAsOptionalUnion() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec,
      []);
  }

  echoBoolAsOptionalUnion(value) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec,
      [value]);
  }

  echoInt32AsOptionalUnion(value) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec,
      [value]);
  }

  echoStringAsOptionalUnion(value) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec,
      [value]);
  }

  echoInt8FromNestedUnion(test_union) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoBoolFromNestedUnion(test_union) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoStringFromNestedUnion(test_union) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoInt8AsNestedUnion(value) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec,
      [value]);
  }

  echoBoolAsNestedUnion(value) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec,
      [value]);
  }

  echoStringAsNestedUnion(value) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec,
      [value]);
  }

  echoNullFromOptionalNestedUnion(test_union) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec,
      null,
      [test_union]);
  }

  echoInt8FromOptionalNestedUnion(test_union) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoBoolFromOptionalNestedUnion(test_union) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoStringFromOptionalNestedUnion(test_union) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union]);
  }

  echoNullAsOptionalNestedUnion() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec,
      []);
  }

  echoInt8AsOptionalNestedUnion(value) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec,
      [value]);
  }

  echoBoolAsOptionalNestedUnion(value) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec,
      [value]);
  }

  echoStringAsOptionalNestedUnion(value) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec,
      [value]);
  }

  echoBoolArray(values) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      content.mojom.MojoEcho_EchoBoolArray_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec,
      [values]);
  }

};

content.mojom.MojoEcho.getRemote = function() {
  let remote = new content.mojom.MojoEchoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MojoEcho',
    'context');
  return remote.$;
};

// ParamsSpec for EchoBoolFromUnion
content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolFromUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoInt32FromUnion
content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt32FromUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoStringFromUnion
content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringFromUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoBoolAsUnion
content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolAsUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoInt32AsUnion
content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt32AsUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoStringAsUnion
content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringAsUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoNullFromOptionalUnion
content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoNullFromOptionalUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoBoolFromOptionalUnion
content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolFromOptionalUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoInt32FromOptionalUnion
content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt32FromOptionalUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoStringFromOptionalUnion
content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringFromOptionalUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoNullAsOptionalUnion
content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoNullAsOptionalUnion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoBoolAsOptionalUnion
content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolAsOptionalUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoInt32AsOptionalUnion
content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt32AsOptionalUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoStringAsOptionalUnion
content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringAsOptionalUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.TestUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoInt8FromNestedUnion
content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt8FromNestedUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoBoolFromNestedUnion
content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolFromNestedUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoStringFromNestedUnion
content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringFromNestedUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoInt8AsNestedUnion
content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt8AsNestedUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoBoolAsNestedUnion
content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolAsNestedUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoStringAsNestedUnion
content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringAsNestedUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoNullFromOptionalNestedUnion
content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoNullFromOptionalNestedUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoInt8FromOptionalNestedUnion
content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt8FromOptionalNestedUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoBoolFromOptionalNestedUnion
content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolFromOptionalNestedUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoStringFromOptionalNestedUnion
content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringFromOptionalNestedUnion_Params',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EchoNullAsOptionalNestedUnion
content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoNullAsOptionalNestedUnion_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoInt8AsOptionalNestedUnion
content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoInt8AsOptionalNestedUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoBoolAsOptionalNestedUnion
content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolAsOptionalNestedUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoStringAsOptionalNestedUnion
content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoStringAsOptionalNestedUnion_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'test_union', packedOffset: 0, packedBitOffset: 0, type: content.mojom.NestedUnionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EchoBoolArray
content.mojom.MojoEcho_EchoBoolArray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.MojoEcho.EchoBoolArray_Params',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.MojoEchoPtr = content.mojom.MojoEchoRemote;
content.mojom.MojoEchoRequest = content.mojom.MojoEchoPendingReceiver;

