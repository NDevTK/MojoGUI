/**
 * Chromium Result Codes
 * 
 * Maps Chromium process exit codes to human-readable names with explanatory notes.
 * Based on content/public/common/result_codes.h
 * 
 * @see https://source.chromium.org/chromium/chromium/src/+/main:content/public/common/result_codes.h
 */

export const RESULT_CODES = {
    0: {
        name: 'RESULT_CODE_NORMAL_EXIT',
        note: 'Process exited normally.'
    },
    1: {
        name: 'RESULT_CODE_KILLED',
        note: 'Process was killed by user or system.'
    },
    2: {
        name: 'RESULT_CODE_HUNG',
        note: 'Process hung and was terminated due to unresponsiveness.'
    },
    3: {
        name: 'RESULT_CODE_KILLED_BAD_MESSAGE',
        note: 'A bad IPC message caused termination. ' +
            'This usually means invalid message format, wrong ordinals, or calling an associated interface without proper setup. ' +
            'This is NOT a security vulnerability - it indicates the Mojo message validation is working correctly.'
    },
    4: {
        name: 'RESULT_CODE_GPU_DEAD_ON_ARRIVAL',
        note: 'GPU process exited because initialization failed.'
    },
    5: {
        name: 'CHROME_RESULT_CODE_INVALID_CMDLINE_URL',
        note: 'An invalid command line url was given.'
    },
    6: {
        name: 'CHROME_RESULT_CODE_BAD_PROCESS_TYPE',
        note: 'The process is of an unknown type.'
    },
    7: {
        name: 'CHROME_RESULT_CODE_MISSING_DATA',
        note: 'A critical chrome file is missing.'
    },
    8: {
        name: 'CHROME_RESULT_CODE_SHELL_INTEGRATION_FAILED',
        note: 'Failed to make Chrome default browser.'
    },
    9: {
        name: 'CHROME_RESULT_CODE_MACHINE_LEVEL_INSTALL_EXISTS',
        note: 'Machine level install exists.'
    },
    10: {
        name: 'CHROME_RESULT_CODE_UNINSTALL_CHROME_ALIVE',
        note: 'Uninstall detected another chrome instance.'
    },
    11: {
        name: 'CHROME_RESULT_CODE_UNINSTALL_USER_CANCEL',
        note: 'The user changed their mind during uninstall.'
    },
    12: {
        name: 'CHROME_RESULT_CODE_UNINSTALL_DELETE_PROFILE',
        note: 'Delete profile as well during uninstall.'
    },
    13: {
        name: 'CHROME_RESULT_CODE_UNSUPPORTED_PARAM',
        note: 'Command line parameter is not supported.'
    },
    14: {
        name: 'CHROME_RESULT_CODE_IMPORTER_HUNG',
        note: 'Browser import hung and was killed.'
    },
    15: {
        name: 'CHROME_RESULT_CODE_RESPAWN_FAILED',
        note: 'Trying to restart the browser we crashed.'
    },
    16: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_EXP1',
        note: 'Generic experiment exit code 1.'
    },
    17: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_EXP2',
        note: 'Generic experiment exit code 2.'
    },
    18: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_EXP3',
        note: 'Generic experiment exit code 3.'
    },
    19: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_EXP4',
        note: 'Generic experiment exit code 4.'
    },
    20: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_CANCEL',
        note: 'User canceled run, does not count as active usage.'
    },
    21: {
        name: 'CHROME_RESULT_CODE_PROFILE_IN_USE',
        note: 'The profile was in use on another host.'
    },
    22: {
        name: 'CHROME_RESULT_CODE_PACK_EXTENSION_ERROR',
        note: 'Failed to pack an extension via the cmd line.'
    },
    23: {
        name: 'CHROME_RESULT_CODE_UNINSTALL_EXTENSION_ERROR',
        note: 'Failed to silently uninstall an extension.'
    },
    24: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_PROCESS_NOTIFIED',
        note: 'The browser process exited early by passing the command line to another running browser.'
    },
    25: {
        name: 'CHROME_RESULT_CODE_NOTUSED_1',
        note: 'A dummy value we should not use.'
    },
    26: {
        name: 'CHROME_RESULT_CODE_INSTALL_FROM_WEBSTORE_ERROR_2',
        note: 'Failed to install item from webstore (obsolete flag).'
    },
    27: {
        name: 'CHROME_RESULT_CODE_NOTUSED_2',
        note: 'A dummy value we should not use.'
    },
    28: {
        name: 'CHROME_RESULT_CODE_EULA_REFUSED',
        note: 'Returned when the user has not yet accepted the EULA.'
    },
    29: {
        name: 'CHROME_RESULT_CODE_SXS_MIGRATION_FAILED_NOT_USED',
        note: 'Failed to migrate user data directory for side-by-side package support.'
    },
    30: {
        name: 'CHROME_RESULT_CODE_ACTION_DISALLOWED_BY_POLICY',
        note: 'The action is not allowed by a policy.'
    },
    31: {
        name: 'CHROME_RESULT_CODE_INVALID_SANDBOX_STATE',
        note: 'An browser process was sandboxed. This should never happen.'
    },
    32: {
        name: 'CHROME_RESULT_CODE_CLOUD_POLICY_ENROLLMENT_FAILED',
        note: 'Cloud policy enrollment is failed or given up by user.'
    },
    33: {
        name: 'CHROME_RESULT_CODE_DOWNGRADE_AND_RELAUNCH',
        note: 'Chrome was downgraded since the last launch. Perform downgrade processing and relaunch.'
    },
    34: {
        name: 'CHROME_RESULT_CODE_GPU_EXIT_ON_CONTEXT_LOST',
        note: 'The GPU process was terminated due to context lost.'
    },
    35: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_UPGRADE_RELAUNCHED',
        note: 'Chrome detected a new version, renamed files, and launched it.'
    },
    36: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_PACK_EXTENSION_SUCCESS',
        note: 'An early startup command was executed and the browser must exit.'
    },
    37: {
        name: 'CHROME_RESULT_CODE_SYSTEM_RESOURCE_EXHAUSTED',
        note: 'The browser process exited because system resource are exhausted.'
    },
    38: {
        name: 'CHROME_RESULT_CODE_NORMAL_EXIT_AUTO_DE_ELEVATED',
        note: 'The browser process exited because it was re-launched without elevation.'
    },
    39: {
        name: 'CHROME_RESULT_CODE_TERMINATED_BY_OTHER_PROCESS_ON_COMMIT_FAILURE',
        note: 'PartitionAlloc terminated this process due to a commit failure in another process.'
    },
    // Unix Signals (128 + Signal)
    131: { name: 'SIGQUIT', note: 'Terminal quit signal.' },
    132: { name: 'SIGILL', note: 'Illegal instruction.' },
    133: { name: 'SIGTRAP', note: 'Trace/breakpoint trap.' },
    134: { name: 'SIGABRT', note: 'Process aborted.' },
    135: { name: 'SIGBUS', note: 'Bus error (7).' },
    136: { name: 'SIGFPE', note: 'Floating point exception.' },
    137: { name: 'SIGKILL', note: 'Kill signal.' },
    138: { name: 'SIGBUS', note: 'Bus error (10).' },
    139: { name: 'SIGSEGV', note: 'Segmentation fault.' },
    140: { name: 'SIGSYS', note: 'Bad system call.' },
    // Common System Codes
    258: { name: 'WAIT_TIMEOUT', note: 'The wait operation timed out.' },
    // Sandbox Fatal Codes
    7006: { name: 'SBOX_FATAL_INTEGRITY', note: 'Sandbox integrity violation.' },
    7007: { name: 'SBOX_FATAL_DROPTOKEN', note: 'Sandbox token drop failure.' },
    7008: { name: 'SBOX_FATAL_FLUSHANDLES', note: 'Sandbox handle flush failure.' },
    7009: { name: 'SBOX_FATAL_CACHEDISABLE', note: 'Sandbox cache disable failure.' },
    7010: { name: 'SBOX_FATAL_CLOSEHANDLES', note: 'Sandbox close handles failure.' },
    7011: { name: 'SBOX_FATAL_MITIGATION', note: 'Sandbox mitigation failure.' },
    7012: { name: 'SBOX_FATAL_MEMORY_EXCEEDED', note: 'Sandbox memory limit exceeded.' },
    7013: { name: 'SBOX_FATAL_WARMUP', note: 'Sandbox warmup failure.' },
    7014: { name: 'SBOX_FATAL_BROKER_SHUTDOWN_HUNG', note: 'Sandbox broker shutdown hung.' },
    // Crashpad Codes
    36861: { name: 'Crashpad_NotConnectedToHandler', note: 'Crashpad failed to connect to handler.' },
    36862: { name: 'Crashpad_FailedToCaptureProcess', note: 'Crashpad failed to capture process.' },
    36863: { name: 'Crashpad_HandlerDidNotRespond', note: 'Crashpad handler did not respond.' },
    85436397: { name: 'Crashpad_SimulatedCrash', note: 'Simulated crash for testing.' },
    // C++ Exceptions and OOM
    529697949: { name: 'CPP_EH_EXCEPTION', note: 'C++ exception handled.' },
    533692099: { name: 'STATUS_GUARD_PAGE_VIOLATION', note: 'Guard page violation.' },
    536870904: { name: 'Out of Memory', note: 'Process ran out of memory.' },
    // Windows Common Facility Codes
    1066598273: { name: 'FACILITY_VISUALCPP/ERROR_PROC_NOT_FOUND', note: 'Procedure not found.' },
    1066598274: { name: 'FACILITY_VISUALCPP/ERROR_MOD_NOT_FOUND', note: 'Module not found.' },
    // Windows STATUS_* Codes (Metric/Abs values)
    1072103400: { name: 'STATUS_CURRENT_TRANSACTION_NOT_VALID', note: 'Transaction not valid.' },
    1072365548: { name: 'STATUS_SXS_CORRUPT_ACTIVATION_STACK', note: 'SXS corrupt activation stack.' },
    1072365552: { name: 'STATUS_SXS_INVALID_DEACTIVATION', note: 'SXS invalid deactivation.' },
    1072365566: { name: 'STATUS_SXS_CANT_GEN_ACTCTX', note: 'SXS can\'t generate activation context.' },
    1073739514: { name: 'STATUS_VIRUS_INFECTED', note: 'Virus infected file detected.' },
    1073740004: { name: 'STATUS_INVALID_THREAD', note: 'Invalid thread handle.' },
    1073740016: { name: 'STATUS_CALLBACK_RETURNED_WHILE_IMPERSONATING', note: 'Callback returned while impersonating.' },
    1073740022: { name: 'STATUS_THREADPOOL_HANDLE_EXCEPTION', note: 'Threadpool handle exception.' },
    1073740760: { name: 'STATUS_INVALID_IMAGE_HASH', note: 'Invalid image hash.' },
    1073740767: { name: 'STATUS_VERIFIER_STOP', note: 'Application verifier stop.' },
    1073740768: { name: 'STATUS_ASSERTION_FAILURE', note: 'Assertion failure.' },
    1073740771: { name: 'STATUS_FATAL_USER_CALLBACK_EXCEPTION', note: 'Fatal user callback exception.' },
    1073740777: { name: 'STATUS_INVALID_CRUNTIME_PARAMETER', note: 'Invalid C runtime parameter.' },
    1073740782: { name: 'STATUS_DELAY_LOAD_FAILED', note: 'Delay load failed.' },
    1073740791: { name: 'STATUS_STACK_BUFFER_OVERRUN', note: 'Stack buffer overrun detected (0xC0000409).' },
    1073740940: { name: 'STATUS_HEAP_CORRUPTION', note: 'Heap corruption detected.' },
    1073740959: { name: 'STATUS_ACCESS_DISABLED_BY_POLICY_DEFAULT', note: 'Access disabled by policy.' },
    1073741131: { name: 'STATUS_FLOAT_MULTIPLE_TRAPS', note: 'Floating point multiple traps.' },
    1073741132: { name: 'STATUS_FLOAT_MULTIPLE_FAULTS', note: 'Floating point multiple faults.' },
    1073741205: { name: 'STATUS_DLL_INIT_FAILED_LOGOFF', note: 'DLL initialization failed due to logoff.' },
    1073741212: { name: 'STATUS_RESOURCE_NOT_OWNED', note: 'Resource not owned.' },
    1073741431: { name: 'STATUS_TOO_LATE', note: 'Status too late.' },
    1073741502: { name: 'STATUS_DLL_INIT_FAILED', note: 'DLL initialization failed.' },
    1073741510: { name: 'STATUS_CONTROL_C_EXIT', note: 'Control-C exit.' },
    1073741511: { name: 'STATUS_ENTRYPOINT_NOT_FOUND', note: 'Entrypoint not found.' },
    1073741515: { name: 'STATUS_DLL_NOT_FOUND', note: 'DLL not found.' },
    1073741523: { name: 'STATUS_COMMITMENT_LIMIT', note: 'Virtual memory commitment limit reached.' },
    1073741558: { name: 'STATUS_PROCESS_IS_TERMINATING', note: 'Process is terminating.' },
    1073741569: { name: 'STATUS_BAD_FUNCTION_TABLE', note: 'Bad function table.' },
    1073741571: { name: 'STATUS_STACK_OVERFLOW', note: 'Thread stack overflow (0xC00000FD).' },
    1073741581: { name: 'STATUS_INVALID_PARAMETER_5', note: 'Invalid parameter 5.' },
    1073741595: { name: 'STATUS_INTERNAL_ERROR', note: 'Internal system error.' },
    1073741659: { name: 'STATUS_BAD_IMPERSONATION_LEVEL', note: 'Bad impersonation level.' },
    1073741662: { name: 'STATUS_MEDIA_WRITE_PROTECTED', note: 'Media is write protected.' },
    1073741670: { name: 'STATUS_INSUFFICIENT_RESOURCES', note: 'Insufficient resources.' },
    1073741674: { name: 'STATUS_PRIVILEGED_INSTRUCTION', note: 'Privileged instruction.' },
    1073741675: { name: 'STATUS_INTEGER_OVERFLOW', note: 'Integer overflow.' },
    1073741676: { name: 'STATUS_INTEGER_DIVIDE_BY_ZERO', note: 'Integer divide by zero.' },
    1073741677: { name: 'STATUS_FLOAT_UNDERFLOW', note: 'Floating point underflow.' },
    1073741678: { name: 'STATUS_FLOAT_STACK_CHECK', note: 'Floating point stack check.' },
    1073741679: { name: 'STATUS_FLOAT_OVERFLOW', note: 'Floating point overflow.' },
    1073741680: { name: 'STATUS_FLOAT_INVALID_OPERATION', note: 'Floating point invalid operation.' },
    1073741681: { name: 'STATUS_FLOAT_INEXACT_RESULT', note: 'Floating point inexact result.' },
    1073741682: { name: 'STATUS_FLOAT_DIVIDE_BY_ZERO', note: 'Floating point divide by zero.' },
    1073741683: { name: 'STATUS_FLOAT_DENORMAL_OPERAND', note: 'Floating point denormal operand.' },
    1073741684: { name: 'STATUS_ARRAY_BOUNDS_EXCEEDED', note: 'Array bounds exceeded.' },
    1073741701: { name: 'STATUS_INVALID_IMAGE_FORMAT', note: 'Invalid image format.' },
    1073741738: { name: 'STATUS_DELETE_PENDING', note: 'Delete pending.' },
    1073741744: { name: 'STATUS_EA_TOO_LARGE', note: 'Extended attribute too large.' },
    1073741749: { name: 'STATUS_THREAD_IS_TERMINATING', note: 'Thread is terminating.' },
    1073741756: { name: 'STATUS_QUOTA_EXCEEDED', note: 'Quota exceeded.' },
    1073741757: { name: 'STATUS_SHARING_VIOLATION', note: 'Sharing violation.' },
    1073741766: { name: 'STATUS_OBJECT_PATH_NOT_FOUND', note: 'Object path not found.' },
    1073741772: { name: 'STATUS_OBJECT_NAME_NOT_FOUND', note: 'Object name not found.' },
    1073741783: { name: 'STATUS_INVALID_UNWIND_TARGET', note: 'Invalid unwind target.' },
    1073741784: { name: 'STATUS_BAD_STACK', note: 'Bad stack.' },
    1073741785: { name: 'STATUS_UNWIND', note: 'Unwind operation.' },
    1073741786: { name: 'STATUS_INVALID_DISPOSITION', note: 'Invalid disposition.' },
    1073741787: { name: 'STATUS_NONCONTINUABLE_EXCEPTION', note: 'Noncontinuable exception.' },
    1073741788: { name: 'STATUS_OBJECT_TYPE_MISMATCH', note: 'Object type mismatch.' },
    1073741790: { name: 'STATUS_ACCESS_DENIED', note: 'Access denied.' },
    1073741794: { name: 'STATUS_INVALID_LOCK_SEQUENCE', note: 'Invalid lock sequence.' },
    1073741795: { name: 'STATUS_ILLEGAL_INSTRUCTION', note: 'Illegal instruction (0xC000001D).' },
    1073741796: { name: 'STATUS_INVALID_SYSTEM_SERVICE', note: 'Invalid system service.' },
    1073741800: { name: 'STATUS_CONFLICTING_ADDRESSES', note: 'Conflicting memory addresses.' },
    1073741801: { name: 'STATUS_NO_MEMORY', note: 'No memory available.' },
    1073741811: { name: 'STATUS_INVALID_PARAMETER', note: 'Invalid parameter.' },
    1073741816: { name: 'STATUS_INVALID_HANDLE', note: 'Invalid handle.' },
    1073741818: { name: 'STATUS_IN_PAGE_ERROR', note: 'In-page error.' },
    1073741819: { name: 'STATUS_ACCESS_VIOLATION', note: 'Memory access violation (0xC0000005).' },
    1073741820: { name: 'STATUS_INFO_LENGTH_MISMATCH', note: 'Info length mismatch.' },
    1073741822: { name: 'STATUS_NOT_IMPLEMENTED', note: 'Functionality not implemented.' },
    1073741823: { name: 'STATUS_UNSUCCESSFUL', note: 'Operation unsuccessful.' },
    1073741829: { name: 'STATUS_SEGMENT_NOTIFICATION', note: 'Segment notification.' },
    1073741845: { name: 'STATUS_FATAL_APP_EXIT', note: 'Fatal application exit.' },
    2147483644: { name: 'STATUS_SINGLE_STEP', note: 'Single step exception.' },
    2147483645: { name: 'STATUS_BREAKPOINT', note: 'Breakpoint exception (0x80000003).' },
    2147483646: { name: 'STATUS_DATATYPE_MISALIGNMENT', note: 'Datatype misalignment.' },
    // Raw Unsigned Variants (For robustness)
    3221225477: { name: 'STATUS_ACCESS_VIOLATION', note: 'Memory access violation (0xC0000005).' },
    2147483651: { name: 'STATUS_BREAKPOINT', note: 'Breakpoint exception (0x80000003).' }
};

