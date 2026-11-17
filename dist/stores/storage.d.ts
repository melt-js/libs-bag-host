/**
 * Pinia 会解包 state 里的 ref，但 `useLocalStorage` 返回的 `RemovableRef<T>` 是
 * `Omit<Ref<T>, 'value'> & { ... }`，不是标准的 `Ref<T>`，Pinia 3 的类型解包识别不了它，
 * state 会被推断成 ref 本身（`this.tabs.filter` 之类的写法就会报类型错误）。
 *
 * 这里在类型层把返回值收敛成 `T`：运行时仍然是 ref，Pinia 创建 store 时会自动解包；
 * 类型层则让 state / action / storeToRefs 都按普通值处理。
 */
export declare const useStoredState: <T>(key: string, fallback: T) => T;
