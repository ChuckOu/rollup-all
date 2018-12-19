import { uglify } from "rollup-plugin-uglify";
import sourcemaps from 'rollup-plugin-sourcemaps'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import progress from 'rollup-plugin-progress'
import html from 'rollup-plugin-fill-html'
import dev from './rollup.dev.js'

const plugin = mode => {

    const plugins = dev

    if(mode === 'build') plugins.push(uglify(), progress({clearLine: false}))
    else plugins.push(
        html({
            template: 'public/index.html',
            filename: 'index.html',
        }),
        sourcemaps(),
        serve({
            open: true,
            openPage: '/index.html',
            contentBase: ['dist'],
            host: 'localhost',
            port: 10001,
        }),
        livereload(
            {watch: ['dist', 'src']}
        ))

    return plugins
}

export default plugin