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
    }
};

/**
 * Get result code info by exit code
 * @param {number} exitCode - The process exit code
 * @returns {{name: string, note: string}} Result code info or unknown
 */
export function getResultCodeInfo(exitCode) {
    const code = RESULT_CODES[exitCode];
    if (code) {
        return code;
    }

    // Handle special Windows exit codes
    if (exitCode === 0xC0000005) {
        return {
            name: 'EXCEPTION_ACCESS_VIOLATION',
            note: 'Memory access violation - this could indicate a crash bug.'
        };
    }

    return {
        name: `UNKNOWN_EXIT_CODE_${exitCode}`,
        note: `Unknown exit code. Raw value: ${exitCode} (0x${exitCode.toString(16).toUpperCase()})`
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
    if (exitCode === 3) {
        message += '\n\nSuggestion: Check that the interface binding is loaded and the message format matches the expected schema.';
    }

    return message;
}

export default { RESULT_CODES, getResultCodeInfo, formatCrashError };
