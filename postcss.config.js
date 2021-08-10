module.exports = {
    plugins: [    
        require('tailwindcss'),
        require('precss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
    ],
}
