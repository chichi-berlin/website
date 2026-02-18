import globals from 'globals';


export default [
    {
        ignores: [
            'dist/**',
            'node_modules/**',
            'app/static/**',
            'app/js/vendors/**',
        ]
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
                $: 'readonly',
                jQuery: 'readonly'
            },
            parserOptions: {
                globalReturn: true,
                impliedStrict: true,
                jsx: false
            }
        },
        plugins: {},

        // see: https://eslint.org/docs/latest/rules/
        //    0 - turn the rule off
        //    1 - turn the rule on as a warning (doesn't affect exit code)
        //    2 - turn the rule on as an error (exit code is 1 when triggered)
        rules: {
            // FIXABLE
            'indent': [
                2,
                4,
                {
                    SwitchCase: 1,
                    VariableDeclarator: 1,
                    // NOTE: does not work well with some promises chains
                    MemberExpression: 'off',
                    outerIIFEBody: 1,
                    FunctionDeclaration: {
                        parameters: 2,
                        body: 1
                    },
                    FunctionExpression: {
                        parameters: 2,
                        body: 1
                    },
                    CallExpression: { arguments: 1 },
                    ArrayExpression: 1,
                    ObjectExpression: 1,
                    flatTernaryExpressions: true
                }
            ],
            // NOTE: may break things
            'linebreak-style': [ 2, 'unix' ],
            'quotes': [ 2, 'single', 'avoid-escape' ],
            // FIXABLE
            'semi': [ 2, 'always' ],


            // https://eslint.org/docs/rules/#possible-errors
            'for-direction': 2,
            'no-await-in-loop': 2,
            'no-compare-neg-zero': 2,
            'no-cond-assign': [ 2, 'always' ],
            'no-console': 1,
            'no-constant-condition': 2,
            'no-control-regex': 2,
            'no-debugger': 2,
            'no-dupe-args': 2,
            'no-dupe-keys': 2,
            'no-duplicate-case': 2,
            // NOTE: just comments are still fine
            'no-empty': 2,
            'no-empty-character-class': 2,
            'no-ex-assign': 2,
            'no-extra-boolean-cast': 2,
            'no-extra-parens': [ 2, 'functions' ],
            // FIXABLE
            'no-extra-semi': 2,
            'no-func-assign': 2,
            // NOTE: might break var usage <= ES5
            'no-inner-declarations': [ 2, 'both' ],
            'no-invalid-regexp': 2,
            'no-irregular-whitespace': 2,
            'no-obj-calls': 2,
            'no-prototype-builtins': 1,
            'no-regex-spaces': 2,
            'no-sparse-arrays': 2,
            'no-template-curly-in-string': 2,
            'no-unexpected-multiline': 2,
            'no-unreachable': 2,
            'no-unsafe-finally': 2,
            'no-unsafe-negation': 2,
            'use-isnan': 2,
            'valid-jsdoc': 0,
            'valid-typeof': 2,


            // https://eslint.org/docs/rules/#best-practices
            'accessor-pairs': [
                2,
                {
                    getWithoutSet: false,
                    setWithoutGet: true
                }
            ],
            // NOTE: it depends on the functions
            'array-callback-return': 1,
            // NOTE: should be active
            'block-scoped-var': 0,
            'class-methods-use-this': 2,
            // INFO: count of how many conditions are in one function
            'complexity': [ 2, 20 ],
            // INFO: return with no explicit value set, throws; sometimes it's more readable to only return within conditions
            'consistent-return': 1,
            // INFO: throws when using no braces for block scope
            'curly': [ 2, 'all' ],
            'default-case': 1,
            'dot-location': [ 2, 'property' ],
            // NOTE: breaks recommended structure of a meteor template logic
            'dot-notation': [
                0,
                {
                    allowKeywords: true,
                    allowPattern: ''
                }
            ],
            // INFO: requires === and !==
            'eqeqeq': 2,
            'guard-for-in': 2,
            'no-alert': 2,
            'no-caller': 2,
            // INFO: to avoid, use block scope (braces) for each case
            'no-case-declarations': 2,
            'no-div-regex': 2,
            // NOTE: may needs to be turned off, often more readable with else block
            'no-else-return': 0,
            // NOTE: functions containing only comment, wont throw
            'no-empty-function': [ 2, { allow: [] } ],
            'no-empty-pattern': 2,
            'no-eq-null': 2,
            'no-eval': 2,
            // NOTE: will break polyfilling, then deactivate it
            'no-extend-native': [ 2, { exceptions: [] } ],
            // INFO: flags also every bind usage on arrow function
            'no-extra-bind': 2,
            'no-extra-label': 2,
            'no-fallthrough': 2,
            'no-floating-decimal': 2,
            // NOTE: breaks meteor <= 1.2 (package globals)
            'no-global-assign': [ 1, { exceptions: [] } ],
            'no-implicit-coercion': [
                2,
                {
                    boolean: true,
                    number: true,
                    string: true,
                    allow: []
                }
            ],
            // NOTE: may break meteor projects < v1.3
            'no-implicit-globals': 2,
            'no-implied-eval': 2,
            // NOTE: may needs to be turned off; breaks 'this' in callbacks
            'no-invalid-this': 0,
            'no-iterator': 2,
            'no-labels': [
                2,
                {
                    allowLoop: false,
                    allowSwitch: false
                }
            ],
            'no-lone-blocks': 2,
            'no-loop-func': 2,
            'no-magic-numbers': [
                0,
                {
                    ignore: [],
                    ignoreArrayIndexes: false,
                    enforceConst: false,
                    detectObjects: false
                }
            ],
            // FIXABLE
            'no-multi-spaces': [
                // NOTE: need more testing and adjustment
                1,
                {
                    ignoreEOLComments: true,
                    exceptions: {
                        VariableDeclarator: true,
                        ImportDeclaration: true,
                        // BinaryExpression: true,
                        // ReturnStatement: true
                    }
                }
            ],
            'no-multi-str': 2,
            // INFO: using 'new' in assignments is still valid; might be okay for showing explicitly that the instance has no further usage (e.g. new Promise)
            'no-new': 1,
            'no-new-func': 2,
            'no-new-wrappers': 2,
            'no-octal': 2,
            'no-octal-escape': 2,
            // NOTE: it is deactivated on purpose, might reconsider
            'no-param-reassign': [
                0,
                {
                    props: false
                }
            ],
            // INFO: use 'Object.getPrototypeOf( foo )' instead
            'no-proto': 2,
            'no-redeclare': [
                2,
                {
                    // NOTE: may break things in meteor < v1.3
                    builtinGlobals: true
                }
            ],
            // NOTE: useful for deprecating certain API usage
            'no-restricted-properties': [
                0,
                {
                    object: 'disallowedObjectName',
                    property: 'anotherDisallowedPropertyName',
                    message: 'Please use allowedObjectName.allowedPropertyName.'
                }
            ],
            'no-return-assign': [ 2, 'always' ],
            'no-return-await': 2,
            'no-script-url': 2,
            'no-self-assign': 2,
            'no-self-compare': 2,
            'no-sequences': 2,
            'no-throw-literal': 2,
            // NOTE: not sure if I understand this correctly, let's try
            'no-unmodified-loop-condition': 2,
            'no-unused-expressions': [
                2,
                {
                    allowShortCircuit: true,
                    allowTernary: false
                }
            ],
            'no-unused-labels': 2,
            // INFO: cant detect usage with dynamic expression
            'no-useless-call': 2,
            // INFO: disabled in favour of higher readability
            'no-useless-concat': 0,
            'no-useless-escape': 2,
            'no-useless-return': 2,
            'no-void': 2,
            // NOTE: currently it just warns
            'no-warning-comments': [
                1,
                {
                    terms: [ 'fixme'],
                    location: 'start'
                }
            ],
            'no-with': 2,
            // TODO prefer-promise-reject-errors': 2
            'radix': [ 2, 'always' ],
            // NOTE: unsure; lack of experience
            'require-await': 1,
            // INFO: 'vars' means just 'var', not 'const' or 'let'
            'vars-on-top': 0,
            // e.g. (function( param1 ){}( availableAsParam1 ))
            'wrap-iife': [ 2, 'outside' ],
            // NOTE: need adjustment
            'yoda': [
                2,
                'never',
                {
                    exceptRange: true,
                    onlyEquality: false
                }
            ],


            // https://eslint.org/docs/rules/#strict-mode
            // INFO: okay for meteor (non-modules) in project-level,
            //       but breaks implicit package-globals
            'strict': [ 2, 'safe' ],


            // https://eslint.org/docs/rules/#variables
            'init-declarations': [
                0,
                'always'
                // NOTE: only valid when 'never' is set
                // { ignoreForLoopInit: true }
            ],
            // INFO: ignoring <= IE8 here
            'no-catch-shadow': 0,
            // INFO: to delete variables, set them to ``undefined`
            'no-delete-var': 2,
            'no-label-var': 2,
            'no-restricted-globals': [
                1,
                'event'
            ],
            // NOTE: may needs to be turned off; too much generic
            'no-shadow': [
                // names in global env scopes, e.g. 'name', 'length'
                1,
                {
                    builtinGlobals: true,
                    hoist: 'functions',
                    // NOTE: depending on the env and if set to 2, some of
                    //       some of the typical usages might need to become allowed
                    allow: []
                }
            ],
            'no-shadow-restricted-names': 2,
            // NOTE: disabled, because it might breaks meteor code < 1.3
            'no-undef': [
                0,
                {
                    typeof: false
                }
            ],
            // INFO: the opposite is preferred (no implicit initialization)
            'no-undef-init': 0,
            // INFO: using undefined should be allowed
            'no-undefined': 0,
            'no-unused-vars': [
                1,
                {
                    vars: 'local',
                    args: 'none',
                    varsIgnorePattern: '',
                    argsIgnorePattern: ''
                }
            ],
            // NOTE: convention over configuration (see style-guide)
            'no-use-before-define': [
                0,
                {
                    functions: false,
                    classes: true
                }
            ],


            // https://eslint.org/docs/rules/#nodejs-and-commonjs
            // INFO: may throw when it's done right but within a condition
            'callback-return': [
                2,
                [
                    'cb',
                    'callback',
                    'next'
                ]
            ],
            'global-require': 2,
            'handle-callback-err': [
                2,
                // NOTE: may need some expansion
                '^(err|error)$'
            ],
            'no-buffer-constructor': 2,
            // INFO: partly disabled, because not sure how it will work
            'no-mixed-requires': [
                2,
                // {
                //      grouping: false,
                //      allowCall: true
                // }
            ],
            'no-new-require': 2,
            'no-path-concat': 2,
            // NOTE: should be enabled, but is used in meteor sometimes
            'no-process-env': 0,
            // INFO: the developers knows what she is doing (it should be spotted in a code review)
            'no-process-exit': 2,
            // INFO: typically used to control what is available for project devs to implement features
            'no-restricted-modules': [
                0,
                // 'deniedModuleName'
            ],
            // INFO: use Promises, Generator or async/await to prevent callback hell
            'no-sync': 2,



            // https://eslint.org/docs/rules/#stylistic-issues
            'array-bracket-newline': [
                2,
                {
                    multiline: true,
                    // minItems: 2
                }
            ],
            'array-bracket-spacing': [
                // FIXABLE, SELF: if enabled, it's just my personal flavor
                2,
                'always',
                {
                    // INFO: set to true, to enable, because it's set to
                    singleValue: true,
                    // 'always'. for 'never' it's the other way around
                    objectsInArrays: true,
                    arraysInArrays: true
                }
            ],
            'array-element-newline': [
                0,
                {
                    multiline: true
                }
            ],
            // FIXABLE, SELF: if enabled, it's just my personal flavor
            'block-spacing': [
                2,
                'always'
            ],
            // INFO: fully support this format, except try-catch (where catch goes into a new line)
            'brace-style': [
                1,
                '1tbs',
                { allowSingleLine: true }
            ],
            // NOTE: third party APIs might require other formats
            'camelcase': [
                1,
                { properties: 'always' }
            ],
            'capitalized-comments': [
                0,
                'never',
                {
                    ignorePattern: '',
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true
                }
            ],
            'comma-dangle': [
                2,
                {
                    arrays: 'never',
                    objects: 'never',
                    imports: 'never',
                    exports: 'never',
                    functions: 'never'
                },
            ],
            // FIXABLE
            'comma-spacing': [
                2,
                {
                    before: false,
                    after: true
                }
            ],
            'comma-style': [ 2, 'last' ],
            // FIXABLE, SELF: if enabled, it's just my personal flavor
            'computed-property-spacing': [
                2,
                'always'
            ],
            'consistent-this': [
                2,
                'self',
                'ctx',
                'instance'
            ],
            // FIXABLE
            'eol-last': [ 2, 'unix' ],
            // FIXABLE, SELF: if enabled, it's just my personal flavor
            'func-call-spacing': [ 2, 'never' ],
            'func-name-matching': [
                2,
                'always',
                {
                    includeCommonJSModuleExports: false
                }
            ],
            // NOTE: in ES6 it's not a problem any more
            'func-names': [
                2,
                'as-needed'
            ],
            // NOTE: might need to be turned off
            'func-style': [
                0,
                'declaration',
                { allowArrowFunctions: true }
            ],
            'id-blacklist': [
                0,
                'undefined', 'arguments'
                // more blacklisted identifier names (var, fn, prop)
            ],
            'id-length': [
                1,
                {
                    min: 2,
                    max: 30,
                    properties: 'never',
                    exceptions: [ 'a', 'b', 'c', 'x', 'y' ],
                }
            ],
            // INFO: more fexible then the camelcase rule
            'id-match': [
                0,
                // currently same as camelcase
                '^[a-z]+([A-Z][a-z]+)*$',
                { properties: false }
            ],
            // indent --> relocated to the first few rules (above)
            // FIXABLE
            'jsx-quotes': [ 2, 'prefer-double' ],
            // related to no-multi-spaces rule
            'key-spacing': [
                2,
                {
                    beforeColon: false,
                    afterColon: true,
                    // INFO: enables to do more, if it servs readability
                    mode: 'minimum'
                }
            ],
            // FIXABLE, NOTE: needs testing
            'keyword-spacing': [
                1,
                {
                    before: false,
                    after: false,
                    overrides: {
                        return: { after: true },
                        function: { before: true },
                        case: { after: true },
                        import: { after: true },
                        export: { after: true },
                        const: { after: true },
                        var: { after: true },
                        let: { after: true },
                        from: { before: true, after: true }
                    }
                }
            ],
            'line-comment-position': [
                0,
                // NOTE: or 'above'
                'beside'
            ],
            // linebreak-style --> relocated to the first few rules (above)
            'lines-around-comment': [
                0,
                {
                    beforeBlockComment: false,
                    afterBlockComment: false,
                    beforeLineComment: true,
                    afterLineComment: true,
                    allowBlockStart: false,
                    allowBlockEnd: false,
                    allowObjectStart: true,
                    allowObjectEnd: true,
                    allowArrayStart: true,
                    allowArrayEnd: true,
            
                }
            ],
            'max-depth': [ 2, 6 ],
            'max-len': [
                2,
                {
                    code: 100,
                    // comment: eq code 
                    tabWidth: 4,
                    ignoreComments: false,
                    ignoreTrailingComments: false,
                    ignoreUrls: true
                }
            ],
            'max-lines': [
                0,
                {
                    max: 300,
                    skipBlankLines: true,
                    skipComments: false
                }
            ],
            'max-nested-callbacks': [ 2, 6 ],
            'max-params': [ 2, 10 ],
            'max-statements': [
                0, 10, { ignoreTopLevelFunctions: true }
            ],
            'max-statements-per-line': [
                2,
                { max: 2 }
            ],
            'multiline-ternary': [
                0,
                'never'
            ],
            'new-cap': [
                2,
                {
                    newIsCap: true,
                    capIsNew: false,
                    newIsCapExceptions: [],
                    // DEFAULT: Array, Boolean, Date, Error, Function, Number, Object, RegExp, String, Symbol
                    capIsNewExceptions: [],
                    properties: false
                }
            ],
            'new-parens': 2,
            'newline-per-chained-call': [ 1, { ignoreChainWithDepth: 3 } ],
            // INFO: don't use constructor anyway, but literal notation
            'no-array-constructor': 2,
            'no-bitwise': [
                0,
                {
                    int32Hint: false,
                    allow: [
                        '~', '^',
                        '<<', '>>>', '>>',
                        '|=', '&=', '^=',
                        '<<=', '>>=', '>>>='
                    ],
                }
            ],
            'no-continue': 0,
            'no-inline-comments': 0,
            'no-lonely-if': 0,
            'no-mixed-operators': [
                0
                // TODO: have a deeper look into the options, especially the operator groups
            ],
            'no-mixed-spaces-and-tabs': 2,
            'no-multi-assign': 0,
            'no-multiple-empty-lines': [
                0,
                {
                    max: 7,
                    maxBOF: 2,
                    maxEOF: 1
                }
            ],
            'no-negated-condition': 0,
            'no-nested-ternary': 0,
            'no-new-object': 0,
            // SELF: if enabled, it's just my personal flavor
            'no-plusplus': [
                2,
                { allowForLoopAfterthoughts: true }
            ],
            // see https://eslint.org/docs/rules/no-restricted-syntax
            'no-restricted-syntax': [
                2,
                // INFO: preventing ES6 classes from being used
                'ClassDeclaration',
                'ClassExpression'
            ],
            'no-tabs': 2,
            'no-ternary': 0,
            // FIXABLE
            'no-trailing-spaces': [
                1,
                { skipBlankLines: true }
            ],
            'no-underscore-dangle': 0,
            'no-unneeded-ternary': [
                2,
                { defaultAssignment: false }
            ],
            // INFO: looks like it//s valid, but we are not going to allow it
            'no-whitespace-before-property': 2,
            // NOE: overwritten by rule: curly
            'nonblock-statement-body-position': [
                2,
                'beside'
            ],
            'object-curly-newline': [
                2,
                {
                    multiline: true,
                    consistent: true
                }
            ],
            // FIXABLE, SELF: if enabled, it's just my personal flavor
            'object-curly-spacing': [
                2,
                'always',
                {
                    objectsInObjects: true,
                    arraysInObjects: true
                }
            ],
            'object-property-newline': [
                2,
                {
                    allowMultiplePropertiesPerLine: true
                }
            ],
            // SELF: if enabled, it's just my personal flavor
            'one-var': [
                // NOTE: let the dev decide what suffices
                0,
                {
                    var: 'never',
                    let: 'never',
                    const: 'never'
                }
            ],
            // SELF: if enabled, it's just my personal flavor
            'one-var-declaration-per-line': [
                0,
                'initializations'
            ],
            // NOTE: let the dev decide what suffices
            'operator-assignment': [ 0, 'always' ],
            // NOTE: needs more testing
            'operator-linebreak': [
                2,
                'before',
                {
                    overrides: {
                        '?': 'after'
                    }
                }
            ],
            'padded-blocks': [ 0, 'always' ],
            'padding-line-between-statements': [
                2,
                { blankLine: 'always', prev: 'break', next: 'case' }
            ],
            // NOTE: needs more testing
            'quote-props': [
                1,
                'as-needed',
                {
                    keywords: true,
                    unnecessary: false,
                    numbers: true
                }
            ],
            'require-jsdoc': [
                0,
                {
                    require: {
                        FunctionDeclaration: true,
                        ClassDeclaration: false,
                        MethodDefinition: false
                    }
                }
            ],
            // semi --> relocated to the first few rules (above)
            // FIXABLE
            'semi-spacing': [
                2,
                {
                    before: false,
                    after: true
                }
            ],
            'semi-style': [
                2,
                'last'
            ],
            'sort-keys': [
                0,
                'asc',
                {
                    caseSensitive: false,
                    natural: false
                }
            ],
            'sort-vars': [
                0,
                { ignoreCase: true }
            ],
            // FIXABLE
            'space-before-blocks': [
                // NOTE: temp. disabled, see https://github.com/eslint/eslint/issues/5776
                0,
                {
                    functions: 'never',
                    keywords: 'never',
                    classes: 'never'
                }
            ],
            // FIXABLE
            'space-before-function-paren': [
                2,
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always'
                }
            ],
            // FIXABLE, NOTE: doesn't work with '})'
            'space-in-parens': [
                0,
                'always',
                {
                    // more: '{}', '[]', '()'
                    exceptions: [ 'empty', '()', '{}' ]
                }
            ],
            // FIXABLE
            'space-infix-ops': [
                2,
                { int32Hint: false }
            ],
            // FIXABLE
            'space-unary-ops': [
                2,
                {
                    words: true,
                    nonwords: false
                }
            ],
            // FIXABLE, NOTE: would break commented out code
            'spaced-comment': [
                // SELF: if enabled, it's just my personal flavor
                1,
                'always',
                {
                    line: {
                        markers: [  ],
                        exceptions: [ '-', '+', '#', '*' ]
                    },
                    // block: { }
                }
            ],
            'switch-colon-spacing': [
                2,
                {
                    before: false,
                    after: true
                }
            ],
            'template-tag-spacing': [
                2,
                'never'
            ],
            // NOTE: if file is encodes with other than UTF-8, it
            'unicode-bom': [
                // might have to become optional
                2,
                'never'
            ],
            'wrap-regex': 2,



            // https://eslint.org/docs/rules/#ecmascript-6
            'arrow-body-style': [ 2, 'always' ],
            'arrow-parens': [ 2, 'always' ],
            // FIXABLE, SELF: if enabled, it's just my personal flavor
            'arrow-spacing': [
                2,
                {
                    before: false,
                    after: false
                }
            ],
            'constructor-super': 2,
            // SELF: if enabled, it's just my personal flavor
            'generator-star-spacing': [
                2,
                {
                    before: true,
                    after: true
                }
            ],
            'no-class-assign': 2,
            'no-confusing-arrow': 2,
            'no-const-assign': 2,
            'no-dupe-class-members': 2,
            'no-duplicate-imports': [
                // NOTE: might become an issue, when such imports
                2,
                // affect the load-order somehow
                {
                    includeExports: false
                }
            ],
            'no-new-symbol': 2,
            'no-restricted-imports': [
                0,
                // 'deniedImportName'
                // { patterns': [ 'import1/*' ], paths': [ 'import2' ]  },
            ],
            'no-this-before-super': 2,
            'no-useless-computed-key': 2,
            // NOTE: opposite would be great, to clarify that the dev didn't forget it by accident
            'no-useless-constructor': 0,
            'no-useless-rename': [
                2,
                {
                    ignoreImport: false,
                    ignoreExport: false,
                    ignoreDestructuring: false
                }
            ],
            // NOTE: should be turned on in the future
            'no-var': 2,
            // NOTE: disabled because of (meteors) event maps
            'object-shorthand': [
                0,
                // OR: 'always', 'properties', 'never', 'consistent', 'consistent-as-needed'
                'methods',
                {
                    avoidQuotes: true,
                    ignoreConstructors: false,
                    avoidExplicitReturnArrows: true
                }
            ],
            // INFO: let the dev decide whats best in each case
            'prefer-arrow-callback': 0,
            // INFO: dev should decide, NOTE: may change in the future
            'prefer-const': 0,
            // INFO: rules should ot be enforced
            'prefer-destructuring': [
                0,
                { array: true, object: true },
                { enforceForRenamedProperties: true }
            ],
            'prefer-numeric-literals': 2,
            'prefer-rest-params': 2,
            // NOTE: might break things
            'prefer-spread': 2,
            // INFO: sometimes it's more readable w/ string concat
            'prefer-template': 1,
            'require-yield': 2,
            'rest-spread-spacing': [
                2,
                'never'
            ],
            'sort-imports': [
                0,
                {
                    ignoreCase: true,
                    ignoreMemberSort: true,
                    memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
                }
            ],
            'symbol-description': 2,
            // FIXABLE, SELF: if enabled, it's just my personal flavor
            'template-curly-spacing': [ 2, 'always' ],
            'yield-star-spacing': [
                2,
                {
                    before: false,
                    after: true
                }
            ]
        }
    }
];
