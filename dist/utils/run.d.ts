import type { Options } from 'execa'
export default function run(
  bin: string,
  arg: ReadonlyArray<string>,
  opts?: Options,
): Promise<
  import('execa').Result<{
    preferLocal?: boolean
    localDir?: string | URL
    node?: boolean
    nodeOptions?: readonly string[]
    nodePath?: string | URL
    shell?: boolean | string | URL
    cwd?: string | URL
    env?: Readonly<Partial<Record<string, string>>>
    extendEnv?: boolean
    input?: string | Uint8Array | import('stream').Readable
    inputFile?: string | URL
    stdin?: import('execa/types/stdio/type').StdinOptionCommon<false>
    stdout?: import('execa/types/stdio/type').StdoutStderrOptionCommon<false>
    stderr?: import('execa/types/stdio/type').StdoutStderrOptionCommon<false>
    stdio:
      | 'pipe'
      | 'inherit'
      | 'ignore'
      | 'overlapped'
      | readonly [
          import('execa/types/stdio/type').StdinOptionCommon<false, false>,
          import('execa/types/stdio/type').StdoutStderrOptionCommon<
            false,
            false
          >,
          import('execa/types/stdio/type').StdoutStderrOptionCommon<
            false,
            false
          >,
          ...import('execa/types/stdio/type').StdioExtraOptionCommon<false>[],
        ]
    all?: boolean
    encoding?: import('execa/types/arguments/encoding-option').EncodingOption
    lines?: import('execa/types/arguments/specific').FdGenericOption<boolean>
    stripFinalNewline?: import('execa/types/arguments/specific').FdGenericOption<boolean>
    maxBuffer?: import('execa/types/arguments/specific').FdGenericOption<number>
    buffer?: import('execa/types/arguments/specific').FdGenericOption<boolean>
    ipc?: boolean | undefined
    serialization?: 'json' | 'advanced' | undefined
    ipcInput?: import('execa').Message | undefined
    verbose?: import('execa/types/verbose').VerboseOption
    reject?: boolean
    timeout?: number
    cancelSignal?: AbortSignal | undefined
    gracefulCancel?: boolean | undefined
    forceKillAfterDelay?: number | boolean | undefined
    killSignal?: keyof import('os').SignalConstants | number
    detached?: boolean | undefined
    cleanup?: boolean | undefined
    uid?: number
    gid?: number
    argv0?: string
    windowsHide?: boolean
    windowsVerbatimArguments?: boolean
  }>
>
