import * as core from '@actions/core';

export default {
    get envFile(): string {
        return core.getInput('envFile', {required: true});
    },

    get expand(): boolean {
        return core.getBooleanInput('expand');
    },

    get expandWithJobEnv(): boolean {
        return core.getBooleanInput('expandWithJobEnv');
    },

    get export(): boolean {
        return core.getBooleanInput('export');
    },

    get secret(): boolean {
        return core.getBooleanInput('secret')
    }
};