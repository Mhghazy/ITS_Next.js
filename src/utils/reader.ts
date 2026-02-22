import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _reader: any;

/**
 * Returns the Keystatic reader, initialising it lazily on first call.
 * Using a getter (instead of a module-level const) prevents createReader()
 * from running at import time, which would crash static export builds.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getReader(): any {
    if (!_reader) {
        _reader = createReader(process.cwd(), keystaticConfig);
    }
    return _reader;
}
