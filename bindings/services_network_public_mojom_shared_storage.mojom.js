// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_storage.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.SharedStorageModifierMethodSpec = { $: {} };
network.mojom.SharedStorageKeyArgumentSpec = { $: {} };
network.mojom.SharedStorageValueArgumentSpec = { $: {} };
network.mojom.LockNameSpec = { $: {} };
network.mojom.SharedStorageSetMethodSpec = { $: {} };
network.mojom.SharedStorageAppendMethodSpec = { $: {} };
network.mojom.SharedStorageDeleteMethodSpec = { $: {} };
network.mojom.SharedStorageClearMethodSpec = { $: {} };
network.mojom.SharedStorageModifierMethodWithOptionsSpec = { $: {} };
network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec = { $: {} };

// Union: SharedStorageModifierMethod
mojo.internal.Union(
    network.mojom.SharedStorageModifierMethodSpec, 'network.mojom.SharedStorageModifierMethod', {
      'set_method': {
        'ordinal': 0,
        'type': network.mojom.SharedStorageSetMethodSpec.$,
        'nullable': false,
      },
      'append_method': {
        'ordinal': 1,
        'type': network.mojom.SharedStorageAppendMethodSpec.$,
        'nullable': false,
      },
      'delete_method': {
        'ordinal': 2,
        'type': network.mojom.SharedStorageDeleteMethodSpec.$,
        'nullable': false,
      },
      'clear_method': {
        'ordinal': 3,
        'type': network.mojom.SharedStorageClearMethodSpec.$,
        'nullable': false,
      },
    });

// Struct: SharedStorageKeyArgument
mojo.internal.Struct(
    network.mojom.SharedStorageKeyArgumentSpec, 'network.mojom.SharedStorageKeyArgument', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedStorageValueArgument
mojo.internal.Struct(
    network.mojom.SharedStorageValueArgumentSpec, 'network.mojom.SharedStorageValueArgument', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LockName
mojo.internal.Struct(
    network.mojom.LockNameSpec, 'network.mojom.LockName', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedStorageSetMethod
mojo.internal.Struct(
    network.mojom.SharedStorageSetMethodSpec, 'network.mojom.SharedStorageSetMethod', [
      mojo.internal.StructField('key', 0, 0, network.mojom.SharedStorageKeyArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, network.mojom.SharedStorageValueArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ignore_if_present', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SharedStorageAppendMethod
mojo.internal.Struct(
    network.mojom.SharedStorageAppendMethodSpec, 'network.mojom.SharedStorageAppendMethod', [
      mojo.internal.StructField('key', 0, 0, network.mojom.SharedStorageKeyArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, network.mojom.SharedStorageValueArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedStorageDeleteMethod
mojo.internal.Struct(
    network.mojom.SharedStorageDeleteMethodSpec, 'network.mojom.SharedStorageDeleteMethod', [
      mojo.internal.StructField('key', 0, 0, network.mojom.SharedStorageKeyArgumentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SharedStorageClearMethod
mojo.internal.Struct(
    network.mojom.SharedStorageClearMethodSpec, 'network.mojom.SharedStorageClearMethod', [
    ],
    [[0, 8]]);

// Struct: SharedStorageModifierMethodWithOptions
mojo.internal.Struct(
    network.mojom.SharedStorageModifierMethodWithOptionsSpec, 'network.mojom.SharedStorageModifierMethodWithOptions', [
      mojo.internal.StructField('method', 0, 0, network.mojom.SharedStorageModifierMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('with_lock', 8, 0, network.mojom.LockNameSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedStorageBatchUpdateMethodsArgument
mojo.internal.Struct(
    network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec, 'network.mojom.SharedStorageBatchUpdateMethodsArgument', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(network.mojom.SharedStorageModifierMethodWithOptionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