/**
 * Get result code info by exit code
 * @param {number} exitCode - The process exit code
 * @returns {{name: string, note: string}} Result code info or unknown
 */
export function getResultCodeInfo(exitCode) {
    const absCode = Math.abs(exitCode);
    const code = RESULT_CODES[absCode] || RESULT_CODES[exitCode];
    if (code) {
        return code;
    }

    return {
        name: `UNKNOWN_EXIT_CODE_${exitCode}`,
        note: `Unknown exit code. Raw value: ${exitCode} (0x${(exitCode >>> 0).toString(16).toUpperCase()})`
    };
}

/**
 * Format a crash error with helpful context
 * @param {number} exitCode - The process exit code
 * @param {string} [context] - Additional context about what was happening
 * @returns {string} Formatted error message
 */
export function formatCrashError(exitCode, context = '') {
    const info = getResultCodeInfo(exitCode);
    let message = `Renderer crashed with ${info.name} (exit code ${exitCode}).\n`;
    message += `\n${info.note}`;

    if (context) {
        message += `\n\nContext: ${context}`;
    }

    // Add recovery suggestion
    const absCode = Math.abs(exitCode);
    if (absCode === 3) {
        message += '\n\nSuggestion: Check that the interface binding is loaded and the message format matches the expected schema.';
    }

    return message;
}

export default { RESULT_CODES, getResultCodeInfo, formatCrashError };