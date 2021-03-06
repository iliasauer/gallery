module.exports = {

    // tasks' settings
    options: {
        limit: 3
    },

    // dev tasks
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'less:dev'
    ],

    // production tasks
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'less:prod',
        'uglify'
    ],

    imgFirst: [
        'imagemin'
    ]

};