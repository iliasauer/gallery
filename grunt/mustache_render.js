module.exports = {
    dev: {
        files: [
            {
                expand: true,
                cwd: 'src/pages/mustache/',
                src: ['*.mustache'],
                data: 'src/pages/mustache/common-data.json',
                dest: 'src/pages/html/',
                ext:'.html'
            }
        ]
    }
};