
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Psychologist
 * 
 */
export type Psychologist = $Result.DefaultSelection<Prisma.$PsychologistPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Psychologists
 * const psychologists = await prisma.psychologist.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Psychologists
   * const psychologists = await prisma.psychologist.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.psychologist`: Exposes CRUD operations for the **Psychologist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Psychologists
    * const psychologists = await prisma.psychologist.findMany()
    * ```
    */
  get psychologist(): Prisma.PsychologistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Psychologist: 'Psychologist',
    Patient: 'Patient',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "psychologist" | "patient" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Psychologist: {
        payload: Prisma.$PsychologistPayload<ExtArgs>
        fields: Prisma.PsychologistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PsychologistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PsychologistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>
          }
          findFirst: {
            args: Prisma.PsychologistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PsychologistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>
          }
          findMany: {
            args: Prisma.PsychologistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>[]
          }
          create: {
            args: Prisma.PsychologistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>
          }
          createMany: {
            args: Prisma.PsychologistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PsychologistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>[]
          }
          delete: {
            args: Prisma.PsychologistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>
          }
          update: {
            args: Prisma.PsychologistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>
          }
          deleteMany: {
            args: Prisma.PsychologistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PsychologistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PsychologistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>[]
          }
          upsert: {
            args: Prisma.PsychologistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PsychologistPayload>
          }
          aggregate: {
            args: Prisma.PsychologistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePsychologist>
          }
          groupBy: {
            args: Prisma.PsychologistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PsychologistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PsychologistCountArgs<ExtArgs>
            result: $Utils.Optional<PsychologistCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    psychologist?: PsychologistOmit
    patient?: PatientOmit
    session?: SessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PsychologistCountOutputType
   */

  export type PsychologistCountOutputType = {
    patients: number
    sessions: number
  }

  export type PsychologistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | PsychologistCountOutputTypeCountPatientsArgs
    sessions?: boolean | PsychologistCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * PsychologistCountOutputType without action
   */
  export type PsychologistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsychologistCountOutputType
     */
    select?: PsychologistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PsychologistCountOutputType without action
   */
  export type PsychologistCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * PsychologistCountOutputType without action
   */
  export type PsychologistCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    sessions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | PatientCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Psychologist
   */

  export type AggregatePsychologist = {
    _count: PsychologistCountAggregateOutputType | null
    _min: PsychologistMinAggregateOutputType | null
    _max: PsychologistMaxAggregateOutputType | null
  }

  export type PsychologistMinAggregateOutputType = {
    id: string | null
    name: string | null
    birth: string | null
    email: string | null
    cpf: string | null
    rg: string | null
    crp: string | null
    password: string | null
    phone: string | null
    specialty: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PsychologistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    birth: string | null
    email: string | null
    cpf: string | null
    rg: string | null
    crp: string | null
    password: string | null
    phone: string | null
    specialty: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PsychologistCountAggregateOutputType = {
    id: number
    name: number
    birth: number
    email: number
    cpf: number
    rg: number
    crp: number
    password: number
    phone: number
    specialty: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PsychologistMinAggregateInputType = {
    id?: true
    name?: true
    birth?: true
    email?: true
    cpf?: true
    rg?: true
    crp?: true
    password?: true
    phone?: true
    specialty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PsychologistMaxAggregateInputType = {
    id?: true
    name?: true
    birth?: true
    email?: true
    cpf?: true
    rg?: true
    crp?: true
    password?: true
    phone?: true
    specialty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PsychologistCountAggregateInputType = {
    id?: true
    name?: true
    birth?: true
    email?: true
    cpf?: true
    rg?: true
    crp?: true
    password?: true
    phone?: true
    specialty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PsychologistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Psychologist to aggregate.
     */
    where?: PsychologistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Psychologists to fetch.
     */
    orderBy?: PsychologistOrderByWithRelationInput | PsychologistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PsychologistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Psychologists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Psychologists
    **/
    _count?: true | PsychologistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PsychologistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PsychologistMaxAggregateInputType
  }

  export type GetPsychologistAggregateType<T extends PsychologistAggregateArgs> = {
        [P in keyof T & keyof AggregatePsychologist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePsychologist[P]>
      : GetScalarType<T[P], AggregatePsychologist[P]>
  }




  export type PsychologistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PsychologistWhereInput
    orderBy?: PsychologistOrderByWithAggregationInput | PsychologistOrderByWithAggregationInput[]
    by: PsychologistScalarFieldEnum[] | PsychologistScalarFieldEnum
    having?: PsychologistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PsychologistCountAggregateInputType | true
    _min?: PsychologistMinAggregateInputType
    _max?: PsychologistMaxAggregateInputType
  }

  export type PsychologistGroupByOutputType = {
    id: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PsychologistCountAggregateOutputType | null
    _min: PsychologistMinAggregateOutputType | null
    _max: PsychologistMaxAggregateOutputType | null
  }

  type GetPsychologistGroupByPayload<T extends PsychologistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PsychologistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PsychologistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PsychologistGroupByOutputType[P]>
            : GetScalarType<T[P], PsychologistGroupByOutputType[P]>
        }
      >
    >


  export type PsychologistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth?: boolean
    email?: boolean
    cpf?: boolean
    rg?: boolean
    crp?: boolean
    password?: boolean
    phone?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    patients?: boolean | Psychologist$patientsArgs<ExtArgs>
    sessions?: boolean | Psychologist$sessionsArgs<ExtArgs>
    _count?: boolean | PsychologistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["psychologist"]>

  export type PsychologistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth?: boolean
    email?: boolean
    cpf?: boolean
    rg?: boolean
    crp?: boolean
    password?: boolean
    phone?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["psychologist"]>

  export type PsychologistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth?: boolean
    email?: boolean
    cpf?: boolean
    rg?: boolean
    crp?: boolean
    password?: boolean
    phone?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["psychologist"]>

  export type PsychologistSelectScalar = {
    id?: boolean
    name?: boolean
    birth?: boolean
    email?: boolean
    cpf?: boolean
    rg?: boolean
    crp?: boolean
    password?: boolean
    phone?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PsychologistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birth" | "email" | "cpf" | "rg" | "crp" | "password" | "phone" | "specialty" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["psychologist"]>
  export type PsychologistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | Psychologist$patientsArgs<ExtArgs>
    sessions?: boolean | Psychologist$sessionsArgs<ExtArgs>
    _count?: boolean | PsychologistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PsychologistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PsychologistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PsychologistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Psychologist"
    objects: {
      patients: Prisma.$PatientPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      birth: string
      email: string
      cpf: string
      rg: string
      crp: string
      password: string
      phone: string
      specialty: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["psychologist"]>
    composites: {}
  }

  type PsychologistGetPayload<S extends boolean | null | undefined | PsychologistDefaultArgs> = $Result.GetResult<Prisma.$PsychologistPayload, S>

  type PsychologistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PsychologistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PsychologistCountAggregateInputType | true
    }

  export interface PsychologistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Psychologist'], meta: { name: 'Psychologist' } }
    /**
     * Find zero or one Psychologist that matches the filter.
     * @param {PsychologistFindUniqueArgs} args - Arguments to find a Psychologist
     * @example
     * // Get one Psychologist
     * const psychologist = await prisma.psychologist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PsychologistFindUniqueArgs>(args: SelectSubset<T, PsychologistFindUniqueArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Psychologist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PsychologistFindUniqueOrThrowArgs} args - Arguments to find a Psychologist
     * @example
     * // Get one Psychologist
     * const psychologist = await prisma.psychologist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PsychologistFindUniqueOrThrowArgs>(args: SelectSubset<T, PsychologistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Psychologist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistFindFirstArgs} args - Arguments to find a Psychologist
     * @example
     * // Get one Psychologist
     * const psychologist = await prisma.psychologist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PsychologistFindFirstArgs>(args?: SelectSubset<T, PsychologistFindFirstArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Psychologist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistFindFirstOrThrowArgs} args - Arguments to find a Psychologist
     * @example
     * // Get one Psychologist
     * const psychologist = await prisma.psychologist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PsychologistFindFirstOrThrowArgs>(args?: SelectSubset<T, PsychologistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Psychologists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Psychologists
     * const psychologists = await prisma.psychologist.findMany()
     * 
     * // Get first 10 Psychologists
     * const psychologists = await prisma.psychologist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const psychologistWithIdOnly = await prisma.psychologist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PsychologistFindManyArgs>(args?: SelectSubset<T, PsychologistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Psychologist.
     * @param {PsychologistCreateArgs} args - Arguments to create a Psychologist.
     * @example
     * // Create one Psychologist
     * const Psychologist = await prisma.psychologist.create({
     *   data: {
     *     // ... data to create a Psychologist
     *   }
     * })
     * 
     */
    create<T extends PsychologistCreateArgs>(args: SelectSubset<T, PsychologistCreateArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Psychologists.
     * @param {PsychologistCreateManyArgs} args - Arguments to create many Psychologists.
     * @example
     * // Create many Psychologists
     * const psychologist = await prisma.psychologist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PsychologistCreateManyArgs>(args?: SelectSubset<T, PsychologistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Psychologists and returns the data saved in the database.
     * @param {PsychologistCreateManyAndReturnArgs} args - Arguments to create many Psychologists.
     * @example
     * // Create many Psychologists
     * const psychologist = await prisma.psychologist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Psychologists and only return the `id`
     * const psychologistWithIdOnly = await prisma.psychologist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PsychologistCreateManyAndReturnArgs>(args?: SelectSubset<T, PsychologistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Psychologist.
     * @param {PsychologistDeleteArgs} args - Arguments to delete one Psychologist.
     * @example
     * // Delete one Psychologist
     * const Psychologist = await prisma.psychologist.delete({
     *   where: {
     *     // ... filter to delete one Psychologist
     *   }
     * })
     * 
     */
    delete<T extends PsychologistDeleteArgs>(args: SelectSubset<T, PsychologistDeleteArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Psychologist.
     * @param {PsychologistUpdateArgs} args - Arguments to update one Psychologist.
     * @example
     * // Update one Psychologist
     * const psychologist = await prisma.psychologist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PsychologistUpdateArgs>(args: SelectSubset<T, PsychologistUpdateArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Psychologists.
     * @param {PsychologistDeleteManyArgs} args - Arguments to filter Psychologists to delete.
     * @example
     * // Delete a few Psychologists
     * const { count } = await prisma.psychologist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PsychologistDeleteManyArgs>(args?: SelectSubset<T, PsychologistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Psychologists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Psychologists
     * const psychologist = await prisma.psychologist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PsychologistUpdateManyArgs>(args: SelectSubset<T, PsychologistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Psychologists and returns the data updated in the database.
     * @param {PsychologistUpdateManyAndReturnArgs} args - Arguments to update many Psychologists.
     * @example
     * // Update many Psychologists
     * const psychologist = await prisma.psychologist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Psychologists and only return the `id`
     * const psychologistWithIdOnly = await prisma.psychologist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PsychologistUpdateManyAndReturnArgs>(args: SelectSubset<T, PsychologistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Psychologist.
     * @param {PsychologistUpsertArgs} args - Arguments to update or create a Psychologist.
     * @example
     * // Update or create a Psychologist
     * const psychologist = await prisma.psychologist.upsert({
     *   create: {
     *     // ... data to create a Psychologist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Psychologist we want to update
     *   }
     * })
     */
    upsert<T extends PsychologistUpsertArgs>(args: SelectSubset<T, PsychologistUpsertArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Psychologists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistCountArgs} args - Arguments to filter Psychologists to count.
     * @example
     * // Count the number of Psychologists
     * const count = await prisma.psychologist.count({
     *   where: {
     *     // ... the filter for the Psychologists we want to count
     *   }
     * })
    **/
    count<T extends PsychologistCountArgs>(
      args?: Subset<T, PsychologistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PsychologistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Psychologist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PsychologistAggregateArgs>(args: Subset<T, PsychologistAggregateArgs>): Prisma.PrismaPromise<GetPsychologistAggregateType<T>>

    /**
     * Group by Psychologist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PsychologistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PsychologistGroupByArgs['orderBy'] }
        : { orderBy?: PsychologistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PsychologistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPsychologistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Psychologist model
   */
  readonly fields: PsychologistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Psychologist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PsychologistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends Psychologist$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Psychologist$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Psychologist$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Psychologist$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Psychologist model
   */
  interface PsychologistFieldRefs {
    readonly id: FieldRef<"Psychologist", 'String'>
    readonly name: FieldRef<"Psychologist", 'String'>
    readonly birth: FieldRef<"Psychologist", 'String'>
    readonly email: FieldRef<"Psychologist", 'String'>
    readonly cpf: FieldRef<"Psychologist", 'String'>
    readonly rg: FieldRef<"Psychologist", 'String'>
    readonly crp: FieldRef<"Psychologist", 'String'>
    readonly password: FieldRef<"Psychologist", 'String'>
    readonly phone: FieldRef<"Psychologist", 'String'>
    readonly specialty: FieldRef<"Psychologist", 'String'>
    readonly createdAt: FieldRef<"Psychologist", 'DateTime'>
    readonly updatedAt: FieldRef<"Psychologist", 'DateTime'>
    readonly deletedAt: FieldRef<"Psychologist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Psychologist findUnique
   */
  export type PsychologistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * Filter, which Psychologist to fetch.
     */
    where: PsychologistWhereUniqueInput
  }

  /**
   * Psychologist findUniqueOrThrow
   */
  export type PsychologistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * Filter, which Psychologist to fetch.
     */
    where: PsychologistWhereUniqueInput
  }

  /**
   * Psychologist findFirst
   */
  export type PsychologistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * Filter, which Psychologist to fetch.
     */
    where?: PsychologistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Psychologists to fetch.
     */
    orderBy?: PsychologistOrderByWithRelationInput | PsychologistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Psychologists.
     */
    cursor?: PsychologistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Psychologists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Psychologists.
     */
    distinct?: PsychologistScalarFieldEnum | PsychologistScalarFieldEnum[]
  }

  /**
   * Psychologist findFirstOrThrow
   */
  export type PsychologistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * Filter, which Psychologist to fetch.
     */
    where?: PsychologistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Psychologists to fetch.
     */
    orderBy?: PsychologistOrderByWithRelationInput | PsychologistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Psychologists.
     */
    cursor?: PsychologistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Psychologists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Psychologists.
     */
    distinct?: PsychologistScalarFieldEnum | PsychologistScalarFieldEnum[]
  }

  /**
   * Psychologist findMany
   */
  export type PsychologistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * Filter, which Psychologists to fetch.
     */
    where?: PsychologistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Psychologists to fetch.
     */
    orderBy?: PsychologistOrderByWithRelationInput | PsychologistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Psychologists.
     */
    cursor?: PsychologistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Psychologists.
     */
    skip?: number
    distinct?: PsychologistScalarFieldEnum | PsychologistScalarFieldEnum[]
  }

  /**
   * Psychologist create
   */
  export type PsychologistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * The data needed to create a Psychologist.
     */
    data: XOR<PsychologistCreateInput, PsychologistUncheckedCreateInput>
  }

  /**
   * Psychologist createMany
   */
  export type PsychologistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Psychologists.
     */
    data: PsychologistCreateManyInput | PsychologistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Psychologist createManyAndReturn
   */
  export type PsychologistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * The data used to create many Psychologists.
     */
    data: PsychologistCreateManyInput | PsychologistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Psychologist update
   */
  export type PsychologistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * The data needed to update a Psychologist.
     */
    data: XOR<PsychologistUpdateInput, PsychologistUncheckedUpdateInput>
    /**
     * Choose, which Psychologist to update.
     */
    where: PsychologistWhereUniqueInput
  }

  /**
   * Psychologist updateMany
   */
  export type PsychologistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Psychologists.
     */
    data: XOR<PsychologistUpdateManyMutationInput, PsychologistUncheckedUpdateManyInput>
    /**
     * Filter which Psychologists to update
     */
    where?: PsychologistWhereInput
    /**
     * Limit how many Psychologists to update.
     */
    limit?: number
  }

  /**
   * Psychologist updateManyAndReturn
   */
  export type PsychologistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * The data used to update Psychologists.
     */
    data: XOR<PsychologistUpdateManyMutationInput, PsychologistUncheckedUpdateManyInput>
    /**
     * Filter which Psychologists to update
     */
    where?: PsychologistWhereInput
    /**
     * Limit how many Psychologists to update.
     */
    limit?: number
  }

  /**
   * Psychologist upsert
   */
  export type PsychologistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * The filter to search for the Psychologist to update in case it exists.
     */
    where: PsychologistWhereUniqueInput
    /**
     * In case the Psychologist found by the `where` argument doesn't exist, create a new Psychologist with this data.
     */
    create: XOR<PsychologistCreateInput, PsychologistUncheckedCreateInput>
    /**
     * In case the Psychologist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PsychologistUpdateInput, PsychologistUncheckedUpdateInput>
  }

  /**
   * Psychologist delete
   */
  export type PsychologistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
    /**
     * Filter which Psychologist to delete.
     */
    where: PsychologistWhereUniqueInput
  }

  /**
   * Psychologist deleteMany
   */
  export type PsychologistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Psychologists to delete
     */
    where?: PsychologistWhereInput
    /**
     * Limit how many Psychologists to delete.
     */
    limit?: number
  }

  /**
   * Psychologist.patients
   */
  export type Psychologist$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Psychologist.sessions
   */
  export type Psychologist$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Psychologist without action
   */
  export type PsychologistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Psychologist
     */
    select?: PsychologistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Psychologist
     */
    omit?: PsychologistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PsychologistInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    psychologistId: string | null
    name: string | null
    email: string | null
    phone: string | null
    birthDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    psychologistId: string | null
    name: string | null
    email: string | null
    phone: string | null
    birthDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    psychologistId: number
    name: number
    email: number
    phone: number
    birthDate: number
    notes: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    psychologistId?: true
    name?: true
    email?: true
    phone?: true
    birthDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    psychologistId?: true
    name?: true
    email?: true
    phone?: true
    birthDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    psychologistId?: true
    name?: true
    email?: true
    phone?: true
    birthDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    psychologistId: string
    name: string | null
    email: string | null
    phone: string | null
    birthDate: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psychologistId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sessions?: boolean | Patient$sessionsArgs<ExtArgs>
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psychologistId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psychologistId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    psychologistId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "psychologistId" | "name" | "email" | "phone" | "birthDate" | "notes" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Patient$sessionsArgs<ExtArgs>
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      psychologist: Prisma.$PsychologistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      psychologistId: string
      name: string | null
      email: string | null
      phone: string | null
      birthDate: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Patient$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    psychologist<T extends PsychologistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PsychologistDefaultArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly psychologistId: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly birthDate: FieldRef<"Patient", 'DateTime'>
    readonly notes: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
    readonly deletedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.sessions
   */
  export type Patient$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    psychologistId: string | null
    patientId: string | null
    sessionDate: Date | null
    summary: string | null
    behavioralObservations: string | null
    interventions: string | null
    patientReactions: string | null
    referrals: string | null
    therapeuticPlans: string | null
    diagnosticHypotheses: string | null
    techniqueUsed: string | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    psychologistId: string | null
    patientId: string | null
    sessionDate: Date | null
    summary: string | null
    behavioralObservations: string | null
    interventions: string | null
    patientReactions: string | null
    referrals: string | null
    therapeuticPlans: string | null
    diagnosticHypotheses: string | null
    techniqueUsed: string | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    psychologistId: number
    patientId: number
    sessionDate: number
    summary: number
    behavioralObservations: number
    interventions: number
    patientReactions: number
    referrals: number
    therapeuticPlans: number
    diagnosticHypotheses: number
    techniqueUsed: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    psychologistId?: true
    patientId?: true
    sessionDate?: true
    summary?: true
    behavioralObservations?: true
    interventions?: true
    patientReactions?: true
    referrals?: true
    therapeuticPlans?: true
    diagnosticHypotheses?: true
    techniqueUsed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    psychologistId?: true
    patientId?: true
    sessionDate?: true
    summary?: true
    behavioralObservations?: true
    interventions?: true
    patientReactions?: true
    referrals?: true
    therapeuticPlans?: true
    diagnosticHypotheses?: true
    techniqueUsed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    psychologistId?: true
    patientId?: true
    sessionDate?: true
    summary?: true
    behavioralObservations?: true
    interventions?: true
    patientReactions?: true
    referrals?: true
    therapeuticPlans?: true
    diagnosticHypotheses?: true
    techniqueUsed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    psychologistId: string
    patientId: string
    sessionDate: Date
    summary: string | null
    behavioralObservations: string | null
    interventions: string | null
    patientReactions: string | null
    referrals: string | null
    therapeuticPlans: string | null
    diagnosticHypotheses: string | null
    techniqueUsed: string | null
    status: $Enums.SessionStatus
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psychologistId?: boolean
    patientId?: boolean
    sessionDate?: boolean
    summary?: boolean
    behavioralObservations?: boolean
    interventions?: boolean
    patientReactions?: boolean
    referrals?: boolean
    therapeuticPlans?: boolean
    diagnosticHypotheses?: boolean
    techniqueUsed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psychologistId?: boolean
    patientId?: boolean
    sessionDate?: boolean
    summary?: boolean
    behavioralObservations?: boolean
    interventions?: boolean
    patientReactions?: boolean
    referrals?: boolean
    therapeuticPlans?: boolean
    diagnosticHypotheses?: boolean
    techniqueUsed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    psychologistId?: boolean
    patientId?: boolean
    sessionDate?: boolean
    summary?: boolean
    behavioralObservations?: boolean
    interventions?: boolean
    patientReactions?: boolean
    referrals?: boolean
    therapeuticPlans?: boolean
    diagnosticHypotheses?: boolean
    techniqueUsed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    psychologistId?: boolean
    patientId?: boolean
    sessionDate?: boolean
    summary?: boolean
    behavioralObservations?: boolean
    interventions?: boolean
    patientReactions?: boolean
    referrals?: boolean
    therapeuticPlans?: boolean
    diagnosticHypotheses?: boolean
    techniqueUsed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "psychologistId" | "patientId" | "sessionDate" | "summary" | "behavioralObservations" | "interventions" | "patientReactions" | "referrals" | "therapeuticPlans" | "diagnosticHypotheses" | "techniqueUsed" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    psychologist?: boolean | PsychologistDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      psychologist: Prisma.$PsychologistPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      psychologistId: string
      patientId: string
      sessionDate: Date
      summary: string | null
      behavioralObservations: string | null
      interventions: string | null
      patientReactions: string | null
      referrals: string | null
      therapeuticPlans: string | null
      diagnosticHypotheses: string | null
      techniqueUsed: string | null
      status: $Enums.SessionStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    psychologist<T extends PsychologistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PsychologistDefaultArgs<ExtArgs>>): Prisma__PsychologistClient<$Result.GetResult<Prisma.$PsychologistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly psychologistId: FieldRef<"Session", 'String'>
    readonly patientId: FieldRef<"Session", 'String'>
    readonly sessionDate: FieldRef<"Session", 'DateTime'>
    readonly summary: FieldRef<"Session", 'String'>
    readonly behavioralObservations: FieldRef<"Session", 'String'>
    readonly interventions: FieldRef<"Session", 'String'>
    readonly patientReactions: FieldRef<"Session", 'String'>
    readonly referrals: FieldRef<"Session", 'String'>
    readonly therapeuticPlans: FieldRef<"Session", 'String'>
    readonly diagnosticHypotheses: FieldRef<"Session", 'String'>
    readonly techniqueUsed: FieldRef<"Session", 'String'>
    readonly status: FieldRef<"Session", 'SessionStatus'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PsychologistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birth: 'birth',
    email: 'email',
    cpf: 'cpf',
    rg: 'rg',
    crp: 'crp',
    password: 'password',
    phone: 'phone',
    specialty: 'specialty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PsychologistScalarFieldEnum = (typeof PsychologistScalarFieldEnum)[keyof typeof PsychologistScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    psychologistId: 'psychologistId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    birthDate: 'birthDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    psychologistId: 'psychologistId',
    patientId: 'patientId',
    sessionDate: 'sessionDate',
    summary: 'summary',
    behavioralObservations: 'behavioralObservations',
    interventions: 'interventions',
    patientReactions: 'patientReactions',
    referrals: 'referrals',
    therapeuticPlans: 'therapeuticPlans',
    diagnosticHypotheses: 'diagnosticHypotheses',
    techniqueUsed: 'techniqueUsed',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PsychologistWhereInput = {
    AND?: PsychologistWhereInput | PsychologistWhereInput[]
    OR?: PsychologistWhereInput[]
    NOT?: PsychologistWhereInput | PsychologistWhereInput[]
    id?: UuidFilter<"Psychologist"> | string
    name?: StringFilter<"Psychologist"> | string
    birth?: StringFilter<"Psychologist"> | string
    email?: StringFilter<"Psychologist"> | string
    cpf?: StringFilter<"Psychologist"> | string
    rg?: StringFilter<"Psychologist"> | string
    crp?: StringFilter<"Psychologist"> | string
    password?: StringFilter<"Psychologist"> | string
    phone?: StringFilter<"Psychologist"> | string
    specialty?: StringNullableFilter<"Psychologist"> | string | null
    createdAt?: DateTimeFilter<"Psychologist"> | Date | string
    updatedAt?: DateTimeFilter<"Psychologist"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Psychologist"> | Date | string | null
    patients?: PatientListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type PsychologistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    crp?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    specialty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    patients?: PatientOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type PsychologistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PsychologistWhereInput | PsychologistWhereInput[]
    OR?: PsychologistWhereInput[]
    NOT?: PsychologistWhereInput | PsychologistWhereInput[]
    name?: StringFilter<"Psychologist"> | string
    birth?: StringFilter<"Psychologist"> | string
    cpf?: StringFilter<"Psychologist"> | string
    rg?: StringFilter<"Psychologist"> | string
    crp?: StringFilter<"Psychologist"> | string
    password?: StringFilter<"Psychologist"> | string
    phone?: StringFilter<"Psychologist"> | string
    specialty?: StringNullableFilter<"Psychologist"> | string | null
    createdAt?: DateTimeFilter<"Psychologist"> | Date | string
    updatedAt?: DateTimeFilter<"Psychologist"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Psychologist"> | Date | string | null
    patients?: PatientListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type PsychologistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    crp?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    specialty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PsychologistCountOrderByAggregateInput
    _max?: PsychologistMaxOrderByAggregateInput
    _min?: PsychologistMinOrderByAggregateInput
  }

  export type PsychologistScalarWhereWithAggregatesInput = {
    AND?: PsychologistScalarWhereWithAggregatesInput | PsychologistScalarWhereWithAggregatesInput[]
    OR?: PsychologistScalarWhereWithAggregatesInput[]
    NOT?: PsychologistScalarWhereWithAggregatesInput | PsychologistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Psychologist"> | string
    name?: StringWithAggregatesFilter<"Psychologist"> | string
    birth?: StringWithAggregatesFilter<"Psychologist"> | string
    email?: StringWithAggregatesFilter<"Psychologist"> | string
    cpf?: StringWithAggregatesFilter<"Psychologist"> | string
    rg?: StringWithAggregatesFilter<"Psychologist"> | string
    crp?: StringWithAggregatesFilter<"Psychologist"> | string
    password?: StringWithAggregatesFilter<"Psychologist"> | string
    phone?: StringWithAggregatesFilter<"Psychologist"> | string
    specialty?: StringNullableWithAggregatesFilter<"Psychologist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Psychologist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Psychologist"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Psychologist"> | Date | string | null
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: UuidFilter<"Patient"> | string
    psychologistId?: UuidFilter<"Patient"> | string
    name?: StringNullableFilter<"Patient"> | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    phone?: StringNullableFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    sessions?: SessionListRelationFilter
    psychologist?: XOR<PsychologistScalarRelationFilter, PsychologistWhereInput>
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    psychologist?: PsychologistOrderByWithRelationInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    psychologistId?: UuidFilter<"Patient"> | string
    name?: StringNullableFilter<"Patient"> | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    phone?: StringNullableFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    sessions?: SessionListRelationFilter
    psychologist?: XOR<PsychologistScalarRelationFilter, PsychologistWhereInput>
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Patient"> | string
    psychologistId?: UuidWithAggregatesFilter<"Patient"> | string
    name?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    psychologistId?: UuidFilter<"Session"> | string
    patientId?: UuidFilter<"Session"> | string
    sessionDate?: DateTimeFilter<"Session"> | Date | string
    summary?: StringNullableFilter<"Session"> | string | null
    behavioralObservations?: StringNullableFilter<"Session"> | string | null
    interventions?: StringNullableFilter<"Session"> | string | null
    patientReactions?: StringNullableFilter<"Session"> | string | null
    referrals?: StringNullableFilter<"Session"> | string | null
    therapeuticPlans?: StringNullableFilter<"Session"> | string | null
    diagnosticHypotheses?: StringNullableFilter<"Session"> | string | null
    techniqueUsed?: StringNullableFilter<"Session"> | string | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    psychologist?: XOR<PsychologistScalarRelationFilter, PsychologistWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    patientId?: SortOrder
    sessionDate?: SortOrder
    summary?: SortOrderInput | SortOrder
    behavioralObservations?: SortOrderInput | SortOrder
    interventions?: SortOrderInput | SortOrder
    patientReactions?: SortOrderInput | SortOrder
    referrals?: SortOrderInput | SortOrder
    therapeuticPlans?: SortOrderInput | SortOrder
    diagnosticHypotheses?: SortOrderInput | SortOrder
    techniqueUsed?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    psychologist?: PsychologistOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    psychologistId?: UuidFilter<"Session"> | string
    patientId?: UuidFilter<"Session"> | string
    sessionDate?: DateTimeFilter<"Session"> | Date | string
    summary?: StringNullableFilter<"Session"> | string | null
    behavioralObservations?: StringNullableFilter<"Session"> | string | null
    interventions?: StringNullableFilter<"Session"> | string | null
    patientReactions?: StringNullableFilter<"Session"> | string | null
    referrals?: StringNullableFilter<"Session"> | string | null
    therapeuticPlans?: StringNullableFilter<"Session"> | string | null
    diagnosticHypotheses?: StringNullableFilter<"Session"> | string | null
    techniqueUsed?: StringNullableFilter<"Session"> | string | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    psychologist?: XOR<PsychologistScalarRelationFilter, PsychologistWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    patientId?: SortOrder
    sessionDate?: SortOrder
    summary?: SortOrderInput | SortOrder
    behavioralObservations?: SortOrderInput | SortOrder
    interventions?: SortOrderInput | SortOrder
    patientReactions?: SortOrderInput | SortOrder
    referrals?: SortOrderInput | SortOrder
    therapeuticPlans?: SortOrderInput | SortOrder
    diagnosticHypotheses?: SortOrderInput | SortOrder
    techniqueUsed?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    psychologistId?: UuidWithAggregatesFilter<"Session"> | string
    patientId?: UuidWithAggregatesFilter<"Session"> | string
    sessionDate?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    summary?: StringNullableWithAggregatesFilter<"Session"> | string | null
    behavioralObservations?: StringNullableWithAggregatesFilter<"Session"> | string | null
    interventions?: StringNullableWithAggregatesFilter<"Session"> | string | null
    patientReactions?: StringNullableWithAggregatesFilter<"Session"> | string | null
    referrals?: StringNullableWithAggregatesFilter<"Session"> | string | null
    therapeuticPlans?: StringNullableWithAggregatesFilter<"Session"> | string | null
    diagnosticHypotheses?: StringNullableWithAggregatesFilter<"Session"> | string | null
    techniqueUsed?: StringNullableWithAggregatesFilter<"Session"> | string | null
    status?: EnumSessionStatusWithAggregatesFilter<"Session"> | $Enums.SessionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type PsychologistCreateInput = {
    id?: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientCreateNestedManyWithoutPsychologistInput
    sessions?: SessionCreateNestedManyWithoutPsychologistInput
  }

  export type PsychologistUncheckedCreateInput = {
    id?: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientUncheckedCreateNestedManyWithoutPsychologistInput
    sessions?: SessionUncheckedCreateNestedManyWithoutPsychologistInput
  }

  export type PsychologistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUpdateManyWithoutPsychologistNestedInput
    sessions?: SessionUpdateManyWithoutPsychologistNestedInput
  }

  export type PsychologistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUncheckedUpdateManyWithoutPsychologistNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutPsychologistNestedInput
  }

  export type PsychologistCreateManyInput = {
    id?: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PsychologistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PsychologistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutPatientInput
    psychologist: PsychologistCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    psychologistId: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutPatientNestedInput
    psychologist?: PsychologistUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    psychologistId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    psychologistId: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    psychologistId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    psychologist: PsychologistCreateNestedOneWithoutSessionsInput
    patient: PatientCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    psychologistId: string
    patientId: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    psychologist?: PsychologistUpdateOneRequiredWithoutSessionsNestedInput
    patient?: PatientUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    psychologistId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    psychologistId: string
    patientId: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    psychologistId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PsychologistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    crp?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    specialty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PsychologistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    crp?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    specialty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PsychologistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    crp?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    specialty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PsychologistScalarRelationFilter = {
    is?: PsychologistWhereInput
    isNot?: PsychologistWhereInput
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    patientId?: SortOrder
    sessionDate?: SortOrder
    summary?: SortOrder
    behavioralObservations?: SortOrder
    interventions?: SortOrder
    patientReactions?: SortOrder
    referrals?: SortOrder
    therapeuticPlans?: SortOrder
    diagnosticHypotheses?: SortOrder
    techniqueUsed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    patientId?: SortOrder
    sessionDate?: SortOrder
    summary?: SortOrder
    behavioralObservations?: SortOrder
    interventions?: SortOrder
    patientReactions?: SortOrder
    referrals?: SortOrder
    therapeuticPlans?: SortOrder
    diagnosticHypotheses?: SortOrder
    techniqueUsed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    psychologistId?: SortOrder
    patientId?: SortOrder
    sessionDate?: SortOrder
    summary?: SortOrder
    behavioralObservations?: SortOrder
    interventions?: SortOrder
    patientReactions?: SortOrder
    referrals?: SortOrder
    therapeuticPlans?: SortOrder
    diagnosticHypotheses?: SortOrder
    techniqueUsed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type PatientCreateNestedManyWithoutPsychologistInput = {
    create?: XOR<PatientCreateWithoutPsychologistInput, PatientUncheckedCreateWithoutPsychologistInput> | PatientCreateWithoutPsychologistInput[] | PatientUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutPsychologistInput | PatientCreateOrConnectWithoutPsychologistInput[]
    createMany?: PatientCreateManyPsychologistInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutPsychologistInput = {
    create?: XOR<SessionCreateWithoutPsychologistInput, SessionUncheckedCreateWithoutPsychologistInput> | SessionCreateWithoutPsychologistInput[] | SessionUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPsychologistInput | SessionCreateOrConnectWithoutPsychologistInput[]
    createMany?: SessionCreateManyPsychologistInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutPsychologistInput = {
    create?: XOR<PatientCreateWithoutPsychologistInput, PatientUncheckedCreateWithoutPsychologistInput> | PatientCreateWithoutPsychologistInput[] | PatientUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutPsychologistInput | PatientCreateOrConnectWithoutPsychologistInput[]
    createMany?: PatientCreateManyPsychologistInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutPsychologistInput = {
    create?: XOR<SessionCreateWithoutPsychologistInput, SessionUncheckedCreateWithoutPsychologistInput> | SessionCreateWithoutPsychologistInput[] | SessionUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPsychologistInput | SessionCreateOrConnectWithoutPsychologistInput[]
    createMany?: SessionCreateManyPsychologistInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateManyWithoutPsychologistNestedInput = {
    create?: XOR<PatientCreateWithoutPsychologistInput, PatientUncheckedCreateWithoutPsychologistInput> | PatientCreateWithoutPsychologistInput[] | PatientUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutPsychologistInput | PatientCreateOrConnectWithoutPsychologistInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutPsychologistInput | PatientUpsertWithWhereUniqueWithoutPsychologistInput[]
    createMany?: PatientCreateManyPsychologistInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutPsychologistInput | PatientUpdateWithWhereUniqueWithoutPsychologistInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutPsychologistInput | PatientUpdateManyWithWhereWithoutPsychologistInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutPsychologistNestedInput = {
    create?: XOR<SessionCreateWithoutPsychologistInput, SessionUncheckedCreateWithoutPsychologistInput> | SessionCreateWithoutPsychologistInput[] | SessionUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPsychologistInput | SessionCreateOrConnectWithoutPsychologistInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPsychologistInput | SessionUpsertWithWhereUniqueWithoutPsychologistInput[]
    createMany?: SessionCreateManyPsychologistInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPsychologistInput | SessionUpdateWithWhereUniqueWithoutPsychologistInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPsychologistInput | SessionUpdateManyWithWhereWithoutPsychologistInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutPsychologistNestedInput = {
    create?: XOR<PatientCreateWithoutPsychologistInput, PatientUncheckedCreateWithoutPsychologistInput> | PatientCreateWithoutPsychologistInput[] | PatientUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutPsychologistInput | PatientCreateOrConnectWithoutPsychologistInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutPsychologistInput | PatientUpsertWithWhereUniqueWithoutPsychologistInput[]
    createMany?: PatientCreateManyPsychologistInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutPsychologistInput | PatientUpdateWithWhereUniqueWithoutPsychologistInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutPsychologistInput | PatientUpdateManyWithWhereWithoutPsychologistInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutPsychologistNestedInput = {
    create?: XOR<SessionCreateWithoutPsychologistInput, SessionUncheckedCreateWithoutPsychologistInput> | SessionCreateWithoutPsychologistInput[] | SessionUncheckedCreateWithoutPsychologistInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPsychologistInput | SessionCreateOrConnectWithoutPsychologistInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPsychologistInput | SessionUpsertWithWhereUniqueWithoutPsychologistInput[]
    createMany?: SessionCreateManyPsychologistInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPsychologistInput | SessionUpdateWithWhereUniqueWithoutPsychologistInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPsychologistInput | SessionUpdateManyWithWhereWithoutPsychologistInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutPatientInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PsychologistCreateNestedOneWithoutPatientsInput = {
    create?: XOR<PsychologistCreateWithoutPatientsInput, PsychologistUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: PsychologistCreateOrConnectWithoutPatientsInput
    connect?: PsychologistWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPatientInput | SessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPatientInput | SessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPatientInput | SessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PsychologistUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<PsychologistCreateWithoutPatientsInput, PsychologistUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: PsychologistCreateOrConnectWithoutPatientsInput
    upsert?: PsychologistUpsertWithoutPatientsInput
    connect?: PsychologistWhereUniqueInput
    update?: XOR<XOR<PsychologistUpdateToOneWithWhereWithoutPatientsInput, PsychologistUpdateWithoutPatientsInput>, PsychologistUncheckedUpdateWithoutPatientsInput>
  }

  export type SessionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput> | SessionCreateWithoutPatientInput[] | SessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPatientInput | SessionCreateOrConnectWithoutPatientInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPatientInput | SessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: SessionCreateManyPatientInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPatientInput | SessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPatientInput | SessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PsychologistCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PsychologistCreateWithoutSessionsInput, PsychologistUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PsychologistCreateOrConnectWithoutSessionsInput
    connect?: PsychologistWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSessionsInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type PsychologistUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<PsychologistCreateWithoutSessionsInput, PsychologistUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PsychologistCreateOrConnectWithoutSessionsInput
    upsert?: PsychologistUpsertWithoutSessionsInput
    connect?: PsychologistWhereUniqueInput
    update?: XOR<XOR<PsychologistUpdateToOneWithWhereWithoutSessionsInput, PsychologistUpdateWithoutSessionsInput>, PsychologistUncheckedUpdateWithoutSessionsInput>
  }

  export type PatientUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSessionsInput
    upsert?: PatientUpsertWithoutSessionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutSessionsInput, PatientUpdateWithoutSessionsInput>, PatientUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type PatientCreateWithoutPsychologistInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPsychologistInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPsychologistInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPsychologistInput, PatientUncheckedCreateWithoutPsychologistInput>
  }

  export type PatientCreateManyPsychologistInputEnvelope = {
    data: PatientCreateManyPsychologistInput | PatientCreateManyPsychologistInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutPsychologistInput = {
    id?: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutPsychologistInput = {
    id?: string
    patientId: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutPsychologistInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutPsychologistInput, SessionUncheckedCreateWithoutPsychologistInput>
  }

  export type SessionCreateManyPsychologistInputEnvelope = {
    data: SessionCreateManyPsychologistInput | SessionCreateManyPsychologistInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithWhereUniqueWithoutPsychologistInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutPsychologistInput, PatientUncheckedUpdateWithoutPsychologistInput>
    create: XOR<PatientCreateWithoutPsychologistInput, PatientUncheckedCreateWithoutPsychologistInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutPsychologistInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutPsychologistInput, PatientUncheckedUpdateWithoutPsychologistInput>
  }

  export type PatientUpdateManyWithWhereWithoutPsychologistInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutPsychologistInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: UuidFilter<"Patient"> | string
    psychologistId?: UuidFilter<"Patient"> | string
    name?: StringNullableFilter<"Patient"> | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    phone?: StringNullableFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    notes?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutPsychologistInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutPsychologistInput, SessionUncheckedUpdateWithoutPsychologistInput>
    create: XOR<SessionCreateWithoutPsychologistInput, SessionUncheckedCreateWithoutPsychologistInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutPsychologistInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutPsychologistInput, SessionUncheckedUpdateWithoutPsychologistInput>
  }

  export type SessionUpdateManyWithWhereWithoutPsychologistInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutPsychologistInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    psychologistId?: UuidFilter<"Session"> | string
    patientId?: UuidFilter<"Session"> | string
    sessionDate?: DateTimeFilter<"Session"> | Date | string
    summary?: StringNullableFilter<"Session"> | string | null
    behavioralObservations?: StringNullableFilter<"Session"> | string | null
    interventions?: StringNullableFilter<"Session"> | string | null
    patientReactions?: StringNullableFilter<"Session"> | string | null
    referrals?: StringNullableFilter<"Session"> | string | null
    therapeuticPlans?: StringNullableFilter<"Session"> | string | null
    diagnosticHypotheses?: StringNullableFilter<"Session"> | string | null
    techniqueUsed?: StringNullableFilter<"Session"> | string | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionCreateWithoutPatientInput = {
    id?: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    psychologist: PsychologistCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutPatientInput = {
    id?: string
    psychologistId: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutPatientInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput>
  }

  export type SessionCreateManyPatientInputEnvelope = {
    data: SessionCreateManyPatientInput | SessionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PsychologistCreateWithoutPatientsInput = {
    id?: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutPsychologistInput
  }

  export type PsychologistUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutPsychologistInput
  }

  export type PsychologistCreateOrConnectWithoutPatientsInput = {
    where: PsychologistWhereUniqueInput
    create: XOR<PsychologistCreateWithoutPatientsInput, PsychologistUncheckedCreateWithoutPatientsInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutPatientInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutPatientInput, SessionUncheckedUpdateWithoutPatientInput>
    create: XOR<SessionCreateWithoutPatientInput, SessionUncheckedCreateWithoutPatientInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutPatientInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutPatientInput, SessionUncheckedUpdateWithoutPatientInput>
  }

  export type SessionUpdateManyWithWhereWithoutPatientInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutPatientInput>
  }

  export type PsychologistUpsertWithoutPatientsInput = {
    update: XOR<PsychologistUpdateWithoutPatientsInput, PsychologistUncheckedUpdateWithoutPatientsInput>
    create: XOR<PsychologistCreateWithoutPatientsInput, PsychologistUncheckedCreateWithoutPatientsInput>
    where?: PsychologistWhereInput
  }

  export type PsychologistUpdateToOneWithWhereWithoutPatientsInput = {
    where?: PsychologistWhereInput
    data: XOR<PsychologistUpdateWithoutPatientsInput, PsychologistUncheckedUpdateWithoutPatientsInput>
  }

  export type PsychologistUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutPsychologistNestedInput
  }

  export type PsychologistUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutPsychologistNestedInput
  }

  export type PsychologistCreateWithoutSessionsInput = {
    id?: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientCreateNestedManyWithoutPsychologistInput
  }

  export type PsychologistUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    birth: string
    email: string
    cpf: string
    rg: string
    crp: string
    password: string
    phone: string
    specialty?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientUncheckedCreateNestedManyWithoutPsychologistInput
  }

  export type PsychologistCreateOrConnectWithoutSessionsInput = {
    where: PsychologistWhereUniqueInput
    create: XOR<PsychologistCreateWithoutSessionsInput, PsychologistUncheckedCreateWithoutSessionsInput>
  }

  export type PatientCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    psychologist: PsychologistCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateWithoutSessionsInput = {
    id?: string
    psychologistId: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PatientCreateOrConnectWithoutSessionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
  }

  export type PsychologistUpsertWithoutSessionsInput = {
    update: XOR<PsychologistUpdateWithoutSessionsInput, PsychologistUncheckedUpdateWithoutSessionsInput>
    create: XOR<PsychologistCreateWithoutSessionsInput, PsychologistUncheckedCreateWithoutSessionsInput>
    where?: PsychologistWhereInput
  }

  export type PsychologistUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PsychologistWhereInput
    data: XOR<PsychologistUpdateWithoutSessionsInput, PsychologistUncheckedUpdateWithoutSessionsInput>
  }

  export type PsychologistUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUpdateManyWithoutPsychologistNestedInput
  }

  export type PsychologistUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birth?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUncheckedUpdateManyWithoutPsychologistNestedInput
  }

  export type PatientUpsertWithoutSessionsInput = {
    update: XOR<PatientUpdateWithoutSessionsInput, PatientUncheckedUpdateWithoutSessionsInput>
    create: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutSessionsInput, PatientUncheckedUpdateWithoutSessionsInput>
  }

  export type PatientUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    psychologist?: PsychologistUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    psychologistId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientCreateManyPsychologistInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    birthDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SessionCreateManyPsychologistInput = {
    id?: string
    patientId: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateWithoutPsychologistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPsychologistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutPsychologistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUpdateWithoutPsychologistInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutPsychologistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutPsychologistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyPatientInput = {
    id?: string
    psychologistId: string
    sessionDate: Date | string
    summary?: string | null
    behavioralObservations?: string | null
    interventions?: string | null
    patientReactions?: string | null
    referrals?: string | null
    therapeuticPlans?: string | null
    diagnosticHypotheses?: string | null
    techniqueUsed?: string | null
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    psychologist?: PsychologistUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    psychologistId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    psychologistId?: StringFieldUpdateOperationsInput | string
    sessionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralObservations?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: NullableStringFieldUpdateOperationsInput | string | null
    patientReactions?: NullableStringFieldUpdateOperationsInput | string | null
    referrals?: NullableStringFieldUpdateOperationsInput | string | null
    therapeuticPlans?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticHypotheses?: NullableStringFieldUpdateOperationsInput | string | null
    techniqueUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}